import logo from './img/lotr-mc.png';
import './App.css';
import characterArray from './data/data';
import { Cards } from './components/Cards';

function App() {




  return (
    <div>
      <div className="main-bar">
        <img src={logo} alt="logo" />      
        </div>
        <div className="game-info">
          <p>Get points by clicking on an image but don't click on any more than once!</p>
          <p>Score: 0</p>
      </div>
      <Cards chArr={characterArray}  />
    </div>

  );
}

export default App;
