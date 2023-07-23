import { singleUser } from '../../../mockData/singleUserData';
import Details from '../../components/details/Details';
import './user.scss';

const User = () => {
  // Fetch Product Data and send to Details Component

  return (
    <div className="user">
      <Details {...singleUser} />
    </div>
  );
};

export default User;
