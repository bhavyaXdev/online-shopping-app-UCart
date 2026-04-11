import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWatchesProducts } from "../Utility/watchesSlice";
import CategoryListing from "../Components/CategoryListing";

const Watches = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.watches);

  useEffect(() => {
    dispatch(fetchWatchesProducts());
  }, [dispatch]);

  const breadcrumbs = [
    { label: "Watches & Accessories", path: "/category/watches-accessories" }
  ];

  const filterCategories = ["Analogue", "Digital", "Smartwatches", "Chronograph", "Luxury"];

  return (
    <CategoryListing
      title="Watches & Accessories"
      products={products}
      loading={loading}
      error={error}
      onRetry={() => dispatch(fetchWatchesProducts())}
      filterCategories={filterCategories}
      breadcrumbs={breadcrumbs}
      filterSizes={[]} // Watches don't have clothing sizes
    />
  );
};

export default Watches;
