import React from "react";
import Tile from './Tile';

const getLetterColor = (letter, index, guess, answer) => {
  // Green first - exact matches
  if (letter === answer[index]) {
    return "green"
  }
  
  // Count how many of this letter are in the answer
  const letterCount = answer.split("").filter(l => l === letter).length
  
  // Count how many greens and yellows of this letter appear BEFORE this index
  let usedCount = 0
  for (let i = 0; i < index; i++) {
    if (guess[i] === letter) {
      if (answer[i] === letter) {
        usedCount++ // green
      } else if (answer.includes(letter)) {
        usedCount++ // yellow
      }
    }
  }
  
  // If we haven't used up all instances and letter exists in answer
  if (answer.includes(letter) && usedCount < letterCount) {
    return "yellow"
  }
  
  return "gray"
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