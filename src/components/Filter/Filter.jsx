export const Filter = ({ handleFilter }) => {
  return (
    <div>
      Find Todo
      <input type="text" onChange={handleFilter} />
    </div>
  );
};
