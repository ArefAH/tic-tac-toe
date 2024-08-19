import { useState } from "react";
export default function Player({ initialName, symbol, isActive, onEdit }) {
  const [edit, setEdit] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEdit() {
    setEdit((editing) => !editing);
    if (edit) {
      onEdit(symbol, playerName);
    }
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!edit ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <span className="player-name">
            <input type="text" value={playerName} onChange={handleChange} />
          </span>
        )}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEdit}>{edit ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
