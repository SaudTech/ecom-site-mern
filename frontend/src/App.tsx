import Header from "@/components/Header";
import Offer from "@/components/Offer";
import Footer from "@/components/Footer";
import CartContext from "@/context/CartContext.ts";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { useCart } from "@/hooks/useCart";

function App() {
  const { cart, setCart, addToCart, removeItem, changeQty } = useCart();

  return (
    <div className="max-w-[2000px] mx-auto min-h-screen flex flex-col">
      <CartContext.Provider
        value={{ cart, setCart, addToCart, removeItem, changeQty }}
      >
        <Offer />
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </CartContext.Provider>

      <Toaster />
    </div>
  );
}

export default App;
