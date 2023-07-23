import { singleProduct } from '../../../mockData/singleProductData';
import Details from '../../components/details/Details';
import './product.scss';

const Product = () => {
  // Fetch Product Data and send to Details Component

  return (
    <div className="product">
      <Details {...singleProduct}/>
    </div>
  );
};

export default Product;
