import { useState } from "react";
import { Options, Feadback, Heading } from "components";

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

  const handleReset = () => {
    setPoints({
      one: 0,
      two: 0,
      three: 0,
      four: 0,
      five: 0,
    });
  };

  const total = Object.values(points).reduce((acc, value) => acc + value, 0);

  return (
    <div>
      <Options
        handleReset={handleReset}
        handleClick={handleClick}
        total={total}
        options={Object.keys(points)}
      />
      {total ? (
        <Feadback points={Object.entries(points)} />
      ) : (
        <Heading title="No points" top />
      )}
    </div>
  );
};
