import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeProducts } from "../Utility/homeLifestyleSlice";
import CategoryListing from "../Components/CategoryListing";

// Import Home & Lifestyle specific components
import HomeLifestyleSlider from "../Components/homeLifestyleComponents/HomeLifestyleSlider";
import HomeLifestyleCategories from "../Components/homeLifestyleComponents/HomeLifestyleCategories";
import HomeLifestyleRooms from "../Components/homeLifestyleComponents/HomeLifestyleRooms";
import HomeLifestyleHotDeals from "../Components/homeLifestyleComponents/HomeLifestyleHotDeals";
import HomeLifestyleBestSellers from "../Components/homeLifestyleComponents/HomeLifestyleBestSellers";

const HomeLifestyle = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.homeLifestyle);

  useEffect(() => {
    dispatch(fetchHomeProducts());
  }, [dispatch]);

  const breadcrumbs = [
    { label: "Home & Lifestyle", path: "/category/home-lifestyle" }
  ];

  const filterCategories = ["Decor", "Furniture", "Lifestyle", "Kitchen", "Bedding"];

  return (
    <div className="bg-white min-h-screen">
      <HomeLifestyleSlider />
      <HomeLifestyleCategories />
      <HomeLifestyleRooms />
      <HomeLifestyleHotDeals />
      <HomeLifestyleBestSellers />

      {/* <div className="mt-8 border-t border-stone-100">
        <CategoryListing
          title="Home & Lifestyle"
          products={products}
          loading={loading}
          error={error}
          onRetry={() => dispatch(fetchHomeProducts())}
          filterCategories={filterCategories}
          breadcrumbs={breadcrumbs}
          filterSizes={[]} 
        />
      </div> */}
    </div>
  );
};

export default HomeLifestyle;
