"use client";

const NavBar = () => {
  return (
    <div className=" bg-red-500 fixed  w-full h-20  flex justify-between items-center px-5  ">
      <p className="font-bold">E-Care</p>
      <p>
        {" "}
        <div>
          <input
            type="text"
            id="first_name"
            className="w-full focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block p-2.5  "
            placeholder="Search for Product"
            required
          />
        </div>
      </p>
      <p> Cart + Account</p>
    </div>
  );
};

export default NavBar;
