import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSportsProducts } from "../Utility/sportsSlice";
import CategoryListing from "../Components/CategoryListing";

const Sports = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.sports);

  useEffect(() => {
    dispatch(fetchSportsProducts());
  }, [dispatch]);

  const breadcrumbs = [
    { label: "Sports & Outdoors", path: "/category/sports-outdoors" }
  ];

  const filterCategories = ["Fitness", "Sports Gear", "Activewear", "Outdoor", "Cycling"];
  const filterSizes = ["S", "M", "L", "XL", "XXL"]; // Activewear often has sizes

  return (
    <CategoryListing
      title="Sports & Outdoors"
      products={products}
      loading={loading}
      error={error}
      onRetry={() => dispatch(fetchSportsProducts())}
      filterCategories={filterCategories}
      filterSizes={filterSizes}
      breadcrumbs={breadcrumbs}
    />
  );
};

export default Sports;
