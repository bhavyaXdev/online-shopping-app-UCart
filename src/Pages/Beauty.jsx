import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBeautyProducts } from "../Utility/beautySlice";
import CategoryListing from "../Components/CategoryListing";

// Import Health & Beauty specific components
import HealthBeautySlider from "../Components/healthBeautyComponents/HealthBeautySlider";
import HealthBeautyCategories from "../Components/healthBeautyComponents/HealthBeautyCategories";
import HealthBeautyRituals from "../Components/healthBeautyComponents/HealthBeautyRituals";
import HealthBeautyHotDeals from "../Components/healthBeautyComponents/HealthBeautyHotDeals";
import HealthBeautyHangingRope from "../Components/healthBeautyComponents/HealthBeautyHangingRope";


const Beauty = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.beauty);

  useEffect(() => {
    dispatch(fetchBeautyProducts());
  }, [dispatch]);

  const breadcrumbs = [
    { label: "Health & Beauty", path: "/category/health-beauty" }
  ];

  const filterCategories = ["Skincare", "Makeup", "Fragrance", "Haircare", "Personal Care"];

  return (
    <div className="bg-white min-h-screen">
      <HealthBeautySlider />
      <HealthBeautyCategories />
      <HealthBeautyRituals />
      <HealthBeautyHangingRope />
      <HealthBeautyHotDeals />

      {/* <div className="mt-8 border-t border-stone-100">
        <CategoryListing
          title="Health & Beauty"
          products={products}
          loading={loading}
          error={error}
          onRetry={() => dispatch(fetchBeautyProducts())}
          filterCategories={filterCategories}
          breadcrumbs={breadcrumbs}
          filterSizes={[]} 
        />
      </div> */}
    </div>
  );
};

export default Beauty;
