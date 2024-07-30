import React from 'react';
import { NavigationButton } from './NavigationButton';

interface INavigationMenuProps {
  items: {
    buttonLink: string;
    iconPath: string;
    whiteIconPath: string;
    altName: string;
  }[];
}

export const NavigationMenu: React.FC<INavigationMenuProps> = ({ items }) => {
  return (
    <nav className="sidebar__nav">
      <ul className="sidebar__nav__list">
        {items.map((item) => (
          <NavigationButton
            key={item.buttonLink}
            buttonLink={item.buttonLink}
            iconPath={item.iconPath}
            whiteIconPath={item.whiteIconPath}
            altName={item.altName}
          />
        ))}
      </ul>
    </nav>
  );
};