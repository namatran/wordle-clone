import React from "react";
import Tile from './Tile';

const getLetterColor = (letter, index, guess, answer) => {
  if (letter === answer[index]) {
    return "green"
  } else if (answer.includes(letter)) {
    return "yellow"
  } else {
    return "gray"
  }
}

const Row = ({ guess, answer }) => {
  return (
    <div className="row">
      {guess.split("").map((letter, index) => (
        <Tile key={index} letter={letter} color={getLetterColor(letter, index, guess, answer)} />
      ))}
    </div>
  )
}

export default Row;