import './add.scss';
import { GridColDef } from '@mui/x-data-grid';

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Add new item to [Data Storage]
      // Example
        //  axios.post( `/api/${slug}s`, {pass any data here} )
  };

  return (
    <div className="add">
      <div className="modal">
        <span className='close' onClick={() => props.setOpen(false)}>X</span>
        <h1>Add new {props.slug}</h1>        
        <form onSubmit={handleSubmit}>
          {props.columns.filter (item => item.field !== 'id' && item.field !== 'img')
          
          .map(column => (
            <div className="item">
              <label>{column.headerName}</label>
              <input type={column.type} placeholder={column.headerName} />
            </div>
          ))}
        </form>
        <button className='button'> Add {props.slug}</button>
      </div>
    </div>
  );
}

export default Add