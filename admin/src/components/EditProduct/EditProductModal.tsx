import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { useSingleProductQuery, useUpdateProductMutation } from "../../redux/features/product/productApi";
import Loader from "../LoaderComponent/Loader";
import { Button } from "../SharedComponents/Button";
/* eslint-disable @typescript-eslint/no-explicit-any */

type iEditProductModalType = {
  closeModal?: any;
  product?: any;
  handleEditProduct?: any;
  id?: any;
};

const EditProductModal: React.FC<iEditProductModalType> = ({
  closeModal,
  handleEditProduct,
  id,
}) => {
  const { data, isLoading } = useSingleProductQuery(id, {
    refetchOnMountOrArgChange: true,
  });
  const singleProduct = data?.data;
  const { register, handleSubmit, setValue } = useForm();
  const [updateProduct] = useUpdateProductMutation();

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

  const onSubmit = async(data: any) => {
    handleEditProduct(data);
   await updateProduct({ id, singleProduct });
  };

  return (
    <div>
      <div className="fixed inset-0 bg-gray-950 bg-opacity-75  z-20 flex items-center justify-center">
        <div className="bg-white p-2  rounded shadow-lg w-8/12 h-3/5">
          {/* Modal Header */}
          <div className="mb-4 flex  justify-between ">
            <h2 className="text-lg font-bold">Edit Product</h2>

            <IoMdClose
              className="text-2xl cursor-pointer bg-cyan-200  text-red-400 "
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
                      className="block text-sm font-medium text-gray-700"
                    >
                      Product Name
                    </label>
                    <input
                      {...register("name")}
                      id="name"
                      className="border rounded px-3 py-2 w-full"
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
                      className="border rounded px-3 py-2 w-full"
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
                      className="border rounded px-3 py-2 w-full"
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
                      className="border rounded px-3 py-2 w-full"
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
                      className="border resize rounded-md  px-3  py-2 w-full "
                      placeholder="Description"
                    />
                  </div>

                  <div className="mb-4 w-1/2 ">
                    <label
                      htmlFor="measurement"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Measurement
                    </label>
                    <input
                      {...register("measurement")}
                      id="measurement"
                      className="border rounded px-3 py-2 w-full"
                      placeholder="Origin"
                    />
                  </div>
                </div>

                <div className="flex justify-end mt-4 mr-2">
                  <Button onClick={handleEditProduct}>Save</Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditProductModal;
