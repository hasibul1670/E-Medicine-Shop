/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import defaultImage from "../../assets/coursephoto/p1.jpg";

const ProductCard = ({ product }) => {
  return (

    <div className="card w-auto h-72 p-1 border-solid border-2 border-sky-500 shadow-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-50">

<figure className="px-6 pt-2 relative group overflow-hidden hover:scale-105 transition-transform duration-300">
  <img
    alt="example"
    src={product?.url || defaultImage}
    height={200}
    width={200}
    className="group-hover:scale-125 transform origin-center"
  />
</figure>



      <div className="card-body items-center text-center py-3">
        <h6 className="font-bold text-cyan-700 ">
          {product?.name}{" "} <br />
          <span className="text-xs text-blue-700"> {product?.measurement} </span>{" "}
        </h6>
        <p className=" text-pink-700 text-xs font-bold ">
          Manufacturer :{product?.company}
        </p>

        <h6 className="font-bold  ">
          {product?.price} {product?.currency}
        </h6>
        <div className="flex justify-between ">
          {" "}
          <Link href={`/products/${product?._id}`}>
            <button className="btn  capitalize	 btn-primary mr-4 btn-sm">
               Cart
            </button>
          </Link>

          <Link to={`/products/${product?._id}`}>
            <button className="btn  capitalize  btn-primary  btn-sm">
               Details
            </button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
