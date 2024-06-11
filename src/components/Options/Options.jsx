import s from "./Options.module.css";
import clsx from "clsx";
export const Options = ({ options, handleClick, handleReset, total }) => {
  return (
    <ul className={s.list}>
      {options.map((item, index) => (
        <li key={item}>
          <button
            className={clsx(s.optionsBtn, { [s[item]]: item })}
            type="button"
            onClick={() => handleClick(item, index + 1)}
          >
            {item}
          </button>
        </li>
      ))}
      {total > 0 && (
        <li>
          <button className={s.reset} type="button" onClick={handleReset}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};
