import React, { Dispatch, SetStateAction } from 'react';
import './HelloHeader.scss';

interface IHelloHeaderProps {
  setIsSidebarVisible: Dispatch<SetStateAction<boolean>>;
}

export const HelloHeader: React.FC<IHelloHeaderProps> = ({
  setIsSidebarVisible,
}) => {
  return (
    <div className="hello-div">
      <button
        className="sidebar-toggle-button"
        onClick={() => setIsSidebarVisible(true)}
      >
        ☰
      </button>
      <h1 className="hello-header">Hello Evano 👋🏼,</h1>
    </div>
  );
};
