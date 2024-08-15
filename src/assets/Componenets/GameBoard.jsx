import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleCellClick(rowIndex, columnIndex) {
    setGameBoard(previousBoard => {
      const updatedBoard = previousBoard.map(row => [...row]);
      updatedBoard[rowIndex][columnIndex] = "X";
      return updatedBoard;
    });
  }
  
  return (
    <div id="game-board">
      {gameBoard.map((row, rowIndex) => (
          <ol key={rowIndex}>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleCellClick(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
      ))}
    </div>
  );
}
