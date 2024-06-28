import { useDispatch } from "react-redux";
import s from "./Filter.module.css";
import { setFilter } from "reduxStore/filter/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.filter}>
      Find Todo
      <input
        type="text"
        onChange={(event) => dispatch(setFilter(event.target.value))}
      />
    </div>
  );
};
