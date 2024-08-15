export default function Log({ log }) {
    return (
        <ol id="log">
            {log.map((entry, index) => (
                <li
                    key={index}
                    className={entry.highlighted ? "highlighted" : undefined}
                >
                    {entry.text}
                </li>
            ))}
        </ol>
    );
}