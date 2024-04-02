import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Frontpage from "@/pages/Frontpage.tsx";
import ProductPage from "@/pages/ProductPage.tsx";
import CartPage from "@/pages/CartPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Frontpage />} />

          <Route
            path="/product/:productName"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ProductPage />
              </Suspense>
            }
          />

          <Route
            path="/cart"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <CartPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
