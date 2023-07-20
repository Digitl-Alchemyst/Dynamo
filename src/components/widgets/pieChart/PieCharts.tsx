
import { ResponsiveContainer, Pie, PieChart, Cell } from 'recharts';

interface PieData {
  name: string;
  value: string;
  color: string;
}

type Props = {
  title: string;
  dataKey: string;
  pieChartData: PieData[];
};

const data = {
  title: 'Leads by Source',
  dataKey: 'name',
  pieChartData: [
    { name: 'Social Media', value: '73', color: '#0088FE' },
    { name: 'Google', value: '83', color: '#00C49F' },
    { name: 'Craigslist', value: '46', color: '#FFBB28' },
    { name: 'Direct', value: '122', color: '#FF804E' },
    { name: 'Other', value: '32', color: '#CC93A3' },
  ],
};

const PieCharts = (props: Props) => {
  return (
    <div className="pieChartBox">
      <h1>{data.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Pie
              data={data.pieChartData}
              cx={120}
              cy={200}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="name"
            >
              {data.pieChartData.map((data) => (
                <Cell key={data.name} fill={data.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieCharts;