const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectSquare}) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleCellClick(rowIndex, columnIndex) {
  //   setGameBoard(previousBoard => {
  //     const updatedBoard = previousBoard.map(row => [...row]);
  //     updatedBoard[rowIndex][columnIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });
  //   onSelectSquare();
  // }

  
  return (
    <li id="game-board">
      {gameBoard.map((row, rowIndex) => (
          <ol key={rowIndex}>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={onSelectSquare}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
      ))}
    </li>
  );
}
