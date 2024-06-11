import s from "./Feedback.module.css";
export const Feadback = ({ points }) => {
  return (
    <ul className={s.list}>
      {points.map(([key, value]) => (
        <li className={s.item} key={key}>
          <p>
            {key}: {value}
          </p>
        </li>
      ))}
    </ul>
  );
};
