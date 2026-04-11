import React from "react";
import BannerSlider from "../Components/homeComponents/BannerSlider";
import SuggestionSection from "../Components/homeComponents/SuggestionSection";
import TrendingSection from "../Components/homeComponents/TrendingSection";
import EthnicWearSection from "../Components/homeComponents/EthnicWearSection";
import HomeDecorSection from "../Components/homeComponents/HomeDecorSection";
import FeaturesSection from "../Components/homeComponents/FeaturesSection";
import ElectronicsSection from "../Components/homeComponents/ElectronicsSection";
import YouMayLikeSection from "../Components/homeComponents/YouMayLikeSection";

const Home = () => {
  return (
    <div className="bg-white md:px-4">
      <BannerSlider />
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
