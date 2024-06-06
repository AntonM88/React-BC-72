import { StatisticsItem } from "../StatisticsItem/StatisticsItem";

export const Statistics = ({ stats }) => {
  return (
    <ul>
      {stats.map(({ id, title, total }) => (
        <li key={id}>
          <StatisticsItem title={title} total={total} />
        </li>
      ))}
    </ul>
  );
};
