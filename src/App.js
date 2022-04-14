import React, {useState} from 'react'
import logo from './img/lotr-mc.png';
import './App.css';
import characterArray from './data/data';
import { Cards } from './components/Cards';

function App() {

const [score, setScore] = useState(0);
const [bestScore, setBestScore] = useState(0);
const [arrayGuess, setArrayGuess] = useState([]);
const [win, setWin] = useState(false);

    function game(e) {
      if (e.target.id === '') return;
      if (!arrayGuess.includes(e.target.id)) {
        setArrayGuess((prevState) => [...prevState, e.target.id])
        setScore(score + 1) 
        shuffle(characterArray);
        if (score === 11) {
          setWin(true)
        }
      } else {
        reset()
      }
    }

    function reset() {
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
      setArrayGuess([]);
      setWin(false);
    }

    function shuffle(array) {
      let currentIndex = array.length;
      let randomIndex;

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--
        [array[currentIndex], array[randomIndex]] =
          [array[randomIndex], array[currentIndex]];
      }
      return array;
    }

  return (
    <div>
      <div className='main'>
      <div className="main-bar">
        <img src={logo} alt="logo" />      
        </div>
        <div className="game-info">
          <p>Get points by clicking on an image but don't click on any more than once!</p>
        { 
          win?  (<div className='score-endgame'>
                  <p>You won!</p>
                  <button onClick={() => reset() }>Play again</button>
                </div>) :
                (<div className='score-endgame'>
                  <p>Score: {score}</p>
                  <p>Best score: {bestScore}</p>
                </div> )
        }
      </div>
      <Cards chArr={characterArray} handleGame={(e) => game(e)}  />
      </div>
      <div className='footer'>
        <p>project Memory Card from The Odin Project made by Luca Cardillo</p>
      </div>
    </div>
  );
}

export default App;