import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import {
  useSingleProductQuery,
  useUpdateProductMutation,
} from "../../redux/features/product/productApi";
import CustomInput from "../ExpenseComponents/CustomInput";
import Loader from "../LoaderComponent/Loader";
import { Button } from "../SharedComponents/Button";
/* eslint-disable @typescript-eslint/no-explicit-any */

type iEditProductModalType = {
  closeModal?: any;
  product?: any;
  handleEditProduct?: any;
  id?: any;
};

const CreateProductModal: React.FC<iEditProductModalType> = ({
  closeModal,
  id,
}) => {
  const { data, isLoading } = useSingleProductQuery(id, {
    refetchOnMountOrArgChange: true,
  });

  const singleProduct = data?.data;
  const { register, handleSubmit, setValue } = useForm();
  const [updateProduct] = useUpdateProductMutation();

  const onSubmit = async (data: any) => {
    await updateProduct({ id, data });
    await closeModal();
  };

  useEffect(() => {
    if (singleProduct) {
      setValue("name", singleProduct.name);
      setValue("generic", singleProduct.generic);
      setValue("price", singleProduct.price);
      setValue("productDescription", singleProduct.productDescription);
      setValue("country", singleProduct.country);
      setValue("measurement", singleProduct.measurement);
    }
  }, [singleProduct, setValue]);

  return (
    <div>
      <div className="fixed inset-0 bg-gray-950 bg-opacity-75  z-20 flex items-center justify-center">
        <div className="bg-white p-2  rounded shadow-lg w-8/12 h-3/5">
          {/* Modal Header */}
          <div className="mb-4 flex   justify-between ">
            <h2 className="text-lg font-bold">Create a Product</h2>

            <IoMdClose
              className="text-2xl  hover:scale-150 cursor-pointer bg-cyan-200  text-red-400 "
              onClick={closeModal}
            />
          </div>

          {/* Modal Body */}
          {isLoading ? (
            <Loader />
          ) : (
            <div className="max-h-80 overflow-y-auto">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-between mx-2">
                  <div className="mb-4 w-1/2 mr-2">
                    <label
                      htmlFor="name"
                      className="block text-sm  font-medium text-gray-700"
                    >
                      Product Name
                    </label>
                    <input
                      {...register("name")}
                      id="name"
                      className="border border-blue-400 rounded px-3 py-2 w-full"
                      placeholder="Product Name"
                    />
                  </div>
                  <div className="mb-4 w-1/2">
                    <label
                      htmlFor="generic"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Generic
                    </label>
                    <input
                      {...register("generic")}
                      id="generic"
                      className="border  border-blue-400 rounded px-3 py-2 w-full"
                      placeholder="Generic"
                    />
                  </div>
                </div>

                {/* Price & Country */}
                <div className="flex justify-between mx-2">
                  <div className="mb-4 w-1/2 mr-2">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Price
                    </label>
                    <input
                      {...register("price")}
                      id="price"
                      type="number"
                      className="border  border-blue-400  rounded px-3 py-2 w-full"
                      placeholder="Price"
                    />
                  </div>

                  <div className="mb-4 w-1/2 ">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Origin
                    </label>
                    <input
                      {...register("country")}
                      id="country"
                      className="border  border-blue-400 rounded px-3 py-2 w-full"
                      placeholder="Origin"
                    />
                  </div>
                </div>

                {/* des & measurement */}

                <div className="flex justify-between mx-2">
                  <div className="mb-4 w-1/2  mr-2">
                    <label
                      htmlFor="productDescription"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <textarea
                      {...register("productDescription")}
                      id="productDescription"
                      className="border  border-blue-400 resize rounded-md  px-3  py-2 w-full "
                      placeholder="Description"
                    />
                  </div>

                  <CustomInput
                    label="Measurement"
                    type="text"
                    name="measurement"
                    defaultValue=""
                    required
                    min="0"
                  />
                </div>

                <div className="flex justify-end mt-4 mr-2">
                  <Button>Save</Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateProductModal;
