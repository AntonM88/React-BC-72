export const Feadback = ({ points }) => {
  return (
    <ul>
      {points.map(([key, value]) => (
        <li key={key}>
          <p>
            {key}: {value}
          </p>
        </li>
      ))}
    </ul>
  );
};
