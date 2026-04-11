import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMensProducts } from "../Utility/mensFashionSlice";
import CategoryListing from "../Components/CategoryListing";

const MensFashion = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.mensFashion);

  useEffect(() => {
    dispatch(fetchMensProducts());
  }, [dispatch]);

  const breadcrumbs = [
    { label: "Men's Fashion", path: "/category/mens-fashion" }
  ];

  const filterCategories = ["Ethnic Wear", "Western Wear", "Accessories", "Footwear"];
  const filterSizes = ["S", "M", "L", "XL", "XXL", "30", "32", "34", "36"];

  return (
    <CategoryListing
      title="Men's Fashion"
      products={products}
      loading={loading}
      error={error}
      onRetry={() => dispatch(fetchMensProducts())}
      filterCategories={filterCategories}
      filterSizes={filterSizes}
      breadcrumbs={breadcrumbs}
    />
  );
};

export default MensFashion;
