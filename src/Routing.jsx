import React from "react";
import { Routes, Route } from "react-router-dom";

import AddProduct from "./components/AddProduct/AddProduct";
import Details from "./components/Details/Details";
import EditProduct from "./components/Edit/Edit";
import ProductsList from "./components/ProductsList/ProductsList";

const Routing = () => {
  return (
    <Routes>
      <Route path="/products" element={<ProductsList />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
};

export default Routing;
