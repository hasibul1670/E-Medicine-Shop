/* eslint-disable react/prop-types */

import {
  AiFillDelete,
  AiOutlineClose,
  AiOutlineMinusCircle,
  AiOutlinePlusSquare,
} from "react-icons/ai";

const ShoppingCart: React.FC<any> = ({onClose}) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="p-2 shadow-xl cursor-pointer	">
      <button onClick={handleClose} className="text-xl btn-outline  bg-cyan-500 p-2 rounded-lg">
        <AiOutlineClose />
      </button>
      <h2 className="text-red-500 text-sm">Total Items: 44</h2>
      <div className=" mt-4 gap-5">
        <div className="flex justify-between">
          <h1 className="font-bold text-cyan-700">Total: 544</h1>
        </div>

        <div className="border-b-2 border-sky-500 p-5">
          <p className="text-cyan-700 font-bold  "> 55</p>
          <p className=" font-bold text-sm"> Price: 4522 tk</p>
          <p className="text-sky-500 font-bold">Quantity: 47</p>
        </div>

        <p className="text-xl font-bold text-blue-600"></p>
      </div>
    </div>
  );
};

export default ShoppingCart;
