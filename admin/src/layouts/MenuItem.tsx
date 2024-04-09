import { FaUser } from 'react-icons/fa';
import { IoIosSettings } from 'react-icons/io';
import { MdDashboard } from "react-icons/md";

const MenuItems = [
  { id: 1, icon: MdDashboard, text: 'Dashboard', link: '/dashboard'},
  { id: 3, icon: IoIosSettings , text: 'Financial Dashboard', link: '/financial-dashboard' },
  { id: 3, icon: IoIosSettings , text: 'Bookings', link: '/bookings' },
  { id: 3, icon: IoIosSettings , text: 'Package Management', link: '/package-management' },
  { id: 3, icon: IoIosSettings , text: 'Expense Management', link: '/expense-management' },
  { id: 3, icon: IoIosSettings , text: 'Tax Management', link: '/tax-management' },
  { id: 3, icon: IoIosSettings , text: 'Reports', link: '/reports' },
  { id: 2, icon: FaUser , text: 'Users', className: 'text-white', link: '/users' },
  { id: 3, icon: IoIosSettings , text: 'Settings', link: '/settings' },
  { id: 3, icon: IoIosSettings , text: 'Logout', link: '/logout' },
];

export default MenuItems;
