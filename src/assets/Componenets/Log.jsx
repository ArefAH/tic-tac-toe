export default function Log({ turns }) {
    return (
      <ol id="log">
        {turns.map((log) => {
          return (
            <li
              key={`${log.square.row}, ${log.square.col}`}
            >
            {log.player} selected {log.square.row}, {log.square.col}
            </li>
          );
        })}
      </ol>
    );
  }
  