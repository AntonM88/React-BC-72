import s from "./TodoList.module.css";
import {useDispatch} from "react-redux";
import {setCurrentTodo} from "reduxStore/todo/todoSlice";
import {deleteTodo} from "reduxStore/todo/operations";

export const TodoList = ({todos}) => {
  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      {todos.map((todo, index) => (
        <li className={s.item} key={todo.id}>
          <p>
            #{index + 1}_{todo.text}
          </p>
          <button className={s.btn_del} onClick={() => dispatch(deleteTodo(todo.id))}>
            Delete
          </button>
          <button className={s.btn_change} onClick={() => dispatch(setCurrentTodo(todo))}>
            Change
          </button>
        </li>
      ))}
    </ul>
  );
};
