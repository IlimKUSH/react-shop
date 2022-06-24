import React from "react";
import axios from "axios";

export const productsContext = React.createContext();

const INIT_STATE = {
  products: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
}

const ProductsContextProvider = ({ children }) => {
  return (
    <productsContext.Provider value={{}}>{children}</productsContext.Provider>
  );
};
export default ProductsContextProvider;
