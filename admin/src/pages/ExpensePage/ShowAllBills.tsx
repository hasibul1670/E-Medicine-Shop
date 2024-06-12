import Box from "@mui/material/Box";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridToolbar,
} from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Headline from "../../components/SharedComponents/Headline";

import Loader from "../../components/LoaderComponent/Loader";

export default function BillOverview() {
  // const { data, isLoading } = useGetAllExpenseQuery(" ", {
  //   refetchOnMountOrArgChange: true,
  // });

  const isLoading = false;

  const data = [
    {
      id: "45454",
      _id: "45454",
      billNo: "45454",
      billTo: "45454",
      amount: "45454",
      paymentStatus: "45454",
      dueDate: "06-06-2024",
      createdBy: "45454",
    },
  ];
  let count = 1;
  const rows: GridRowsProp = data?.map((product: any) => ({
    id: count++,
    _id: product?._id,
    billNo: product?.billNo,
    billTo: product?.billTo,
    amount: product?.paidAmount,
    paymentStatus: product?.paymentStatus,
    dueDate: product?.dueDate,
    createdBy: product?.createdBy,
  }));

  const LinkCellRenderer = (params: any) => (
    <Link
      to={`/bill-overview/${params.value}`}
      className="cursor-pointer text-center text-lg	 hover:underline text-blue-700"
    >
      {params.value}
    </Link>
  );
  const CenteredCellRenderer = (params: any) => (
    <Link to="#" className=" text-center text-lg	 ">
      {params.value}
    </Link>
  );

  const columns: GridColDef[] = [
    {
      field: "billNo",
      headerAlign: "center",
      headerName: "Bill No",
      width: 200,
      renderCell: LinkCellRenderer,
      align: "center",
    },
    {
      field: "billTo",
      headerAlign: "center",
      headerName: "Bill To",
      align: "center",
      width: 100,
      renderCell: CenteredCellRenderer,
    },
    {
      align: "center",
      field: "amount",
      headerAlign: "center",
      headerName: "Amount",
      width: 100,
      renderCell: CenteredCellRenderer,
    },
    {
      field: "paymentStatus",
      align: "center",
      headerAlign: "center",
      headerName: "Status",
      width: 80,
      renderCell: CenteredCellRenderer,
    },
    {
      field: "dueDate",
      align: "center",
      headerAlign: "center",
      headerName: "Due Date ",
      filterable: false,
      sortable: false,
      width: 120,
      renderCell: CenteredCellRenderer,
    },
    {
      field: "createdBy",
      headerAlign: "center",
      headerName: "Created By",
      align: "center",
      width: 220,
      renderCell: CenteredCellRenderer,
    },
  ];

  return (
    <div className="container ">
      <div className="mx-5">
        <Headline>All Expenses Bill</Headline>
      </div>
      <div className="">
        {isLoading ? (
          <Loader />
        ) : (
          <Box sx={{ height: 500, width: "100%" }}>
            <DataGrid
              {...data}
              disableColumnFilter
              disableColumnSelector
              disableDensitySelector
              className="mx-5 mt-5 bg-gray-50 rounded-lg"
              rowHeight={70}
              rows={rows}
              columns={columns}
              slots={{ toolbar: GridToolbar }}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 20,
                  },
                },
              }}
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                },
              }}
              pageSizeOptions={[1]}
              disableRowSelectionOnClick
            />
          </Box>
        )}
      </div>
    </div>
  );
}
