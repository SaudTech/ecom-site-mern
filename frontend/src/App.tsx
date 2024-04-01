import Header from "@/components/Header";
import Offer from "@/components/Offer";
import Footer from "@/components/Footer";
import CartContext from "@/context/CartContext.ts";
import { useState } from "react";
import Cart from "@/interfaces/CartInterface";
import Product from "@/interfaces/ProductInterface";
import { Outlet } from "react-router-dom";

function App() {
  const [cart, setCart] = useState<Cart[]>([]);
  const addToCart = (product: Product) => {
    if (product.availableStock === 0) {
      return;
    }

    const existingProduct = cart.find((c) => c.productId === product.productId);
    if (existingProduct) {
      setCart([
        ...cart,
        { ...existingProduct, quantity: existingProduct.quantity + 1 },
      ]);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          cartId: Math.random().toString(),
          quantity: 1,
          total: product.price,
        },
      ]);
    }
  };
  return (
    <div className="max-w-[2000px] mx-auto">
      <CartContext.Provider value={{ cart, setCart, addToCart }}>
        <Offer />
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </CartContext.Provider>
    </div>
  );
}

export default App;
