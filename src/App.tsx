import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/global/navbar/Navbar';
import Sidebar from './components/global/sidebar/Sidebar';
import Footer from './components/global/footer/Footer';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Users from './pages/users/Users';
import './styles/global.scss';
import User from './pages/user/User';
import Product from './pages/product/Product';

function App() {
  const Layout = () => {
    return (
      <div className="appMain">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Sidebar />
          </div>

          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/users',
          element: <Users />,
        },
        {
          path: '/products',
          element: <Products />,
        },
        {
          path: '/users/:id',
          element: <User />,
        },
        {
          path: '/products/:id',
          element: <Product />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
