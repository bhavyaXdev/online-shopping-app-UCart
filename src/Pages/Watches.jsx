import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchWatchesProducts } from "../Utility/watchesSlice";

// Import Watches & Accessories specific components
import WatchesSlider from "../Components/watchesComponents/WatchesSlider";
import WatchesCategories from "../Components/watchesComponents/WatchesCategories";
import WatchesShowcase from "../Components/watchesComponents/WatchesShowcase";
import WatchesGiftingBanner from "../Components/watchesComponents/WatchesGiftingBanner";
import WatchesGifting from "../Components/watchesComponents/WatchesGifting";
import WatchesLibrary from "../Components/watchesComponents/WatchesLibrary";
import WatchesEssentials from "../Components/watchesComponents/WatchesEssentials";
import WatchesCreativeCorner from "../Components/watchesComponents/WatchesCreativeCorner";
import WatchesHighlights from "../Components/watchesComponents/WatchesHighlights";

const Watches = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Ensuring the data is fetched if needed for other components
    if (typeof fetchWatchesProducts === 'function') {
      dispatch(fetchWatchesProducts());
    }
  }, [dispatch]);

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Slider with 5 slides */}
      <WatchesSlider />
      
      {/* Standardized Category Grid */}
      <WatchesCategories />
      
      {/* Modern & Attractive Showcase Section */}
      <WatchesShowcase />

      {/* Gifting Feature Banner */}
      <WatchesGiftingBanner />

      {/* Gifting & Premium Combos Section */}
      <WatchesGifting />
      
      {/* Trust & Highlights Section */}
      <WatchesHighlights />
      
      {/* Featured Products Carousel */}
      <WatchesEssentials />
      
      {/* Category Navigation Library (Optional / Secondary) */}
      {/* <WatchesLibrary /> */}
      
      {/* Lifestyle & Creative Collector's Corner */}
      <WatchesCreativeCorner />
      
      {/* You can add the CategoryListing here or on a separate 'View All' route */}
    </div>
  );
};

export default Watches;
