import React, { StrictMode } from "react";
import { useState } from "react";
import "./styles.css";

// let whosturn = 0;

function Square({ val, onSquareClick }) {
  // const [num, setNum] = useState(null);
  // function handleClick() {
  //   whosturn%2==0 ? setNum("O") : setNum("X");
  //   whosturn += 1;
  // }
  return (
  <div>
    <button className="square" onClick={onSquareClick}>{val}</button>
  </div>
  );
}
let whosturn = 0;
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  function handleClick(n) {
    const followingSquares = squares.slice();
    whosturn%2==0 ? followingSquares[n] = "O" : followingSquares[n] = "X";
    setSquares(followingSquares);
    whosturn += 1;
  }
  return (
  <div>
    <div className="board-row">
      <Square val={squares[0]} onSquareClick={() => handleClick(0)}/>
      <Square val={squares[1]} onSquareClick={() => handleClick(1)}/>
      <Square val={squares[2]} onSquareClick={() => handleClick(2)}/>
    </div>
    <div className="board-row">
      <Square val={squares[3]} onSquareClick={() => handleClick(3)}/>
      <Square val={squares[4]} onSquareClick={() => handleClick(4)}/>
      <Square val={squares[5]} onSquareClick={() => handleClick(5)}/>
    </div>
    <div className="board-row">
      <Square val={squares[6]} onSquareClick={() => handleClick(6)}/>
      <Square val={squares[7]} onSquareClick={() => handleClick(7)}/>
      <Square val={squares[8]} onSquareClick={() => handleClick(8)}/>
    </div>
  </div>
  );
}

