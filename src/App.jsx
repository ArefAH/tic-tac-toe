import Player from "./assets/Componenets/Player";
import GameBoard from "./assets/Componenets/GameBoard";
import Log from "./assets/Componenets/Log";
import { useState } from "react";
function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  function handlePlayerChange(rowIndex, colIndex) {
    setActivePlayer((activePlayer) => (activePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer = activePlayer;
      if (prevTurns.length > 0 && prevTurns[0].player === activePlayer) {
        currentPlayer = prevTurns[0].player === "X" ? "O" : "X";
      }
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }
  return (
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player
          initialName="Player 1"
          symbol="X"
          isActive={activePlayer === "X"}
        />
        <Player
          initialName="Player 2"
          symbol="O"
          isActive={activePlayer === "O"}
        />
      </ol>
      <GameBoard onSelectSquare={handlePlayerChange} />
    </div>
  );
}

export default App;
