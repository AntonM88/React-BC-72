import {formatDateToNow} from "helpers/formatDate";
import s from "./TodoList.module.css";
import {useDispatch, useSelector} from "react-redux";
import {deleteToDo} from "reduxStore/actions";

export const TodoList = ({handleDelete, changeTodo}) => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={s.list}>
      {filteredTodos.map((todo, index) => (
        <li className={s.item} key={todo.id}>
          <p>
            #{index + 1}_{todo.text}
          </p>
          <p>was created {formatDateToNow(todo.createAt)}</p>
          <button className={s.btn_del} onClick={() => dispatch(deleteToDo(todo.id))}>
            Delete
          </button>
          <button className={s.btn_change} onClick={() => changeTodo(todo)}>
            Change
          </button>
        </li>
      ))}
    </ul>
  );
};
