import { useState } from "react";
export default function Player({ intialName, symbol }) {
  const [edit, setEdit] = useState(false);
  const [playerName, setPlayerName] = useState(intialName);

  function handleEdit() {
    setEdit((editing) => !editing);
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  return (
    <li>
      <span className="player">
        {!edit ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <span className="player-name">
            <input type="text" value={playerName}  onChange={handleChange}/>
          </span>
        )}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEdit}>{edit?"Save": "Edit"}</button>
      </span>
    </li>
  );
}
