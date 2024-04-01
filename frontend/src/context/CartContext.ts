import { createContext } from "react";
import Cart from "@/interfaces/CartInterface";
import Product from "@/interfaces/ProductInterface";


interface CartContextData {
  cart: Cart[];
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
  addToCart: (product: Product) => void;
}

const CartContext = createContext<CartContextData>({
  cart: [],
  setCart: () => {},
  addToCart: () => {},
});

export default CartContext;
