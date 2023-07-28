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
          id: '',
          title: 'NSA Evasion Champion',
          firstName: 'Edward',
          lastName: 'Snowden',
          emailAddress: 'Fuck@NSA.gov',
          phoneNumber: '(420) 232-2356',
          img: 'https://images-na.ssl-images-amazon.com/images/I/91daxCrnYXL.jpg',
          salesTotal: '$420.69',
          verified: true,
          info: {
            username: 'Ed Snowden',
            fullname: 'Edward Snowden',
            email: 'Fuck@NSA.gov',
            phone: '(420) 232-2356',
            salesTotal: '$420.69',
            status: 'verified',
          },
          chart: {
            dataKeys: [
              { name: 'sales', color: '#82ca9d' },
              { name: 'revenue', color: '#8884d8' },
              { name: 'comission', color: '#2a8ded' },
            ],
            data: [
              {
                name: 'Sun',
                sales: 42,
                revenue: 3492,
                comission: 279.36, // 8% of revenue
              },
              {
                name: 'Mon',
                sales: 30,
                revenue: 2566,
                comission: 205.28, // 8% of revenue
              },
              {
                name: 'Tue',
                sales: 25,
                revenue: 1867,
                comission: 149.36, // 8% of revenue
              },
              {
                name: 'Wed',
                sales: 33,
                revenue: 4243,
                comission: 339.44, // 8% of revenue
              },
              {
                name: 'Thu',
                sales: 22,
                revenue: 1654,
                comission: 132.32, // 8% of revenue
              },
              {
                name: 'Fri',
                sales: 48,
                revenue: 5387,
                comission: 430.96, // 8% of revenue
              },
              {
                name: 'Sat',
                sales: 19,
                revenue: 1902,
                comission: 152.16, // 8% of revenue
              },
            ],
          },

          activities: [
            {
              text: '[user] sold [quantity] x [item] for [value]',
              time: '3 day ago',
            },
            {
              text: '[user] sold [quantity] x [item] for [value]',
              time: '1 week ago',
            },
            {
              text: '[user] sold [quantity] x [item] for [value]',
              time: '2 weeks ago',
            },
            {
              text: '[user] sold [quantity] x [item] for [value]',
              time: '1 month ago',
            },
            {
              text: '[user] sold [quantity] x [item] for [value]',
              time: '1 month ago',
            },
            {
              text: '[user] sold [quantity] x [item] for [value]',
              time: '2 months ago',
            },
          ],
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
              <div className="item" key={column.headerName}>
                {props.columns
                  .filter((item) => item.field !== 'id' && item.field !== 'img')
                  .map((column) => (
                    <div className="item" key={column.headerName}>
                      <label>{column.headerName}</label>
                      <input type={column.type} placeholder={column.field} />
                    </div>
                  ))}
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
