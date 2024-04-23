import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItem";

interface SidebarProps {
  handleIsSideBarOpen?: () => void;
  setIsSideBarOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isSideBarOpen?: boolean;
  selectedColor?: string | null;
  selectedItem?: string | null;
  handleItemClick: (color: string, text: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  handleIsSideBarOpen,
  isSideBarOpen,
  handleItemClick,
  selectedColor,
  selectedItem,
}) => {
  return (
    <div className="overflow-y-auto h-full hide-scrollbar">
      <div className="text-white">
        <div className="flex justify-between ">
          <Link
            to="/"
            className={`${
              isSideBarOpen ? "block" : "hidden"
            } mt-2 px-4 text-xl text-cyan-700 font-semibold`}
          >
            E-Medicine
          </Link>
        
          {isSideBarOpen ? (
            <FaArrowAltCircleLeft
              onClick={handleIsSideBarOpen}
              className="text-3xl mt-2 mr-4 cursor-pointer"
            />
          ) : (
            <FaArrowAltCircleRight
              onClick={handleIsSideBarOpen}
              className="lg:text-3xl text-2xl ml-2 mt-2 cursor-pointer scale-110"
            />
          )}
        </div>

        {isSideBarOpen ? (
          <ul className="mt-2">
            {MenuItems.map((item) => (
              <li key={item.id} className="py-1">
                <Link
                  to={item.link}
                  onClick={() => handleItemClick("bg-stone-200", item.text)}
                  className={`rounded md:text-sm px-2 p-2 flex items-center hover:bg-cyan-100 hover:text-black ${
                    selectedItem === item.text
                      ? `${selectedColor} text-black  font-bold rounded-none`
                      : ""
                  }`}
                >
                  <li>
                    <item.icon className="mr-2 text-2xl" />
                  </li>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="mt-2">
            {MenuItems.map((item) => (
              <li key={item.id} className="py-1">
                <Link
                  to={item.link}
                  onClick={() => handleItemClick("bg-stone-200", item.text)}
                  className={`rounded px-2 p-1 flex items-center ${
                    selectedItem === item.text
                      ? `${selectedColor} text-black rounded-none`
                      : ""
                  }`}
                >
                  <li>
                    <item.icon className="mr-2 lg:text-3xl text-2xl hover:text-cyan-400 hover-spin " />
                  </li>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
