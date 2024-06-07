import css from "./StatisticsItem.module.css";

export const StatisticsItem = ({title, total}) => {
  return (
    <div>
      <span className={css.counter}>{total}</span>
      <p className={css.text}>{title}</p>
    </div>
  );
};
