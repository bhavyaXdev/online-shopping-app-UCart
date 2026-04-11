import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMobileProducts } from "../Utility/mobilesSlice";
import CategoryListing from "../Components/CategoryListing";

const Mobiles = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.mobiles);

  useEffect(() => {
    dispatch(fetchMobileProducts());
  }, [dispatch]);

  const breadcrumbs = [
    { label: "Mobiles & Tablets", path: "/category/mobiles-tablets" }
  ];

  const filterCategories = ["Mobiles", "Tablets", "Accessories", "Smartphones", "iPads"];

  return (
    <CategoryListing
      title="Mobiles & Tablets"
      products={products}
      loading={loading}
      error={error}
      onRetry={() => dispatch(fetchMobileProducts())}
      filterCategories={filterCategories}
      breadcrumbs={breadcrumbs}
      filterSizes={[]} // Tech products don't have clothing sizes
    />
  );
};

export default Mobiles;
