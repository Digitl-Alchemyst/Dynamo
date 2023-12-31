import './pieCharts.scss';
import { ResponsiveContainer, Pie, PieChart, Cell, Tooltip } from 'recharts';

interface PieData {
  name: string;
  value: number;
  color: string;
}

type Props = {
  title: string;
  dataKey: string;
  pieChartData: PieData[];
};

const PieCharts = (props: Props) => {
  return (
    <div className="pieChartBox">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{
                background: 'white',
                borderRadius: '5px',
              }}
            />
            <Pie
              data={props.pieChartData}
              innerRadius={'70%'}
              outerRadius={'90%'}
              paddingAngle={5}
              dataKey="value"
            >
              {props.pieChartData.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {props.pieChartData.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieCharts;
