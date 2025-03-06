import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const useCart = () => {
  const { cartCount, dispatch } = useContext(CartContext);

  const increment = () => dispatch({ type: "increment" });
  const decrement = () => dispatch({ type: "decrement" });

  return { count: cartCount, increment, decrement };
};
