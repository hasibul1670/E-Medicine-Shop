import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";
import { useGetCoursesQuery } from "../../redux/features/course/courseApi";
import HomePageCard from "../products/HomePageCard";

const BabyCare = () => {
  const { data } = useGetCoursesQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const products = data?.data;

  return (
    <div className="container px-5">
      <div className="flex justify-between mb-5">
        <p className="text-xl font-semibold text-red-500">Baby Care Products</p>
        <button className="btn btn-primary ">See more</button>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={1}
        autoplay={true}
        modules={[Pagination]}
        className="mySwiper"
      >
       {products?.slice(0,5).map((product) => (
          <SwiperSlide key={product?._id}>
            {" "}
            <HomePageCard key={product?._id} product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BabyCare;
