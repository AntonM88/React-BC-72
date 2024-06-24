export const toDoReducer = (state = [], action) => {
  switch (action.type) {
    case "toDo/addToDo":
      return [...state, action.payload];

    default:
      return state;
  }
};
