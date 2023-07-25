import DataTable from '../../components/tables/dataTable/DataTable';
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import './users.scss';
// import { teamSales } from '../../../mockData/salesTeam';
import { useState } from 'react';
import Add from '../../components/modals/add/Add';
import { useQuery } from '@tanstack/react-query';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'avatar',
    headerName: 'Avatar',
    width: 75,
    renderCell: (params) => {
      return <img src={params.row.img || '/noavatar.png'} alt="" />;
    },
  },

  {
    field: 'firstName',
    type: 'string',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    type: 'string',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'string',
    width: 250,
    editable: true,
  },
  {
    field: 'phoneNumber',
    headerName: 'Phone Number',
    type: 'string',
    width: 155,
    editable: true,
  },
  {
    field: 'salesTotal',
    headerName: 'Sales Total',
    type: 'number',
    width: 125,
    editable: true,
  },
  {
    field: 'fullName',
    type: 'string',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 100,
    type: 'boolean',
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);

  const { isLoading, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('http://localhost:7000/api/users').then((res) =>
        res.json(),
      ),
  });

  return (
    <div className="users">
      <div className="info">
        <h1>Sales Team</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      {isLoading ? (
        'The data is loading...'
      ) : (
        <DataTable slug="users" columns={columns} rows={data} />
      )}
      {open && <Add slug="Users" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
