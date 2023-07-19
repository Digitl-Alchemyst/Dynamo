import './home.scss'
import TopSales from '../../components/widgets/topSales/TopSales'


export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="widget widget1"><TopSales /></div>
        <div className="widget widget2">Widget 2</div>
        <div className="widget widget3">Widget 3</div>
        <div className="widget widget4">Widget 4</div>
        <div className="widget widget5">Widget 5</div>
        <div className="widget widget6">Widget 6</div>
        <div className="widget widget7">Widget 7</div>
        <div className="widget widget8">Widget 8</div>
        <div className="widget widget9">Widget 9</div>
      </div>
    </div>
  );
};

export default Home;