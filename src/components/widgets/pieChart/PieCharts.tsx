import './pieCharts.scss';
import { ResponsiveContainer, Pie, PieChart, Cell } from 'recharts';

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
    </div>
  );
};

export default PieCharts;
