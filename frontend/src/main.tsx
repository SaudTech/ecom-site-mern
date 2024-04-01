import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Frontpage from "@/pages/Frontpage.tsx";

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
                <h1>Product page</h1>
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>

    <div className="min-h-screen">
      <App />
    </div>
  </React.StrictMode>
);
