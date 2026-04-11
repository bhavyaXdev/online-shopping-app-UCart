import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComputerProducts } from "../Utility/computersSlice";
import CategoryListing from "../Components/CategoryListing";

const Computers = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.computers);

  useEffect(() => {
    dispatch(fetchComputerProducts());
  }, [dispatch]);

  const breadcrumbs = [
    { label: "Computers & Laptops", path: "/category/computers-laptops" }
  ];

  const filterCategories = ["Laptops", "Computers", "Accessories", "Gaming PCs", "Monitors"];

  return (
    <CategoryListing
      title="Computers & Laptops"
      products={products}
      loading={loading}
      error={error}
      onRetry={() => dispatch(fetchComputerProducts())}
      filterCategories={filterCategories}
      breadcrumbs={breadcrumbs}
      filterSizes={[]} // Tech products don't have clothing sizes
    />
  );
};

export default Computers;
