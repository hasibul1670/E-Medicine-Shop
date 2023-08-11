import { Helmet } from "react-helmet-async";

import BabyCare from "./BabyCare";
import Banner from "./Banner";
import FiverAndPain from "./FiverAndPain";
import PetMedicine from "./PetMedicine";
import FAQ from "./FAQ";

const Home = () => {
  return (
    <div className="bg-base-00">
      <Helmet>
        <title> E-Medicine | Home</title>
      </Helmet>
      <Banner />
      <p className="text-xl font-bold underline flex justify-center mt-5 mb-5">
        Our Products{" "}
      </p>
      <FiverAndPain />
      <BabyCare />
      <PetMedicine />
      <FAQ/>
    </div>
  );
};

export default Home;
