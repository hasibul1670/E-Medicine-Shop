import { CiExport } from "react-icons/ci";
import { Tooltip } from "react-tooltip";

const DashboardHome = () => {
  return (
    <div className="flex  justify-between px-2 py-4 ">
      <div className="px-2 shadow-2xl p-5 bg-gray-300  rounded-lg">
        <div className="flex justify-between mb-4">
          <p className="font-semibold text-lg ">
            Today's Sales <br />
            <span className="text-gray-700  text-sm">Sales Summary</span>
          </p>
          <Tooltip id="my-tooltip" />
          <p
            className="text-red-500 text-2xl scale-150  cursor-pointer  py-2 flex "
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Export today's data"
          >
            <CiExport />
          </p>
        </div>

        <div className="flex gap-x-1.5">
          <p className="p-4 bg-red-200 rounded-lg">Total Sales</p>
          <p className="p-4 bg-red-200 rounded-lg">Total Order</p>
          <p className="p-4 bg-red-200 rounded-lg">Product Stock</p>
          <p className="p-4 bg-red-200 rounded-lg">New Customers</p>
        </div>
      </div>

      <div>
        <h1>Total Revenue</h1>
      </div>
    </div>
  );
};

export default DashboardHome;
