const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;

  if (turns.length > 0) {
    for (const turn of turns) {
      const { square, player } = turn;
      const { row, col } = square;
      gameBoard[row][col] = player;
    }
  }

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
              <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
                {playerSymbol}
              </button>
            </li>
          ))}
        </ol>
      ))}
    </li>
  );
}
