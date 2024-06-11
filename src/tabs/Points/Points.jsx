import { Options, Feadback, Heading } from "components";
import { useLocalStorage } from "hooks/useLocalStorage";

const initialState = {
  one: 0,
  two: 0,
  three: 0,
  four: 0,
  five: 0,
};

export const Points = () => {
  const [points, setPoints] = useLocalStorage("points", initialState);

  const handleClick = (point, value) => {
    setPoints({
      ...points,
      [point]: points[point] + value,
    });
  };

  const handleReset = () => {
    setPoints(initialState);
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
        <Feadback points={[...Object.entries(points), ["total", total]]} />
      ) : (
        <Heading title="No points" top />
      )}
    </div>
  );
};
