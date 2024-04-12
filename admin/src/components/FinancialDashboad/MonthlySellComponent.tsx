import {
  FaCcVisa,
  FaHiking,
  FaHotel,
  FaInternetExplorer,
  FaLongArrowAltUp,
  FaPlane,
} from "react-icons/fa";
import { IoCloudOffline } from "react-icons/io5";

interface SellItemProps {
  online: number | string | null;
  counter: number | string | null;
  icon: React.ReactNode;
  icon2: React.ReactNode;
}

const SellItem: React.FC<SellItemProps> = ({
  online,
  counter,
  icon,
  icon2,
}) => {
  const formatValue = (value: unknown) => {
    if (value != null) {
      return Number(value).toFixed(2);
    }
  };

  return (
    <div className="flex justify-between text-black bg-sky-100 px-2 py-2 mt-2 rounded-none">
      <p className="flex">
        {formatValue(online) || 0.0}
        <p className="text-green-300 text-2xl hidden"> {icon2}</p>
      </p>
      {icon}
      <p className="flex">{formatValue(counter) || 0.0}</p>
    </div>
  );
};

const MonthlySellComponent = () => {
  return (
    <div className="h-64">
      <div className="flex justify-between font-medium">
        <p className="flex items-center ">
          <FaInternetExplorer />
          Online
        </p>

        <p className="flex items-center">
          <IoCloudOffline />
          Counter
        </p>
      </div>

      <SellItem
        online="7845914"
        counter="4554545"
        icon={<FaPlane />}
        icon2={<FaLongArrowAltUp />}
      />
      <SellItem
        online="7845914"
        counter="1187954"
        icon={<FaCcVisa />}
        icon2={<FaLongArrowAltUp />}
      />
      <SellItem
        online="257800"
        counter="94500"
        icon={<FaHotel />}
        icon2={<FaLongArrowAltUp />}
      />
      <SellItem
        online="23658946"
        counter="199874"
        icon={<FaHiking />}
        icon2={<FaLongArrowAltUp />}
      />
    </div>
  );
};

export default MonthlySellComponent;
