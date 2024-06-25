import { useDispatch, useSelector } from "react-redux";
import { updateTodo, setCurrentTodo } from "reduxStore/todoSlice";

export const ChangeFormTodo = () => {
  const dispatch = useDispatch();
  const currentTodo = useSelector((state) => state.todos.currentTodo);
  const handleSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.elements.todoUpdate;
    dispatch(updateTodo(value));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" defaultValue={currentTodo.text} name="todoUpdate" />
        <button type="submit">Change</button>
      </form>

      <button onClick={() => dispatch(setCurrentTodo(null))}>Cancel</button>
    </>
  );
};
