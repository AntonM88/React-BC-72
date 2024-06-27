import {useDispatch, useSelector} from "react-redux";
import {setCurrentTodo} from "reduxStore/todoSlice";
import {updateTodo} from "reduxStore/operations";
import {selectCurrentTodo} from "reduxStore/selectors";

export const ChangeFormTodo = () => {
  const dispatch = useDispatch();
  const currentTodo = useSelector(selectCurrentTodo);
  const handleSubmit = (event) => {
    event.preventDefault();
    const {value} = event.target.elements.todoUpdate;
    dispatch(updateTodo({...currentTodo, text: value}));
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
