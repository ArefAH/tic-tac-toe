import Player from "./assets/Components/Player";
import GameBoard from "./assets/Components/GameBoard";
import Log from "./assets/Components/Log";
import { winningCombinations } from "./winning-combinations";
import GameOver from "./assets/Components/GameOver";
import { useState } from "react";

const Players = {
  X: "Player 1",
  O: "Player 2",
};

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}
function deriveWinner(gameBoard, players) {
  let winner;

  for (const combination of winningCombinations) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = initialGameBoard.map((row) => [...row]);

  if (gameTurns.length > 0) {
    for (const turn of gameTurns) {
      const { square, player } = turn;
      const { row, col } = square;
      gameBoard[row][col] = player;
    }
  }

  return gameBoard;
}

function App() {
  const [players, setPlayers] = useState(Players);
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard, players);

  const hasDraw = gameTurns.length === 9 && !winner;

  function handlePlayerChange(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  function resetGame() {
    setGameTurns([]);
  }

  function handleEdit(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  return (
    <div>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={Players.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onEdit={handleEdit}
          />
          <Player
            initialName={Players.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onEdit={handleEdit}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} restart={resetGame} />
        )}
        <GameBoard
          onSelectSquare={handlePlayerChange}
          turns={gameTurns}
          board={gameBoard}
        />
      </div>
      <Log turns={gameTurns} />
    </div>
  );
}

export default App;
