import './products.scss';
import { useState } from 'react';
import Add from '../../components/modals/add/Add';
import DataTable from '../../components/tables/dataTable/DataTable';
import { GridColDef } from '@mui/x-data-grid';
import { productMovies } from '../../../mockData/productData';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'img',
    headerName: 'Image',
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || '/noavatar.png'} alt="" />;
    },
  },

  {
    field: 'title',
    type: 'string',
    headerName: 'Title',
    width: 250,
    editable: true,
  },
  {
    field: 'producer',
    headerName: 'Producer',
    type: 'string',
    width: 200,
    editable: true,
  },
  {
    field: 'genre',
    headerName: 'Genre',
    type: 'string',
    width: 200,
    editable: true,
  },
  {
    field: 'price',
    type: 'string',
    headerName: 'price',
    width: 200,
    editable: true,
  },
  {
    field: 'quantity',
    headerName: 'Quantity',
    width: 100,
    type: 'number',
  },
  {
    field: 'value',
    headerName: 'Value',
    width: 100,
    type: 'number',
  },
  {
    field: 'inStock',
    headerName: 'In Stock',
    type: 'boolean',
    width: 125,
  },
];

export const Products = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Product</button>
      </div>
      {/* Ensure the props passed to DataTable match the Props type */}
      <DataTable slug="products" columns={columns} rows={productMovies} />
      {open && <Add slug="Products" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;
