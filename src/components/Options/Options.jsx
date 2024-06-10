export const Options = ({ options, handleClick, handleReset, total }) => {
  return (
    <ul>
      {options.map((item, index) => (
        <li key={item}>
          <button onClick={() => handleClick(item, index + 1)}>{item}</button>
        </li>
      ))}
      {total > 0 && (
        <li>
          <button onClick={handleReset}>Reset</button>
        </li>
      )}
    </ul>
  );
};
