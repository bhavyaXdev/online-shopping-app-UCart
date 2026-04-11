import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBeautyProducts } from "../Utility/beautySlice";
import CategoryListing from "../Components/CategoryListing";

const Beauty = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.beauty);

  useEffect(() => {
    dispatch(fetchBeautyProducts());
  }, [dispatch]);

  const breadcrumbs = [
    { label: "Health & Beauty", path: "/category/health-beauty" }
  ];

  const filterCategories = ["Skincare", "Makeup", "Fragrance", "Haircare", "Personal Care"];

  return (
    <CategoryListing
      title="Health & Beauty"
      products={products}
      loading={loading}
      error={error}
      onRetry={() => dispatch(fetchBeautyProducts())}
      filterCategories={filterCategories}
      breadcrumbs={breadcrumbs}
      filterSizes={[]} // Beauty products don't have clothing sizes
    />
  );
};

export default Beauty;
