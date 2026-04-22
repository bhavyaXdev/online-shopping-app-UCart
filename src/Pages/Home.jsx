import React from "react";
import HomeSlider from "../Components/homeComponents/HomeSlider";
import SuggestionSection from "../Components/homeComponents/SuggestionSection";
import TrendingSection from "../Components/homeComponents/TrendingSection";
import EthnicWearSection from "../Components/homeComponents/EthnicWearSection";
import HomeDecorSection from "../Components/homeComponents/HomeDecorSection";
import FeaturesSection from "../Components/homeComponents/FeaturesSection";
import ElectronicsSection from "../Components/homeComponents/ElectronicsSection";
import YouMayLikeSection from "../Components/homeComponents/YouMayLikeSection";

const Home = () => {
  return (
    <div className="bg-white">
      <HomeSlider />
      <TrendingSection />
      <SuggestionSection />
      <EthnicWearSection />
      <FeaturesSection />
      <HomeDecorSection />
      <ElectronicsSection />
      <YouMayLikeSection />
    </div>
  );
};

export default Home;
