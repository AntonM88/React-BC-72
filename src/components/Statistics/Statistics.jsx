import {StatisticsItem} from "../StatisticsItem/StatisticsItem";
import css from "./Statistics.module.css";

export const Statistics = ({stats}) => {
  return (
    <ul className={css.list}>
      {stats.map(({id, title, total}) => (
        <li className={css.item} key={id}>
          <StatisticsItem title={title} total={total} />
        </li>
      ))}
    </ul>
  );
};
