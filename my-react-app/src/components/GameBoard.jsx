import React from "react";
import Row from './Row';

const GameBoard = ({ guesses, answer }) => {
  return (
    <div className="board">
      {guesses.map((guess, index) => (
        <Row key={index} guess={guess} answer={answer} />
      ))}
    </div>
  )
}

export default GameBoard;