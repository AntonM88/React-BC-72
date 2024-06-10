import { useState } from "react";

export const Points = () => {
  const [points, setPoints] = useState({
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
  });

  const handleClick = (point, value) => {
    console.log(point);
    setPoints({
      ...points,
      [point]: points[point] + value,
    });
  };

  const total = Object.values(points).reduce((acc, value) => acc + value, 0);

  return (
    <div>
      {Object.keys(points).map((item, index) => (
        <button onClick={() => handleClick(item, index + 1)} key={item}>
          {item}
        </button>
      ))}
      {total ? (
        <ul>
          {Object.entries(points).map(([key, value]) => (
            <li key={key}>
              <p>
                {key}: {value}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Points</p>
      )}
    </div>
  );
};
