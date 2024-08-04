import React, { useState } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Help } from './pages/Help';
import { Product } from './pages/Product';
import { Promote } from './pages/Promote';
import { Income } from './pages/Income';
import { DashBoard } from './pages/DashBoard';
import { Customers } from './pages/Customers';
import { SideBar } from './components/SideBar/SideBar';

export const App: React.FC = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  return (
    <div className="app">
      <SideBar
        isVisible={isSidebarVisible}
        setIsSidebarVisible={setIsSidebarVisible}
      />
      {isSidebarVisible && (
        <div
          className="grey-bg"
          onClick={() => setIsSidebarVisible(false)}
        ></div>
      )}
      <div className="main-content">
        <Routes>
          <Route
            path="/customers"
            element={<Customers setIsSidebarVisible={setIsSidebarVisible} />}
          />
          <Route
            path="/help"
            element={<Help setIsSidebarVisible={setIsSidebarVisible} />}
          />
          <Route
            path="/income"
            element={<Income setIsSidebarVisible={setIsSidebarVisible} />}
          />
          <Route
            path="/product"
            element={<Product setIsSidebarVisible={setIsSidebarVisible} />}
          />
          <Route
            path="/promote"
            element={<Promote setIsSidebarVisible={setIsSidebarVisible} />}
          />
          <Route
            path="/dashboard"
            element={<DashBoard setIsSidebarVisible={setIsSidebarVisible} />}
          />
        </Routes>
      </div>
    </div>
  );
};
