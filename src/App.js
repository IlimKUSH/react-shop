import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import CartContextProvider from "./contexts/cartContext";
import ProductsContextProvider from "./contexts/ProductsContext";
import Routing from "./Routing";

const App = () => {
  return (
    <CartContextProvider>
      <ProductsContextProvider>
        <BrowserRouter>
          <Header />
          <Routing />
        </BrowserRouter>
      </ProductsContextProvider>
    </CartContextProvider>
  );
};

export default App;
