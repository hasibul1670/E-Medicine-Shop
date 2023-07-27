/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  
  return (
    <div className="card w-58 h-96 p-1 border-solid border-2 border-sky-500 shadow-xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300">
      <figure className="px-6 pt-2">
        <img alt="example" src={product?.image_url} height={200} width={200} />
      </figure>
      <div className="card-body items-center text-center py-3">
        <h6 className="font-bold text-cyan-700 ">{product?.name}</h6>
        <p className=" text-cyan-700 ">Category:{product?.category}</p>
        <p className=" text-cyan-700 font-bold ">Brand:{product?.brand}</p>
        <p className="text-bold text-cyan-400">
          Stock Available:{product?.stock}
        </p>
        <h6 className="font-bold  ">
          {product?.price} {product?.currency}
        </h6>

        <Link href={`/products/${product?._id}`}>
          <button className="btn  btn-primary  btn-sm">Show Detail</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
