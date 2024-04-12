import { FaFileInvoice, FaUser } from "react-icons/fa";
import { HiReceiptTax } from "react-icons/hi";
import { IoIosSettings, IoMdAddCircle } from "react-icons/io";
import { LuTablets } from "react-icons/lu";
import {
  MdDashboard,
  MdOutlineAttachMoney,
  MdOutlineReport,
} from "react-icons/md";
import { RiLogoutCircleLine, RiMoneyPoundBoxFill } from "react-icons/ri";

const MenuItems = [
  { id: 1, icon: MdDashboard, text: "Dashboard", link: "/dashboard" },
  {
    id: 2,
    icon: MdOutlineAttachMoney,
    text: "Financial Dashboard",
    link: "/financial-dashboard",
  },
  { id: 3, icon: LuTablets, text: "Products", link: "/products" },
  {
    id: 4,
    icon: IoMdAddCircle,
    text: "Add Products",
    link: "/add-products",
  },

  {
    id: 9,
    icon: FaUser,
    text: "Users",
    className: "text-white",
    link: "/users",
  },
  { id: 8, icon: FaFileInvoice, text: "Invoice", link: "/invoice" },
  {
    id: 5,
    icon: RiMoneyPoundBoxFill,
    text: "Expense Management",
    link: "/expense-management",
  },
  {
    id: 6,
    icon: HiReceiptTax,
    text: "Tax Management",
    link: "/tax-management",
  },
  { id: 7, icon: MdOutlineReport, text: "Reports", link: "/reports" },
  { id: 10, icon: IoIosSettings, text: "Settings", link: "/settings" },
  { id: 11, icon: RiLogoutCircleLine, text: "Logout", link: "/logout" },
];

export default MenuItems;
