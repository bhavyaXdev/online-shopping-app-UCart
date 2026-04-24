import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMobileProducts } from "../Utility/mobilesSlice";
import CategoryListing from "../Components/CategoryListing";

// Import Mobile specific components
import MobilesPromoBanner from "../Components/mobilesComponents/MobilesPromoBanner";
import MobilesSlider from "../Components/mobilesComponents/MobilesSlider";
import MobilesCategories from "../Components/mobilesComponents/MobilesCategories";
import MobilesFeatureSections from "../Components/mobilesComponents/MobilesFeatureSections";
import MobilesHotDeals from "../Components/mobilesComponents/MobilesHotDeals";
import MobilesBestSellers from "../Components/mobilesComponents/MobilesBestSellers";

const Mobiles = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.mobiles);

  useEffect(() => {
    dispatch(fetchMobileProducts());
  }, [dispatch]);

  const breadcrumbs = [
    { label: "Mobiles & Tablets", path: "/category/mobiles-tablets" }
  ];

  const filterCategories = ["Mobiles", "Tablets", "Accessories", "Smartphones", "iPads"];

  return (
    <div className="bg-white min-h-screen">
      {/* <MobilesPromoBanner /> */}
      <MobilesSlider />
      <MobilesCategories />
      <MobilesFeatureSections />
      <MobilesHotDeals />
      <MobilesBestSellers />

      {/* <div className="mt-8 border-t border-gray-100">
        <CategoryListing
          title="All Mobiles & Tablets"
          products={products}
          loading={loading}
          error={error}
          onRetry={() => dispatch(fetchMobileProducts())}
          filterCategories={filterCategories}
          breadcrumbs={breadcrumbs}
          filterSizes={[]} 
        />
      </div> */}
    </div>
  );
};

export default Mobiles;
