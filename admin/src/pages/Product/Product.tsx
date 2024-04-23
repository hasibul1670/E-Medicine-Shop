/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import CreateProductModal from "../../components/CreateProduct/CreateProduct";
import EditProductModal from "../../components/EditProduct/EditProductModal";
import Loader from "../../components/LoaderComponent/Loader";
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

  const handleDeleteProduct = () => {
    alert("Product Deleted");
  };

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
        <table className=" w-11/12 mx-5">
          <thead>
            <tr className="border border-blue-500 bg-cyan-200">
              <th className="px-4 py-2  border border-blue-500">Serial</th>
              <th className="px-4 py-2 border border-blue-500">Name</th>
              <th className="px-4 py-2 border border-blue-500">Description</th>
              <th className="w-64  px-4 py-2 border border-blue-500">Price</th>
              <th className="w-64  px-4 py-2 border border-blue-500">Action</th>
            </tr>
          </thead>

          <tbody>
            {data &&
              data?.data?.map((product: ProductProps) => (
                <tr key={product.id} className=" bg-cyan-50">
                  <td className="border border-red-400 w-64  px-4 py-2">
                    {product?.id}
                  </td>
                  <td className="border border-red-400 w-64  px-4 py-2">
                    {product.name}
                  </td>
                  <td className="border border-red-400 w-64 px-4 py-2 whitespace-pre-line">
                    {product.productDescription}
                  </td>

                  <td className="border px-4 py-2  w-64  border-red-400">
                    {product.price}
                  </td>
                  <td className="border px-4 py-3 flex gap-1 border-red-300 w-84 ">
                    <Button
                      onClick={() => openEditModal(product._id)}
                      className="bg-blue-400"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={handleDeleteProduct}
                      className="bg-orange-700"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Product;
