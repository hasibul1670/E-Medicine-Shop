/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";
import {useState} from "react";
import {FaSearch, FaShoppingCart, FaUser} from "react-icons/fa";
import logo from "../../../public/asset/home/logo.png";
import DownNavbar from "./DownNavbar";

const NavBar = () => {
  const [count, setCount] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [isOpenCart, setIsOpenCart] = useState(false);
  const toggleDrawer = () => {
    setIsOpenCart(!isOpenCart);
  };

  const items = Array.from({length: 40});
  return (
    <div className="flex flex-col">
      <div className="  bg-white fixed  w-full h-20  flex justify-between items-center px-5">
        <div className="font-bold w-1/5 ">
          <Image
            src={logo}
            className="w-20 "
            alt="Picture of the author"
            width={100}
            height={60}
            quality={100}
          />
        </div>
        {/* <p className="font-bold w-1/5 ">{searchText}</p> */}
        <div className="w-2/5 flex items-center">
          <input
            type="text"
            id="first_name"
            onChange={(e: any) => setSearchText(e.target.value)}
            className="w-full h-12 focus:outline-none focus:bg-gray-100 bg-gray-50 border border-gray-300 focus:border-cyan-700 focus:border-[1.8px] text-black  text-sm rounded-l-lg  block p-2.5  "
            placeholder="Search For Medecine,Healthcare,Beauty Products"
            required
          />
          <FaSearch className="text-[3rem] cursor-pointer rounded-r-lg bg-cyan-700 p-1  text-white" />
        </div>
        {/* Profile */}
        <div className="flex w-1/5 gap-2 items-center">
          <section className="flex items-center cursor-pointer hover:bg-cyan-200 border-cyan-400 border rounded-lg px-2 py-1">
            <FaUser className="text-2xl mr-2.5" />
            <p>Hasibul Islam</p>
          </section>

          <div onClick={toggleDrawer} className="flex cursor-pointer rounded-lg px-2 py-1">
            <span>
              <FaShoppingCart className="text-2xl" />
            </span>
            <div className="-mt-3 -ml-1 bg-yellow-600 rounded-full w-7 h-7 flex items-center justify-center text-white text-sm relative overflow-hidden">
              <AnimatePresence>
                <motion.span
                  key={count}
                  initial={{y: -20, opacity: 0}}
                  animate={{y: 0, opacity: 1}}
                  exit={{y: 20, opacity: 0}}
                  transition={{duration: 0.5}}
                  className="absolute"
                >
                  {count}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isOpenCart && (
            <motion.div
              initial={{x: "100%"}}
              animate={{x: 0}}
              exit={{x: "100%"}}
              transition={{type: "spring", stiffness: 300, damping: 30}}
              className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 overflow-y-auto"
            >
              <div className="p-4 ">
                <button
                  onClick={toggleDrawer}
                  className="text-black bg-gray-200 rounded-md px-4 py-2"
                >
                  Close
                </button>
                {/* Drawer content goes here */}
                {items.map((_, i) => (
                  <h2 key={i} className="text-xl font-bold">
                    Your Shopping Cart
                  </h2>
                ))}
                {/* More cart details */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="mt-[5rem] ">
        <DownNavbar />
      </div>
    </div>
  );
};

export default NavBar;
