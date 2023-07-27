
import ProductCard from './ProductCard';
import { useGetCoursesQuery } from '../../redux/features/course/courseApi';

const AllProducts = () => {
  const { data } = useGetCoursesQuery (undefined, {
    refetchOnMountOrArgChange: true,
  
  });

  const products = data?.data;

 
  return (
    <div>
       <div className="py-20">
      <h1 className="flex justify-center text-cyan-400 font-bold">
        All Products
      </h1>
      <div className="flex justify-center  container mx-auto mb-5    px-4">
        <div className="grid  mt-4 md:grid-cols-2 lg:grid-cols-3  gap-5">
          {products?.map((product) => (
            <ProductCard key={product?._id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default AllProducts;