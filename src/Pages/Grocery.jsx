import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGroceryProducts } from "../Utility/grocerySlice";
import CategoryListing from "../Components/CategoryListing";

const Grocery = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.grocery);

  useEffect(() => {
    dispatch(fetchGroceryProducts());
  }, [dispatch]);

  const breadcrumbs = [
    { label: "Groceries & Pets", path: "/category/groceries-pets" }
  ];

  const filterCategories = ["Pantry", "Pets", "Fresh", "Beverages", "Households"];

  return (
    <CategoryListing
      title="Groceries & Pets"
      products={products}
      loading={loading}
      error={error}
      onRetry={() => dispatch(fetchGroceryProducts())}
      filterCategories={filterCategories}
      breadcrumbs={breadcrumbs}
      filterSizes={[]} // Groceries don't have clothing sizes
    />
  );
};

export default Grocery;
