import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBooksProducts } from "../Utility/booksSlice";

// Import Books & Stationery specific components
import BooksStationerySlider from "../Components/booksStationeryComponents/BooksStationerySlider";
import BooksStationeryLibrary from "../Components/booksStationeryComponents/BooksStationeryLibrary";
import BooksStationeryEssentials from "../Components/booksStationeryComponents/BooksStationeryEssentials";
import BooksStationeryCreativeCorner from "../Components/booksStationeryComponents/BooksStationeryCreativeCorner";
import BooksStationeryHighlights from "../Components/booksStationeryComponents/BooksStationeryHighlights";
import BooksStationeryCategories from "../Components/booksStationeryComponents/BooksStationeryCategories";
import BooksStationeryHangingRope from "../Components/booksStationeryComponents/BooksStationeryHangingRope";
import BooksStationeryBestsellers from "../Components/booksStationeryComponents/BooksStationeryBestsellers";
import BooksStationeryCreativeFlow from "../Components/booksStationeryComponents/BooksStationeryCreativeFlow";

const Books = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksProducts());
  }, [dispatch]);

  return (
    <div className="bg-white min-h-screen">
      <BooksStationerySlider />
      <BooksStationeryCategories />
      <BooksStationeryLibrary />
      <BooksStationeryHighlights />
      <BooksStationeryEssentials />
      <BooksStationeryCreativeCorner />
      {/* <BooksStationeryBestsellers /> */}
      {/* <BooksStationeryHangingRope /> */}
      {/* <BooksStationeryCreativeFlow /> */}
    </div>
  );
};

export default Books;
