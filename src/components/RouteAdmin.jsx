import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import Analytics from "../pages/Analytics";
import Products from "../pages/Products";
import Inventory from "../pages/Inventory";
const RouteAdmin = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/customers" element={<Customers />} />
      <Route path="/admin/analytics" element={<Analytics />} />
      <Route path="/admin/products" element={<Products />} />
      <Route path="/admin/inventory" element={<Inventory />} />
    </Routes>
  );
};

export default RouteAdmin;
