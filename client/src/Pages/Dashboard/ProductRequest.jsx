/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";

const ProductRequest = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const email = localStorage.getItem("email");
  const onSubmit = (data) => {
    console.log(data, email);
  };

  return (
    <div className=" items-center justify-center h-screen ">
      <div className="border-dashed border-2 border-sky-500 p-3 text-center">
        <p className="text-xl font-bold text-pink-800">Product Request</p>
        <p className="text-sm font-semibold text-teal-700">
          Can not find a product you want in our inventory? Let us know what you
          are looking for and we will try our best to bring it in.
        </p>
        <div className=" flex justify-center ">
          <form className="form-control w-1/2" onSubmit={handleSubmit(onSubmit)}>
            <textarea
              placeholder="Product Description"
              className="textarea textarea-bordered  textarea-primary my-2 textarea-lg w-full  max-w-xs"
              {...register("productDescription", { required: true })}
            ></textarea>

            {errors.productDescription?.type === "required" && (
              <small className="text-red-600">
                Product Description is required!
              </small>
            )}

            <input
              type="number"
              placeholder="Quantity"
              className="input my-2 input-bordered input-info w-full max-w-xs"
              {...register("quantity", { required: true, min: 1 })}
            />
            {errors.quantity && (
              <small className="text-red-600">
                Quantity must be at least 1
              </small>
            )}

            <button type="submit" className="btn w-48 capitalize btn-primary mt-2">
              Product Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductRequest;
