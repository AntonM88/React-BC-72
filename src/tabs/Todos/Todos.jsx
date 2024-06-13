import { TodoForm, TodoList } from "components";
import { nanoid } from "nanoid";
import { useLocalStorage } from "hooks/useLocalStorage";

export const Todos = () => {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const createTodo = (text) => {
    const todoObj = {
      id: nanoid(),
      text,
      createAt: Date.now(),
    };
    setTodos([...todos, todoObj]);
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <TodoForm createTodo={createTodo} />
      <TodoList todos={todos} handleDelete={handleDelete} />
    </div>
  );
};
