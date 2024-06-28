import { useDispatch, useSelector } from "react-redux";
import { setCurrentTodo } from "reduxStore/todo/todoSlice";
import { updateTodo } from "reduxStore/todo/operations";
import { selectCurrentTodo } from "reduxStore/todo/selectors";

export const ChangeFormTodo = () => {
  const dispatch = useDispatch();
  const currentTodo = useSelector(selectCurrentTodo);
  const handleSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.elements.todoUpdate;
    dispatch(updateTodo({ ...currentTodo, text: value }));
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
