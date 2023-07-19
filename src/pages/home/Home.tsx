import './home.scss';
import TopSales from '../../components/widgets/topSales/TopSales';
import Charts from '../../components/widgets/charts/Charts';
import { chartBoxTeam, chartBoxProduct, chartBoxRevenue, chartBoxConversion } from '../../components/widgets/charts/chartBoxData';

export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="widget widget1">
          <TopSales />
        </div>
        <div className="widget widget2">
          <Charts {...chartBoxTeam} />
        </div>
        <div className="widget widget3">
          <Charts {...chartBoxProduct}/>
        </div>
        <div className="widget widget4">Widget 4</div>
        <div className="widget widget5">
          <Charts {...chartBoxRevenue}/>
        </div>
        <div className="widget widget6">
          <Charts {...chartBoxConversion}/>
        </div>
        <div className="widget widget7">Widget 7</div>
        <div className="widget widget8">Widget 8</div>
        <div className="widget widget9">Widget 9</div>
      </div>
    </div>
  );
};

export default Home;
