import React, { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

function cartReducer(state, { type, payload }) {
  switch (type) {
    case "ADD": {
      const idx = state.findIndex((it) => it.id === payload.id);
      if (idx > -1) {
        return state.map((it, i) =>
          i === idx ? { ...it, qty: it.qty + payload.qty } : it
        );
      }
      return [...state, payload];
    }
    case "INC": {
      return state.map((item) =>
        item.id === payload ? { ...item, qty: item.qty + 1 } : item
      );
    }
    case "DEC": {
  return state.map((item) => {
    if (item.id === payload) {
      // Only decrease if quantity is greater than 1
      return item.qty > 1 ? { ...item, qty: item.qty - 1 } : item;
    }
    return item;
  });
}
    case "REMOVE": {
      return state.filter((item) => item.id !== payload);
    }
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], () => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (product, qty = 1) =>
    dispatch({ type: "ADD", payload: { ...product, qty } });

  const increaseQty = (id) => dispatch({ type: "INC", payload: id });
  const decreaseQty = (id) => dispatch({ type: "DEC", payload: id });
  const removeFromCart = (id) => dispatch({ type: "REMOVE", payload: id });

  const itemCount = items.reduce((t, i) => t + i.qty, 0);

  return (
    <CartContext.Provider
      value={{ items, itemCount, addToCart, increaseQty, decreaseQty, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}