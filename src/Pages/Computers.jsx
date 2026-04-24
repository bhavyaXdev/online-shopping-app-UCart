import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComputerProducts } from "../Utility/computersSlice";
import CategoryListing from "../Components/CategoryListing";

// Import Computer specific components
import ComputersSlider from "../Components/computersComponents/ComputersSlider";
import ComputersCategories from "../Components/computersComponents/ComputersCategories";
import ComputersFeatureSections from "../Components/computersComponents/ComputersFeatureSections";
import ComputersHotDeals from "../Components/computersComponents/ComputersHotDeals";
import ComputersNewArrivals from "../Components/computersComponents/ComputersNewArrivals";
import ComputersBestSellers from "../Components/computersComponents/ComputersBestSellers";

const Computers = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.computers);

  useEffect(() => {
    dispatch(fetchComputerProducts());
  }, [dispatch]);

  const breadcrumbs = [
    { label: "Computers & Laptops", path: "/category/computers-laptops" }
  ];

  const filterCategories = ["Laptops", "Computers", "Accessories", "Gaming PCs", "Monitors"];

  return (
    <div className="bg-white min-h-screen">
      <ComputersSlider />
      <ComputersCategories />
      <ComputersFeatureSections />
      <ComputersHotDeals />
      <ComputersNewArrivals />
      <ComputersBestSellers />

      {/* <div className="mt-8 border-t border-gray-100">
        <CategoryListing
          title="Computers & Laptops"
          products={products}
          loading={loading}
          error={error}
          onRetry={() => dispatch(fetchComputerProducts())}
          filterCategories={filterCategories}
          breadcrumbs={breadcrumbs}
          filterSizes={[]} 
        />
      </div> */}
    </div>
  );
};

export default Computers;
