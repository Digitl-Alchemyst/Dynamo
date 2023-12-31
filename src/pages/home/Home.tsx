import './home.scss';
import TopSales from '../../components/widgets/topSales/TopSales';
import Charts from '../../components/widgets/simpleChart/SimpleCharts';
import {
  chartBoxTeam,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxConversion,
} from '../../../mockData/simpleChartData';
import BarCharts from '../../components/widgets/barChart/BarCharts';
import {
  barChartDataProfit,
  barChartDataVisitors,
} from '../../../mockData/barChartData';
import PieCharts from '../../components/widgets/pieChart/PieCharts';
import { pieChartDataLeads } from '../../../mockData/pieChartsData';
import AreaCharts from '../../components/widgets/areaChart/AreaCharts';
import { areaChartDataProductRevenue } from '../../../mockData/areaChartsData';

export const Home = () => {
  return (
    <div className="home">
      <div className="widgetContainer">
        <div className="widget widget1">
          <TopSales />
        </div>
        <div className="widget widget2">
          <Charts {...chartBoxTeam} />
        </div>
        <div className="widget widget3">
          <Charts {...chartBoxProduct} />
        </div>
        <div className="widget widget4">
          <PieCharts {...pieChartDataLeads} />
        </div>
        <div className="widget widget5">
          <Charts {...chartBoxRevenue} />
        </div>
        <div className="widget widget6">
          <Charts {...chartBoxConversion} />
        </div>
        <div className="widget widget7">
          <AreaCharts {...areaChartDataProductRevenue} />
        </div>

        <div className="widget widget8">
          <BarCharts {...barChartDataVisitors} />
        </div>
        <div className="widget widget9">
          <BarCharts {...barChartDataProfit} />
        </div>
      </div>
    </div>
  );
};

export default Home;
