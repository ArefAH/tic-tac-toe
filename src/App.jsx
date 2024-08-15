import Player from "./assets/Componenets/Player";
import GameBoard from "./assets/Componenets/GameBoard";
import { useState } from "react";
function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handlePlayerChange() {
    setActivePlayer((activePlayer) => activePlayer === "X" ? "O" : "X");
  }
  return (
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"}/>
        <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"}/>
      </ol>
      <GameBoard onSelectSquare={handlePlayerChange} activePlayerSymbol={activePlayer}/>
    </div>
  );
}

export default App;
