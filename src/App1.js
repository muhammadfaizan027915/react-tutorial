import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Products from "./pages/dashboard/products";
import Product, { loader as  productsLoader} from "./pages/dashboard/products/[productId]";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<h1>HOme Page</h1>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/products" element={<Products />} />
        <Route path="/dashboard/products/:productId" element={<Product />} loader={productsLoader} errorElement={<h1>Something Wend Wrong!</h1>} />
        <Route path="*" element={<h1>404 Page not found</h1>} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
