import { useParams } from 'react-router-dom';
import { singleUser } from '../../../mockData/singleUserData';
import Details from '../../components/details/Details';
import './user.scss';

const User = () => {
  // Fetch Product Data and send to Details Component
  // Get the user ID from the URL using useParams()
  const { id } = useParams<{ id?: string }>(); // Make the 'id' property optional

  // Check if the 'id' exists and is a valid number before converting it
  const userID = parseInt(id || ''); // Use empty string as a default value if 'id' is undefined

  // Find the user in the singleProduct array with the matching ID
  const user = singleUser.find((user) => user.id === userID);

  // Check if the user exists before rendering
  if (!user) {
    return <div>User not found</div>;
  }
  return (
    <div className="user">
      <Details {...user} />
    </div>
  );
};

export default User;
