import React, { Dispatch, SetStateAction } from 'react';
import { NavigationButton } from './NavigationButton';

interface INavigationMenuProps {
  items: {
    buttonLink: string;
    iconPath: string;
    whiteIconPath: string;
    altName: string;
  }[];
  setIsSidebarVisible: Dispatch<SetStateAction<boolean>>;
}

export const NavigationMenu: React.FC<INavigationMenuProps> = ({
  items,
  setIsSidebarVisible,
}) => {
  return (
    <nav className="sidebar__nav">
      <ul className="sidebar__nav__list">
        {items.map((item, index) => {
          if (index === 0)
            return (
              <NavigationButton
                setIsSidebarVisible={setIsSidebarVisible}
                firstItem={true}
                key={item.buttonLink}
                buttonLink={item.buttonLink}
                iconPath={item.iconPath}
                whiteIconPath={item.whiteIconPath}
                altName={item.altName}
              />
            );
          else {
            return (
              <NavigationButton
                setIsSidebarVisible={setIsSidebarVisible}
                firstItem={false}
                key={item.buttonLink}
                buttonLink={item.buttonLink}
                iconPath={item.iconPath}
                whiteIconPath={item.whiteIconPath}
                altName={item.altName}
              />
            );
          }
        })}
      </ul>
    </nav>
  );
};
