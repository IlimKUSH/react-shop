import React, { useReducer } from "react";

export const cartContext = React.createContext();

const INIT_STATE = {
  cart: null,
  count: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_CART":
      return {
        ...state,
        cart: action.payload,
        count: action.payload.products.length,
      };
    default:
      return state;
  }
}

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: product.price,
    };
    const isProductInCart = cart.products.some(
      item => item.item.id === newProduct.item.id
    );
    console.log("товар в корзине", isProductInCart);
    if (isProductInCart) {
      cart.products = cart.products.filter(
        item => item.item.id !== newProduct.item.id
      );
    } else {
      cart.products.push(newProduct);
    }

    // cart.products.push(newProduct);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }
  function getCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    cart.totalPrice = cart.products.reduce((prev, curr) => {
      return prev + curr.subPrice;
    }, 0);
    // prev + curr => 0 + curr.subPrice = 1000
    // prev + curr => 1000 + currr.subPrice => 2000
    // prev + curr => 2000 + currr.subPrice => 3000
    // prev + curr => 3000 + currr.subPrice => 4000
    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  }
  function deleteFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    cart.products = cart.products.filter(item => item.item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }
  function checkProductInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    const isProductInCart = cart.products.some(item => item.item.id === id);
    return isProductInCart;
  }
  function changeCount(count, id) {
    if (count <= 0) {
      return;
    }
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.map(item => {
      if (item.item.id === id) {
        item.count = count;
        item.subPrice = count * item.item.price;
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();

    cart.totalPrice.forEach(elem => {});
  }
  return (
    <cartContext.Provider
      value={{
        cart: state.cart,
        count: state.count,
        getCart,
        addToCart,
        deleteFromCart,
        changeCount,
        checkProductInCart,
      }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
