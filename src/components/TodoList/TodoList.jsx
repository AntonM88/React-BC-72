import { formatDateToNow } from "helpers/formatDate";
import s from "./TodoList.module.css";
import { useSelector } from "react-redux";

export const TodoList = ({ handleDelete, changeTodo }) => {
  const todos = useSelector((state) => state);
  console.log(todos);
  return (
    <ul className={s.list}>
      {todos.map((todo, index) => (
        <li className={s.item} key={todo.id}>
          <p>
            #{index + 1}_{todo.text}
          </p>
          <p>was created {formatDateToNow(todo.createAt)}</p>
          <button className={s.btn_del} onClick={() => handleDelete(todo.id)}>
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
