import React from "react";
import FashionSlider from "../Components/fashionComponents/FashionSlider";
import FashionCategories from "../Components/fashionComponents/FashionCategories";

import FashionHotDeals from "../Components/fashionComponents/FashionHotDeals";
import FashionBrands from "../Components/fashionComponents/FashionBrands";
// import WomensNecessities from "../Components/fashionComponents/WomensNecessities";
import FashionFestiveCollection from "../Components/fashionComponents/FashionFestiveCollection";
import FashionSummerSpecials from "../Components/fashionComponents/FashionSummerSpecials";
import FashionTrendy from "../Components/fashionComponents/FashionTrendy";

const Fashion = () => {
  return (
    <div className="bg-white min-h-screen">
      <FashionSlider />
      <FashionCategories />
      <FashionHotDeals />
      <FashionBrands />
      {/* <WomensNecessities /> */}
      <FashionFestiveCollection />
      <FashionSummerSpecials />
      <FashionTrendy />
    </div>
  );
};

export default Fashion;
