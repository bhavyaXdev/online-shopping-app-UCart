import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAutomotiveProducts } from "../Utility/automotiveSlice";
import CategoryListing from "../Components/CategoryListing";

const Automotive = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.automotive);

  useEffect(() => {
    dispatch(fetchAutomotiveProducts());
  }, [dispatch]);

  const breadcrumbs = [
    { label: "Automotive", path: "/category/automotive" }
  ];

  const filterCategories = ["Cleaning", "Interior", "Electronics", "Exterior", "Tools"];

  return (
    <CategoryListing
      title="Automotive Accessories"
      products={products}
      loading={loading}
      error={error}
      onRetry={() => dispatch(fetchAutomotiveProducts())}
      filterCategories={filterCategories}
      breadcrumbs={breadcrumbs}
      filterSizes={[]} // Automotive products don't have clothing sizes
    />
  );
};

export default Automotive;
