import React from "react";
import BannerSlider from "../Components/BannerSlider";
import SuggestionSection from "../Components/SuggestionSection";
import TrendingSection from "../Components/TrendingSection";
import EthnicWearSection from "../Components/EthnicWearSection";
import HomeDecorSection from "../Components/HomeDecorSection";
import FeaturesSection from "../Components/FeaturesSection";
import ElectronicsSection from "../Components/ElectronicsSection";
import YouMayLikeSection from "../Components/YouMayLikeSection";

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
