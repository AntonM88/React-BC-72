import { useDispatch, useSelector } from "react-redux";
import { changeTodo, setCurrentTodo } from "reduxStore/actions";

export const ChangeFormTodo = () => {
  const dispatch = useDispatch();
  const currentTodo = useSelector((state) => state.todos.currentTodo);
  const handleSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.elements.todoUpdate;
    dispatch(changeTodo(value));
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
