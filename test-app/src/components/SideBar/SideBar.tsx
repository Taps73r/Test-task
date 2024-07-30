import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.scss';

export const SideBar: React.FC = () => {
  return (
    <div className="sidebar">
      <header className="sidebar__header">
        <img src="/dashboard.svg" alt="Logo" className="sidebar__logo" />
        <p className="sidebar__header__title">Dashboard</p>
        <p className="sidebar__header__version">v.01</p>
      </header>
      <nav className="sidebar__nav">
        <ul className="sidebar__nav__list">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? 'sidebar__nav__item sidebar__nav__item--active'
                  : 'sidebar__nav__item'
              }
            >
              {({ isActive }) => (
                <>
                  <img
                    src={isActive ? '/key_white.svg' : '/key.svg'}
                    alt="Dashboard"
                    className="sidebar__nav__icon"
                  />
                  <span className="sidebar__nav__text">Dashboard</span>
                  <img
                    src={isActive ? '/arrow.svg' : '/arrow_grey.svg'}
                    alt="Arrow"
                    className="sidebar__nav__arrow"
                  />
                </>
              )}
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive
                  ? 'sidebar__nav__item sidebar__nav__item--active'
                  : 'sidebar__nav__item'
              }
            >
              {({ isActive }) => (
                <>
                  <img
                    src={
                      isActive ? '/productIcon_white.svg' : '/productIcon.svg'
                    }
                    alt="Product"
                    className="sidebar__nav__icon"
                  />
                  <span className="sidebar__nav__text">Product</span>
                  <img
                    src={isActive ? '/arrow.svg' : '/arrow_grey.svg'}
                    alt="Arrow"
                    className="sidebar__nav__arrow"
                  />
                </>
              )}
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/customers"
              className={({ isActive }) =>
                isActive
                  ? 'sidebar__nav__item sidebar__nav__item--active'
                  : 'sidebar__nav__item'
              }
            >
              {({ isActive }) => (
                <>
                  <img
                    src={isActive ? '/customers_white.svg' : '/customers.svg'}
                    alt="Customers"
                    className="sidebar__nav__icon"
                  />
                  <span className="sidebar__nav__text">Customers</span>
                  <img
                    src={isActive ? '/arrow.svg' : '/arrow_grey.svg'}
                    alt="Arrow"
                    className="sidebar__nav__arrow"
                  />
                </>
              )}
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/income"
              className={({ isActive }) =>
                isActive
                  ? 'sidebar__nav__item sidebar__nav__item--active'
                  : 'sidebar__nav__item'
              }
            >
              {({ isActive }) => (
                <>
                  <img
                    src={isActive ? '/income_white.svg' : '/income.svg'}
                    alt="Income"
                    className="sidebar__nav__icon"
                  />
                  <span className="sidebar__nav__text">Income</span>
                  <img
                    src={isActive ? '/arrow.svg' : '/arrow_grey.svg'}
                    alt="Arrow"
                    className="sidebar__nav__arrow"
                  />
                </>
              )}
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/promote"
              className={({ isActive }) =>
                isActive
                  ? 'sidebar__nav__item sidebar__nav__item--active'
                  : 'sidebar__nav__item'
              }
            >
              {({ isActive }) => (
                <>
                  <img
                    src={isActive ? '/promote_white.svg' : '/promote.svg'}
                    alt="Promote"
                    className="sidebar__nav__icon"
                  />
                  <span className="sidebar__nav__text">Promote</span>
                  <img
                    src={isActive ? '/arrow.svg' : '/arrow_grey.svg'}
                    alt="Arrow"
                    className="sidebar__nav__arrow"
                  />
                </>
              )}
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/help"
              className={({ isActive }) =>
                isActive
                  ? 'sidebar__nav__item sidebar__nav__item--active'
                  : 'sidebar__nav__item'
              }
            >
              {({ isActive }) => (
                <>
                  <img
                    src={isActive ? '/help_white.svg' : '/help.svg'}
                    alt="Help"
                    className="sidebar__nav__icon"
                  />
                  <span className="sidebar__nav__text">Help</span>
                  <img
                    src={isActive ? '/arrow.svg' : '/arrow_grey.svg'}
                    alt="Arrow"
                    className="sidebar__nav__arrow"
                  />
                </>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
