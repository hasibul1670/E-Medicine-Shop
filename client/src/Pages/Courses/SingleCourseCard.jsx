/* eslint-disable no-unused-vars */

import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import { useSingleProductQuery } from "../../redux/features/product/productApi";
import LoadingSpinner from "../Shared/LoadingSpinner";

import { useState } from "react";
import { useCreateCartMutation } from "../../redux/features/cart/cartApi";
import { useAppDispatch } from "./../../redux/hook";

const SingleCourseCard = () => {
  const { id } = useParams();
  const [createCart] = useCreateCartMutation();
  const [addedToCart, setAddedToCart] = useState(false);

  let courseData;

  const dispatch = useAppDispatch();

  const { data: product, isLoading } = useSingleProductQuery(id, {
    refetchOnMountOrArgChange: true,
  });

  if (product && product?.data) {
    courseData = product.data;
  } else {
    return (
      <div>
        Medecine is Not available.
        <LoadingSpinner />;
      </div>
    );
  }
  if (!courseData) {
    return <div>No Course available.</div>;
  }

  courseData = product?.data;

  const email = localStorage.getItem("email");

  const handleAddToCart = async (course) => {
    try {
      const options = {
        data: { course: course, email: email },
      };
      const result = await createCart(options).unwrap();
      if (result.statusCode === 200) {
        setAddedToCart(true);
        toast.success("Course is Added to Cart Successfully!");
      }
    } catch (error) {
      toast.error("THis Course is Already Added to Cart ");
      setAddedToCart(true);
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="py-20">
      <Helmet>
        <title>Medecine | {courseData.name}</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <figure className="px-6 pt-2 relative group overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              alt="example"
              src={courseData?.url}
              height={300}
              width={300}
              className="group-hover:scale-125 transform origin-center"
            />
          </figure>
          <div>
            <h1 className="text-xl text-cyan-500 font-bold">
              {courseData.name}
              <span className="text-xs text-red-700 ml-2">
                [{courseData?.measurement}]
              </span>
            </h1>
            <h1 className="text-sm text-cyan-800 font-bold">
              {courseData.generic}
            </h1>
            <p className=" text-sm font-semibold ">
              Category : {courseData.category}
            </p>

            <p className=" text-sm  text-pink-800 font-semibold ">
              Manufacturer : {courseData.company}
            </p>

            <p className=" text-md font-semibold ">
              Price : {courseData.price} tk
            </p>
            <p className=" text-md font-semibold ">
              Description :{" "}
              <span className="text-sm text-cyan-800">
                {courseData.productDescription}
              </span>
            </p>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            {addedToCart ? (
              <Link
                to="/dashboard"
                className="btn btn-primary btn-sm mx-2     
      "
              >
                Go to Cart
              </Link>
            ) : (
              <button
                onClick={() => handleAddToCart(courseData)}
                className="btn btn-primary btn-sm mx-2"
              >
                Add to Cart
              </button>
            )}

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourseCard;
