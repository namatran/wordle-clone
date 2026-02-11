import React from "react";
import Tile from './Tile';

const getLetterColor = (letter, index, guess, answer) => {
  // First pass: check if it's green (exact match)
  if (letter === answer[index]) {
    return "green"
  }
  
  // Count how many of this letter are in answer
  const answerLetters = answer.split("")
  const guessLetters = guess.split("")
  
  // Mark all greens first
  const greenIndices = []
  for (let i = 0; i < 5; i++) {
    if (guessLetters[i] === answerLetters[i]) {
      greenIndices.push(i)
    }
  }
  
  // Count available instances (total in answer - greens already used)
  let availableCount = answerLetters.filter(l => l === letter).length
  greenIndices.forEach(i => {
    if (guessLetters[i] === letter) availableCount--
  })
  
  // Count yellows before this index
  let yellowsUsed = 0
  for (let i = 0; i < index; i++) {
    if (guessLetters[i] === letter && !greenIndices.includes(i)) {
      yellowsUsed++
    }
  }
  
  // Yellow if letter exists and we haven't used all available
  if (answer.includes(letter) && yellowsUsed < availableCount) {
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