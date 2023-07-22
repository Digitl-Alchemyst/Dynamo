import './addUser.scss';
import { GridColDef } from '@mui/x-data-grid';

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddUser = (props: Props) => {
  return (
    <div className="addUser">
      <div className="modal">
        <span className='close' onClick={() => props.setOpen(false)}>X</span>
        <h1>Add new {props.slug}</h1>        
        <form>
          {props.columns.filter (item => item.field !== 'id' && item.field !== 'img')
          
          .map(column => (
            <div className="item">
              <label>{column.headerName}</label>
              <input type={column.type} placeholder={column.headerName} />
            </div>
          ))}
        </form>
        <button></button>
      </div>
    </div>
  );
}

export default AddUser