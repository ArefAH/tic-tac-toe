import Player from "./assets/Componenets/Player";
import GameBoard from "./assets/Componenets/GameBoard";
function App() {
  return (
    <div id="game-container">
      <ol id="players">
        <Player intialName="Player 1" symbol="X" />
        <Player intialName="Player 2" symbol="O" />
      </ol>
      <GameBoard />
    </div>
  );
}

export default App;
