import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeProducts } from "../Utility/homeLifestyleSlice";
import CategoryListing from "../Components/CategoryListing";

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
    <CategoryListing
      title="Home & Lifestyle"
      products={products}
      loading={loading}
      error={error}
      onRetry={() => dispatch(fetchHomeProducts())}
      filterCategories={filterCategories}
      breadcrumbs={breadcrumbs}
      filterSizes={[]} // Furniture/decor typically don't have clothing sizes
    />
  );
};

export default HomeLifestyle;
