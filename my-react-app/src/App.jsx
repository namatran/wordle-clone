import React, { useState } from 'react'
import './App.css'
import GameBoard from './components/GameBoard'


const App = () => {
  const [ inputValue, setInputValue ] = useState(""); // Current guess being typed
  const [ guesses, setGuesses ] = useState([])        // all submitted guesses

  const answer = "NAMUS";
  const maxGuesses = 6;
  const limit = 5;
  const gameWon = guesses.includes(answer);
  const gameOver = guesses.length === maxGuesses;


  const handleChange = (event) => {
    const newValue = event.target.value;

    if (newValue.length <= limit) {
      setInputValue(event.target.value);
    }
  }

  const handleGuess = () => {
    if (inputValue.length === limit) {
      setGuesses([...guesses, inputValue.toUpperCase()]);  // spread operator from your notes!
    }
  }

  return (
    <div className="container">
      <h1>Nam's Wordle React Clone</h1>
      
      <GameBoard guesses={guesses} answer={answer} />

      {gameWon
        ? <p>You won! 🎉</p>
        : gameOver 
          ? <p>Game over! The word was: {answer}</p>
          : <>
              <input 
                value={inputValue}
                placeholder='Enter your guess' 
                onChange={handleChange}
              />
              <button onClick={handleGuess}>Guess</button>
            </>
      }
    </div>
  );
};

export default App;

