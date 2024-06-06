export const StatisticsItem = ({ title, total }) => {
  return (
    <div>
      <span>{total}</span>
      <p>{title}</p>
    </div>
  );
};
