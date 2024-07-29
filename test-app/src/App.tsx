import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Help } from "./pages/Help";
import { Product } from "./pages/Product";
import { Promote } from "./pages/Promote";
import { Income } from "./pages/Income";
import { DashBoard } from "./pages/DashBoard";
import { Customers } from "./pages/Customers";
import { SideBar } from "./components/SideBar";

export const App: React.FC = () => {
  return (
    <div className="app">
      <SideBar />
      <Routes>
        <Route path="/customers" element={<Customers />} />
        <Route path="/help" element={<Help />} />
        <Route path="/income" element={<Income />} />
        <Route path="/product" element={<Product />} />
        <Route path="/promote" element={<Promote />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  );
};
