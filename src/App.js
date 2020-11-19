import './App.css';
import Portfolio from './components/Portfolio/Portfolio';
import Store from './components/Products/Store';

function App() {  
  return (    
    <>
      <div className="task-title portfolio-title">Портфолио с фильтрами</div>
      <div className="portfolio-wrapper">
        <Portfolio />
      </div>

      <div className="task-title products-title">Расположение товаров</div>
      <div className="store-wrapper">
        <Store />
      </div>
    </>
  );
}

export default App;
