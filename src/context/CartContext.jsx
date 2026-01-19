import React, { createContext, useContext, useState } from "react";
import { useMemo } from "react";
import { initialProducts } from "../data/product";
const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const products = initialProducts;
  // Add to Card login
  const addTocart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  //Remove Item form cart

  const removeFromCart = (productId, removeAll = false) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);

      if (!existingItem) return prevCart;

      if (removeAll || existingItem.quantity === 1) {
        return prevCart.filter((item) => item.id !== productId);
      } else {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };

  // cartCount ya item count
  const clearCart = () => setCart([]);

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  );

  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart]
  );
 
  return (
    <>
      <CartContext.Provider
        value={{
          products,
          cart,
          addTocart,
          
          clearCart,
          cartTotal,
          cartCount,
          removeFromCart,
        }}
      >
        {" "}
        {children}
      </CartContext.Provider>
    </>
  );
};
export const useCart = () => useContext(CartContext);
