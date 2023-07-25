import { useMutation, useQueryClient } from '@tanstack/react-query';
import './add.scss';
import { GridColDef } from '@mui/x-data-grid';

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await fetch(`http://localhost:7000/api/${props.slug}`, {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: 111,
          img: '',
          firstName: 'Edward',
          lastName: 'Snowden',
          emailAddress: 'Fuck@NSA.gov',
          phoneNumber: '(420) 232-2356',
          verified: true,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add user');
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries([`all${props.slug}s`]);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Add new item to [Data Storage]
    // Example
    // axios.post( `/api/${props.slug}s`, {pass any data here} )

    mutation.mutate();
    props.setOpen(false);
    console.log('New User has been added to the database.');
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== 'id' && item.field !== 'img')
            .map((column) => (
              <div className="item">
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button className="button" type="submit">
            Add {props.slug}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
