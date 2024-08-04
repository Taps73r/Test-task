import React, { Dispatch, SetStateAction } from 'react';
import './SideBar.scss';
import { NavigationMenu } from './NavigationMenu';
import { navItems } from '../../constants/navItems';

interface ISideBarProps {
  isVisible: boolean;
  setIsSidebarVisible: Dispatch<SetStateAction<boolean>>;
}

export const SideBar: React.FC<ISideBarProps> = ({
  isVisible,
  setIsSidebarVisible,
}) => {
  return (
    <div className={`sidebar ${isVisible ? 'visible' : ''}`}>
      <header className="sidebar__header">
        <img
          src={`${import.meta.env.BASE_URL}dashboard.svg`}
          alt="Logo"
          className="sidebar__logo"
        />
        <p className="sidebar__header__title">Dashboard</p>
        <p className="sidebar__header__version">v.01</p>
      </header>
      <NavigationMenu
        setIsSidebarVisible={setIsSidebarVisible}
        items={navItems}
      />
    </div>
  );
};
