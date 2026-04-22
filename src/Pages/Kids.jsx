import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchKidsProducts } from "../Utility/kidsSlice";
import CategoryListing from "../Components/CategoryListing";
import KidsSlider from "../Components/kidsComponents/KidsSlider";
import KidsPromoBanner from "../Components/kidsComponents/KidsPromoBanner";
import KidsCategories from "../Components/kidsComponents/KidsCategories";
import KidsTrendyDesigns from "../Components/kidsComponents/KidsTrendyDesigns";
import KidsCareProducts from "../Components/kidsComponents/KidsCareProducts";
import KidsSchoolNecessities from "../Components/kidsComponents/KidsSchoolNecessities";
import KidsBackToSchoolProducts from "../Components/kidsComponents/KidsBackToSchoolProducts";
import KidsHotDeals from "../Components/kidsComponents/KidsHotDeals";
import KidsBrands from "../Components/kidsComponents/KidsBrands";

const Kids = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.kids);

  useEffect(() => {
    dispatch(fetchKidsProducts());
  }, [dispatch]);

  const breadcrumbs = [
    { label: "Kids & Baby", path: "/category/kids-baby" }
  ];

  const filterCategories = ["Infant Wear", "Toys", "Boys Wear", "Girls Wear", "Baby Gear"];
  const filterSizes = ["0-6M", "6-12M", "1-2Y", "2-3Y", "4-5Y", "6-8Y"];

  return (
    <div className="bg-white min-h-screen">
      <KidsPromoBanner />
      <KidsSlider />
      <KidsCategories />
      <KidsHotDeals />
      <KidsBrands />
      <KidsCareProducts />
      <KidsTrendyDesigns />
      <KidsSchoolNecessities />
      <KidsBackToSchoolProducts />

      {/* <div className="mt-8 border-t border-gray-100">
        <CategoryListing
          title="All Kids & Baby Products"
          products={products}
          loading={loading}
          error={error}
          onRetry={() => dispatch(fetchKidsProducts())}
          filterCategories={filterCategories}
          filterSizes={filterSizes}
          breadcrumbs={breadcrumbs}
        />
      </div> */}
    </div>
  );
};

export default Kids;
