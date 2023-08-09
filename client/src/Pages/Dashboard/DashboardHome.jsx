import { useState } from "react";

import MyAddress from "./MyAddress";
import MyOrder from "./MyOrder";
import ProductRequest from "./ProductRequest";
import Profile from "./Profile";
import RequestedProduct from "./RequestedProduct";
import SideBar from "./SideBar";

const DashboardHome = () => {
  const [activeMenu, setActiveMenu] = useState("myOrder");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  let mainContent;
  let headerContent;

  if (activeMenu === "myOrder") {
    mainContent = <MyOrder />;
    headerContent = "My Order";
  } else if (activeMenu === "myAddress") {
    mainContent = <MyAddress />;
    headerContent = "My Address";
  } else if (activeMenu === "productRequest") {
    mainContent = <ProductRequest />;
    headerContent = "Product Request";
  } else if (activeMenu === "myProfile") {
    mainContent = <Profile />;
    headerContent = "My Profile";
  } else if (activeMenu === "requestedProduct") {
    mainContent = <RequestedProduct />;
    headerContent = "My Requested Product";
  }

  return (
    <div className="flex py-20 flex-col lg:flex-row bg-base-300">
      <div className="h-screen lg:w-1/6 drawer-overlay overflow-y-auto">
        <SideBar activeMenu={activeMenu} onMenuClick={handleMenuClick} />
      </div>

      <div className="bg-base-300 flex-grow ">
        <header className="shadow-lg p-4">
          <h1 className="text-blue-800 font-bold text-xl">{headerContent}</h1>
        </header>

        <main className="p-4">{mainContent}</main>
      </div>
    </div>
  );
};

export default DashboardHome;
