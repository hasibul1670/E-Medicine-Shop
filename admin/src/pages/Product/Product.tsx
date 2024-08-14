/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "@mui/material/Button";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {useState } from "react";
import Loader from "../../components/LoaderComponent/Loader";
import CreateProductModal from "../../components/ProductComponents/CreateProduct";
import EditProductModal from "../../components/ProductComponents/EditProductModal";
import Headline from "../../components/SharedComponents/Headline";
import { useGetProductsQuery } from "../../redux/features/product/productApi";
import { Box } from "@mui/material";

const Product: React.FC<any> = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [id, setId] = useState(null);
  const { data, isLoading } = useGetProductsQuery(paginationModel);

  // const pageInfo = data?.pageInfo || 1;
  // const rowCountRef = useRef(pageInfo?.totalRowCount || 0);

  // const rowCount = useMemo(() => {
  //   if (pageInfo?.totalRowCount !== undefined) {
  //     rowCountRef.current = pageInfo.totalRowCount;
  //   }
  //   return rowCountRef.current;
  // }, [pageInfo?.totalRowCount]);

  const closeModal = async () => {
    setIsOpen(false);
    setIsAddProductModalOpen(false);
  };

  const openEditModal = async (id: any) => {
    setIsOpen(true);
    setId(id);
  };
  const openAddProductModal = async () => {
    setIsAddProductModalOpen(true);
  };

  const handleDeleteProduct = (id: any) => {
    alert(id);
  };
  let count = 1;
  const rows = data?.data?.map((product: any) => ({
    id: count++,
    _id: product?._id,
    Name: product?.name,
    Description: product?.productDescription,
    Price: product?.price,
    Stock: Math.floor(Math.random() * 90),
  }));

  const CenteredCellRenderer = (params: any) => (
    <div style={{ textAlign: "center" }}>{params.value}</div>
  );

  const columns: any = [
    // { field: "id", headerName: "ID", headerAlign: "center", width: 10 },
    {
      field: "Name",
      headerAlign: "center",
      headerName: "Name",
      width: 200,
      renderCell: CenteredCellRenderer,
    },
    {
      field: "Description",
      headerAlign: "center",
      headerName: "Description",
      width: 250,
      renderCell: CenteredCellRenderer,
    },
    {
      field: "Price",
      headerAlign: "center",
      headerName: "Price",
      type: "number",
      width: 100,
      renderCell: CenteredCellRenderer,
    },
    {
      field: "Stock",
      headerAlign: "center",
      headerName: "Stock",
      type: "number",
      width: 100,
      renderCell: CenteredCellRenderer,
    },
    {
      field: "Action",
      headerAlign: "center",
      headerName: "Action",
      width: 200,
      sortable: false,
      renderCell: (params: any) => (
        <strong>
          <Button
            variant="contained"
            size="small"
            style={{ marginLeft: 16 }}
            tabIndex={params.hasFocus ? 0 : -1}
            onClick={() => openEditModal(params.row._id)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            size="small"
            style={{ marginLeft: 16, backgroundColor: "#C70000" }}
            tabIndex={params.hasFocus ? 0 : -1}
            onClick={() => handleDeleteProduct(params.row._id)}
          >
            Delete
          </Button>
        </strong>
      ),
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="flex justify-between">
        <Headline>All Products List</Headline>
        <div className="flex justify-end h-12 lg:mt-5 lg:mr-36">
          <Button variant="contained" onClick={() => openAddProductModal()}>
            Add New Product
          </Button>
        </div>
      </div>

      {isOpen && (
        <>
          <EditProductModal closeModal={closeModal} id={id} />
        </>
      )}
      {isAddProductModalOpen && (
        <>
          <CreateProductModal closeModal={closeModal} />
        </>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <Box sx={{ height: 500, width: "100%" }}>
          <DataGrid
            {...data}
            rowCount={100}
            disableColumnFilter
            disableColumnSelector
            loading={isLoading}
            disableDensitySelector
            className="mx-5 mt-5 bg-gray-50 rounded-lg"
            rowHeight={70}
            paginationMode="server"
            rows={rows}
            pageSizeOptions={[10]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            columns={columns}
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
          />
        </Box>
      )}

      {/* <Box sx={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={rows}
          {...data}
          rowCount={rowCount}
          loading={isLoading}
          pageSizeOptions={[5]}
          paginationModel={paginationModel}
          paginationMode="server"
          onPaginationModelChange={setPaginationModel}
        />
      </Box> */}
    </div>
  );
};

export default Product;
