import { Helmet } from "react-helmet-async";
import FAQ from "./FAQ";

import Banner from "./Banner";
import Covid19 from "./Covid19";
import BabyCare from "./BabyCare";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title> Sunlight Academy | Home</title>
      </Helmet>
<Banner/>
<Covid19/>
<BabyCare/>
      <FAQ />
      
    </div>
  );
};

export default Home;
