import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductsList from "./components/ProductsList/ProductsList";

const Routing = () => {
  return (
    <Routes>
      <Route path="/products" element={<ProductsList />} />
    </Routes>
  );
};

export default Routing;
