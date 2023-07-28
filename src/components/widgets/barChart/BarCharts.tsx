import { BarChart, Bar, Tooltip, ResponsiveContainer } from 'recharts';
import './barCharts.scss';

type Props = {
  title: string;
  color: string;
  dataKey: string;
  barChartData: object[];
};

const BarCharts = (props: Props) => {
  return (
    <div className="barChartBox">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={170}>
          <BarChart data={props.barChartData}>
            <Tooltip
              contentStyle={{ background: '#2a3447', borderRadius: '15px' }}
              labelStyle={{ display: 'none' }}
              cursor={{ fill: 'none' }}
              // position={{ x: 10, y: 85 }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarCharts;
