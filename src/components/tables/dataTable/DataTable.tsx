import { Link } from 'react-router-dom';
import './dataTable.scss';
import {
  DataGrid,
  GridColDef,
//   GridValueGetterParams,
  GridToolbar,
} from '@mui/x-data-grid';

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string,
};

const DataTable = (props: Props) => {

    const handleDeleteRow = (id:number) => { 
        // API Call to Delete the row item
            // Axios Example
                //  axios.delete(`api/${slug}/id`)
        console.log(id, 'has been queued for deletion.');
    }
    const actionColumn:GridColDef ={
        field: 'action',
        headerName: 'Action',
        width: 200,
        renderCell:(params) => {
            return (
                <div className="action">
                    <Link to={`/${props.slug}/${params.row.id}`}>
                        <img src='/view.svg' alt='' />
                    </Link>
                    <div className='delete' onClick={() => handleDeleteRow(params.row.id)}>
                        <img src='/delete.svg' alt='' />
                    </div>
                </div>
            )
        }
    }

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
