import { createContext } from "react";
import Cart from "@/interfaces/CartInterface";
import Product from "@/interfaces/ProductInterface";


interface CartContextData {
  cart: Cart[];
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
  addToCart: (product: Product, quantity: number) => void;
  removeItem: (cartId: string) => void;
  changeQty: (cartId: string, type: "plus" | "minus") => void;
}

const CartContext = createContext<CartContextData>({
  cart: [],
  setCart: () => {},
  addToCart: () => {},
  removeItem: () => {},
  changeQty: () => {},
});

export default CartContext;
