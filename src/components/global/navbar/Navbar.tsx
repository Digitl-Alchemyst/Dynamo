import {
  MagnifyingGlassIcon,
  // BellIcon,
  BellAlertIcon,
  QueueListIcon,
  Cog8ToothIcon,
  RectangleGroupIcon,
  MicrophoneIcon,
} from '@heroicons/react/24/outline';
import './navbar.scss';
import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="Logo-02.png" alt="logo" height="75px" width="200px" />
      </div>

      <div className="searchBar">
        Search...
        <span className="search-icon-bg">
          <MagnifyingGlassIcon />
          <MicrophoneIcon />
        </span>
      </div>

      <div className="navIcons">
        <RectangleGroupIcon />
        <QueueListIcon />

        <div className="notifications">
          {/* <BellIcon />  */}
          <BellAlertIcon />
          <span>1</span>
        </div>

        <div className="user">
          <div className="userName">
            <span>Digitl Alchemyst</span>
          </div>
            <img src="/profile.jpg" alt="" />
        </div>

        <Cog8ToothIcon />
      </div>
    </div>
  );
};

export default Navbar;
