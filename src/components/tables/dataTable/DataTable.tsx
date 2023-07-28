import { Link } from 'react-router-dom';
import './dataTable.scss';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const DataTable = (props: Props) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(
        `http://localhost:7000/api/${props.slug}/${id}`,
        {
          method: 'delete',
        },
      );

      if (!response.ok) {
        throw new Error('Failed to delete user');
      }

      return response.json();
    },

    onSuccess: () => {
      queryClient.invalidateQueries([`all${props.slug}`]);
    },
  });

  const handleDeleteRow = (id: number) => {
    // API Call to Delete the row item
    // Axios Example
    //  axios.delete(`api/${slug}/id`)
    mutation.mutate(id);
    console.log(id, 'has been deleted from the database.');
  };

  // Action Buttons Column to be displayed on all charts
  const actionColumn: GridColDef = {
    field: 'action',
    headerName: 'Action',
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div
            className="delete"
            onClick={() => handleDeleteRow(params.row.id)}
          >
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
      />
    </div>
  );
};

export default DataTable;
