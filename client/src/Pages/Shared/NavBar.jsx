/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useAppSelector } from "../../redux/hook";
import CartSlider from "./CartSlider";
import CustomDropdown from "./CustomDropdown";

const NavBar = () => {
  const email = localStorage.getItem("email");
  const role = localStorage.getItem("role");

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
    document.body.classList.toggle("drawer-open");
  };

  const handleCartSliderClose = () => {
    setIsDrawerOpen(false);
    document.body.classList.remove("drawer-open");
  };

  const { book } = useAppSelector((state) => state.cart);

  const totalQuantity = () => {
    let totalQuantity = 0;
    book.forEach((book) => {
      totalQuantity += book.quantity;
    });

    return totalQuantity;
  };

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="navbar fixed z-20 sm:px-20 px-8  max-w-screen-2xl  flex justify-between bg-green-900	h-4 ">
      <div className="navbar-start ">
        <Link
          to="/"
          className="btn   text-white font-bold lg:text-xl text-sm btn-ghost normal-case "
        >
          E-Medicine
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal ">
          <li>
            <Link to="/dashboard" className="text-white font-semibold">
              My Order{" "}
            </Link>
          </li>
          {role === "admin" && (
            <li>
              <Link to="/dashboard" className="text-white font-semibold">
                Dashboard
              </Link>
            </li>
          )}

          <li>
            <Link
              to="/product-request"
              className="btn btn-sm mt-1  capitalize btn-accent"
            >
              Product Request
            </Link>
          </li>
        </ul>
      </div>

      <div className="drawer lg:flex navbar-end hidden drawer-end mr-5">
        <input
          id="my-drawer-4"
          type="checkbox"
          className="drawer-toggle"
          checked={isDrawerOpen}
          onChange={handleDrawerToggle}
        />

        <div className="drawer-content">
          <label htmlFor="my-drawer-4">
            <div className="badge badge-outline mr-2 badge-primary">
              <span className="text-xl">
                <FaShoppingCart></FaShoppingCart>
              </span>
              <span> {totalQuantity()}</span>
            </div>
          </label>
        </div>

        <div className="drawer-side ">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

          <div className="menu bg-base-300 p-4 w-72 h-full  text-base-content">
            <ul className="cart-slider-list">
              <CartSlider onClose={handleCartSliderClose} />
            </ul>
          </div>
        </div>

        {email ? (
          <>
            <Link to="/login">
              <button
                onClick={handleLogOut}
                className="btn btn-sm  capitalize btn-primary"
              >
                Log Out
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="btn btn-sm  capitalize btn-primary">
                Sign In
              </button>
            </Link>
          </>
        )}
      </div>

      <CustomDropdown
        isDrawerOpen={true}
        handleDrawerToggle={false}
        email={email}
        handleLogOut={handleLogOut}
      />
    </div>
  );
};

export default NavBar;
