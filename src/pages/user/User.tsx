import { useParams } from 'react-router-dom';
// import { singleUser } from '../../../mockData/singleUserData';
import Details from '../../components/details/Details';
import './user.scss';
import { useQuery } from '@tanstack/react-query';

const User = () => {
  // Fetch Product Data and send to Details Component
  // Get the user ID from the URL using useParams()
  const { id } = useParams<{ id?: string }>();

  // Check if the 'id' exists and is a valid number before converting it
  const userID = parseInt(id || ''); // Use empty string as a default value if 'id' is undefined

  // Connect to Backend API
  const { isLoading, data } = useQuery({
    queryKey: ['allusers', userID], // Include the actual user ID in the query key
    queryFn: () =>
      fetch(`http://localhost:7000/api/users/${userID}`).then((res) =>
        res.json(),
      ),
  });
  // Find the user in the singleProduct array with the matching ID
  // const user = data

  // Check if the user exists before rendering
  if (!data) {
    return <div>User not found</div>;
  }

  return (
    <div className="user">
      {isLoading ? 'The data is loading...' : <Details {...data} />}
    </div>
  );
};

export default User;
