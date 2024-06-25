export const setFilter = (value) => {
  return {
    payload: value,
    type: "filter/setFilter",
  };
};
