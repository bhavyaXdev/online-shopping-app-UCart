import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchKidsProducts } from "../Utility/kidsSlice";
import CategoryListing from "../Components/CategoryListing";

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
    <CategoryListing
      title="Kids & Baby"
      products={products}
      loading={loading}
      error={error}
      onRetry={() => dispatch(fetchKidsProducts())}
      filterCategories={filterCategories}
      filterSizes={filterSizes}
      breadcrumbs={breadcrumbs}
    />
  );
};

export default Kids;
