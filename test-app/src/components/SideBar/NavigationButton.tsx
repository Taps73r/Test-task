import { NavLink } from 'react-router-dom';
import React, { Dispatch, SetStateAction } from 'react';

interface INavigationButtonProps {
  buttonLink: string;
  iconPath: string;
  whiteIconPath: string;
  altName: string;
  firstItem: boolean;
  setIsSidebarVisible: Dispatch<SetStateAction<boolean>>;
}

export const NavigationButton: React.FC<INavigationButtonProps> = ({
  buttonLink,
  iconPath,
  whiteIconPath,
  altName,
  firstItem,
  setIsSidebarVisible,
}) => {
  return (
    <li>
      <NavLink
        onClick={() => setIsSidebarVisible(false)}
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
            {firstItem ? (
              <></>
            ) : (
              <img
                src={isActive ? '/arrow.svg' : '/arrow_grey.svg'}
                alt="Arrow"
                className="sidebar__nav__arrow"
              />
            )}
          </>
        )}
      </NavLink>
    </li>
  );
};
