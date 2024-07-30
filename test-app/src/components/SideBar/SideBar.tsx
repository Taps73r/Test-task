import React from 'react';
import './SideBar.scss';
import { NavigationMenu } from './NavigationMenu';
import { navItems } from '../../constants/navItems';

export const SideBar: React.FC = () => {
  return (
    <div className="sidebar">
      <header className="sidebar__header">
        <img src="/dashboard.svg" alt="Logo" className="sidebar__logo" />
        <p className="sidebar__header__title">Dashboard</p>
        <p className="sidebar__header__version">v.01</p>
      </header>
      <NavigationMenu items={navItems} />
    </div>
  );
};
