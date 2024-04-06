import React, { createContext, useEffect, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    // Initialize cartItems with data from local storage, or use the default cart if not found
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : getDefaultCart();
  });

  const updateCartItemsInLocalStorage = (newCartItems) => {
    // Update local storage with the new cart items data
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  const addToCart = (itemId) => {
    const newCartItems = { ...cartItems, [itemId]: cartItems[itemId] + 1 };
    setCartItems(newCartItems);
    updateCartItemsInLocalStorage(newCartItems);
  };

  const removeFromCart = (itemId) => {
    if (cartItems[itemId] > 0) {
      const newCartItems = { ...cartItems, [itemId]: cartItems[itemId] - 1 };
      setCartItems(newCartItems);
      updateCartItemsInLocalStorage(newCartItems);
    }
  };

  const updateCartItemQuantity = (itemId, quantity) => {
    const newCartItems = { ...cartItems, [itemId]: quantity };
    setCartItems(newCartItems);
    updateCartItemsInLocalStorage(newCartItems);
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  useEffect(() => {
    // Save 'cartItems' to local storage whenever it changes
    updateCartItemsInLocalStorage(cartItems);
  }, [cartItems]);

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
