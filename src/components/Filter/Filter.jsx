import s from "./Filter.module.css";

export const Filter = ({ handleFilter }) => {
  return (
    <div className={s.filter}>
      Find Todo
      <input type="text" onChange={handleFilter} />
    </div>
  );
};
