export const addToDo = (toDo) => {
  return {
    payload: toDo,
    type: "toDo/addToDo",
  };
};

export const setFilter = (value) => {
  return {
    payload: value,
    type: "filter/setFilter",
  };
};

export const deleteToDo = (id) => {
  return {
    payload: id,
    type: "toDo/deleteToDo",
  };
};
export const changeTodo = (text) => {
  return {
    payload: text,
    type: "todo/changeTodo",
  };
};
export const setCurrentTodo = (todo) => {
  return {
    payload: todo,
    type: "todo/setCurrentTodo",
  };
};
