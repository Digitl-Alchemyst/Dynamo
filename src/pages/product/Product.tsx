import { useParams } from 'react-router-dom';
import { singleProduct } from '../../../mockData/singleProductData';
import Details from '../../components/details/Details';
import './product.scss';

const Product = () => {
  // Get the product ID from the URL using useParams()
  const { id } = useParams<{ id?: string }>(); // Make the 'id' property optional

  // Check if the 'id' exists and is a valid number before converting it
  const productID = parseInt(id || ''); // Use empty string as a default value if 'id' is undefined

  // Find the product in the singleProduct array with the matching ID
  const product = singleProduct.find((product) => product.id === productID);

  // Check if the product exists before rendering
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product">
      <Details {...product} />
    </div>
  );
};

export default Product;
