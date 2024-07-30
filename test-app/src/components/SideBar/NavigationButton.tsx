import { NavLink } from 'react-router-dom';
import React from 'react';

interface INavigationButtonProps {
  buttonLink: string;
  iconPath: string;
  whiteIconPath: string;
  altName: string;
}

export const NavigationButton: React.FC<INavigationButtonProps> = ({
  buttonLink,
  iconPath,
  whiteIconPath,
  altName,
}) => {
  return (
    <li>
      <NavLink
        to={buttonLink}
        className={({ isActive }) =>
          isActive
            ? 'sidebar__nav__item sidebar__nav__item--active'
            : 'sidebar__nav__item'
        }
      >
        {({ isActive }) => (
          <>
            <img
              src={isActive ? `${whiteIconPath}` : `${iconPath}`}
              alt={altName}
              className="sidebar__nav__icon"
            />
            <span className="sidebar__nav__text">{altName}</span>
            <img
              src={isActive ? '/arrow.svg' : '/arrow_grey.svg'}
              alt="Arrow"
              className="sidebar__nav__arrow"
            />
          </>
        )}
      </NavLink>
    </li>
  );
};
