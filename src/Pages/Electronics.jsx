import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchElectronicsProducts } from "../Utility/electronicsSlice";
import CategoryListing from "../Components/CategoryListing";

const Electronics = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.electronics);

  useEffect(() => {
    dispatch(fetchElectronicsProducts());
  }, [dispatch]);

  const breadcrumbs = [
    { label: "Electronics", path: "/category/electronics" }
  ];

  const filterCategories = ["Audio", "Wearables", "Computers", "Photography", "PC Gaming"];

  return (
    <CategoryListing
      title="Electronics & Gadgets"
      products={products}
      loading={loading}
      error={error}
      onRetry={() => dispatch(fetchElectronicsProducts())}
      filterCategories={filterCategories}
      breadcrumbs={breadcrumbs}
      filterSizes={[]} // Electronics typically don't have sizes like clothes
    />
  );
};

export default Electronics;
