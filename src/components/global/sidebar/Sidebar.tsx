import { Link } from 'react-router-dom';
import './sidebar.scss';
import { navMenu } from './navData';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {navMenu.map((item) => (
        <div className="list" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} className="listItem" key={listItem.id}>
              {listItem.icon && <listItem.icon className="icon" />}{' '}
              {/* Render the icon component */}
              <span className="itemName">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
