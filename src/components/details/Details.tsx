import './details.scss';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Details = () => {
  return (
    <div className="details">
      <div className="view">
        <div className="info">
          <div className="baseInfo">
            <img
              src="https://media.wired.com/photos/59324a72edfced5820d0f6d1/4:3/w_929,h_697,c_limit/03_Cnt3_Fr8-w.jpg"
              alt=""
            ></img>
            <h1>Edward Snowden</h1>
            <button>Update</button>
          </div>
          <div className="detailInfo">
            <div className="item">
              <span className="title">Username:</span>
              <span className="value">Edward Snowden</span>
            </div>
            <div className="item">
              <span className="title">Username:</span>
              <span className="value">Edward Snowden</span>
            </div>
            <div className="item">
              <span className="title">Username:</span>
              <span className="value">Edward Snowden</span>
            </div>
            <div className="item">
              <span className="title">Username:</span>
              <span className="value">Edward Snowden</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="activity">
        <h2>Latest Activity</h2>
        <li>
          <div>
            <p>Edward Snowden sold # of [product] for [value]</p>
            <time>X days ago</time>
          </div>
        </li>
        <li>
          <div>
            <p>Edward Snowden sold # of [product] for [value]</p>
            <time>X days ago</time>
          </div>
        </li>
        <li>
          <div>
            <p>Edward Snowden sold # of [product] for [value]</p>
            <time>X days ago</time>
          </div>
        </li>
        <li>
          <div>
            <p>Edward Snowden sold # of [product] for [value]</p>
            <time>X days ago</time>
          </div>
        </li>
        <li>
          <div>
            <p>Edward Snowden sold # of [product] for [value]</p>
            <time>X days ago</time>
          </div>
        </li>
        <li>
          <div>
            <p>Edward Snowden sold # of [product] for [value]</p>
            <time>X days ago</time>
          </div>
        </li>
      </div>
    </div>
  );
};

export default Details;
