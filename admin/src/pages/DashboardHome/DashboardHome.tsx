import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const DashboardHome = () => {
  const count = useSelector((state: RootState) => state.counterR.value);
  return (
    <div>
      DashboardHome
      <span className="text-xl font-bold mr-5">{count}</span>
    </div>
  );
};

export default DashboardHome;
