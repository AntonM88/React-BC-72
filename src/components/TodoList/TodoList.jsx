import { formatDateToNow } from "helpers/formatDate";

export const TodoList = ({ todos, handleDelete, changeTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={todo.id}>
          <p>
            #{index + 1}_{todo.text}
          </p>
          <span>was created {formatDateToNow(todo.createAt)}</span>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
          <button onClick={() => changeTodo(todo)}>Change</button>
        </li>
      ))}
    </ul>
  );
};
