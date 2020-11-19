import './App.css';
import Portfolio from './components/Portfolio/Portfolio';
import Store from './components/Products/Store';
import Dropdown from './components/Dropdown/Dropdown';


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

      <div className="task-title dropdown-title">Выпадающий список</div>
      <Dropdown />
    </>
  );
}

export default App;
