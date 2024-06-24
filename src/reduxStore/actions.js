export const addToDo = (toDo) => {
  return {
    payload: toDo,
    type: "toDo/addToDo",
  };
};
