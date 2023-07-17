import {
  MagnifyingGlassIcon,
  BellIcon,
  BellAlertIcon,
  QueueListIcon,
  Cog8ToothIcon,
  RectangleGroupIcon,
} from '@heroicons/react/24/outline';
import './navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="Logo-02.png" alt="logo" />
      </div>
      <div className="searchBar">Search Bar</div>
      <div className="navIcons">
        <MagnifyingGlassIcon />
        <RectangleGroupIcon />
        <QueueListIcon />
        <div className="notifications">
          <BellIcon /> <BellAlertIcon />
          <span>1</span>
        </div>
        <div className="user">
          <img src="" alt="" />
          <span>User.Name</span>
        </div>
        <Cog8ToothIcon />
      </div>
    </div>
  );
};

export default Navbar;
