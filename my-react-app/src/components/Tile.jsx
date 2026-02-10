import React from "react";

const Tile = ({ letter, color }) => {
  return (
    <div className={`tile ${color}`}>
      {letter}
    </div>
  )
}

export default Tile;