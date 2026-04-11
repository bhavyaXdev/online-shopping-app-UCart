import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooksProducts } from "../Utility/booksSlice";
import CategoryListing from "../Components/CategoryListing";

const Books = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooksProducts());
  }, [dispatch]);

  const breadcrumbs = [
    { label: "Books & Stationery", path: "/category/books-stationery" }
  ];

  const filterCategories = ["Fiction", "Self-Help", "Stationery", "Education", "Art Supplies"];

  return (
    <CategoryListing
      title="Books & Stationery"
      products={products}
      loading={loading}
      error={error}
      onRetry={() => dispatch(fetchBooksProducts())}
      filterCategories={filterCategories}
      breadcrumbs={breadcrumbs}
      filterSizes={[]} // Books don't have clothing sizes
    />
  );
};

export default Books;
