/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import Loader from "../../components/LoaderComponent/Loader";
import CreateProductModal from "../../components/ProductComponents/CreateProduct";
import EditProductModal from "../../components/ProductComponents/EditProductModal";
import { Button } from "../../components/SharedComponents/Button";
import Headline from "../../components/SharedComponents/Headline";
import { useGetProductsQuery } from "../../redux/features/product/productApi";

interface ProductProps {
  id?: string;
  _id?: string;
  productDescription?: string;
  name?: string;
  price?: string;
}

const Product: React.FC<ProductProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [id, setId] = useState(null);
  const { data, isLoading } = useGetProductsQuery("");
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
  }));

  const columns: GridColDef<(typeof data)[number]>[] = [
    { field: "id", headerName: "ID", width: 10 },
    {
      field: "Name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "Description",
      headerName: "Description",
      width: 250,
    },
    {
      field: "Price",
      headerName: "Price",
      type: "number",
      width: 125,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      sortable: false,
      renderCell: (params) => (
        <div className="flex justify-between mx-5 ">
          <p
            onClick={() => openEditModal(params.row._id)}
            className="bg-blue-900 rounded-lg cursor-pointer text-white px-5 "
          >
            Edit
          </p>
          <p
            onClick={() => handleDeleteProduct(params.row._id)}
            className="bg-red-700 rounded-lg ml-2 cursor-pointer text-white px-5 "
          >
            Delete
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="flex justify-between">
        <Headline>All Products List</Headline>
        <div className="flex justify-end h-12 lg:mt-5 lg:mr-36">
          <Button onClick={() => openAddProductModal()}>Add New Product</Button>
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
            className="mx-5 mt-5 bg-slate-200 rounded-lg"
            rowHeight={50}
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 8,
                },
              },
            }}
            pageSizeOptions={[1]}
            disableRowSelectionOnClick
          />
        </Box>
      )}
    </div>
  );
};

export default Product;

{
  /* <thead>
  <tr className="border border-blue-500 bg-cyan-200">
    <th className="px-4 py-2  border border-blue-500">Serial</th>
    <th className="px-4 py-2 border border-blue-500">Name</th>
    <th className="px-4 py-2 border border-blue-500">Description</th>
    <th className="w-64  px-4 py-2 border border-blue-500">Price</th>
    <th className="w-64  px-4 py-2 border border-blue-500">Action</th>
  </tr>
</thead>; */
}

// <tr key={product.id} className=" bg-cyan-50">
//   <td className="border border-red-400 w-64  px-4 py-2">
//     {product?.id}
//   </td>
//   <td className="border border-red-400 w-64  px-4 py-2">
//     {product.name}
//   </td>
//   <td className="border border-red-400 w-64 px-4 py-2 whitespace-pre-line">
//     {product.productDescription}
//   </td>

//   <td className="border px-4 py-2  w-64  border-red-400">
//     {product.price}
//   </td>

// </tr>
