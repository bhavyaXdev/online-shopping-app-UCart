import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWomensProducts } from "../Utility/womensFashionSlice";
import CategoryListing from "../Components/CategoryListing";

const WomensFashion = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.womensFashion);

  useEffect(() => {
    dispatch(fetchWomensProducts());
  }, [dispatch]);

  const breadcrumbs = [
    { label: "Women's Fashion", path: "/category/womens-fashion" }
  ];

  const filterCategories = ["Ethnic Wear", "Western Wear", "Accessories", "Footwear"];

  return (
    <CategoryListing
      title="Women's Fashion"
      products={products}
      loading={loading}
      error={error}
      onRetry={() => dispatch(fetchWomensProducts())}
      filterCategories={filterCategories}
      breadcrumbs={breadcrumbs}
    />
  );
};

export default WomensFashion;