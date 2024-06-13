import { TodoForm, TodoList, Filter } from "components";
import { nanoid } from "nanoid";
import { useLocalStorage } from "hooks/useLocalStorage";
import { useState } from "react";

export const Todos = () => {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [filter, setFilter] = useState("");

  const createTodo = (text) => {
    const todoObj = {
      id: nanoid(),
      text,
      createAt: Date.now(),
    };
    setTodos((prevState) => [...prevState, todoObj]);
  };
  const handleDelete = (id) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <TodoForm createTodo={createTodo} />
      <Filter handleFilter={handleFilter} />
      <TodoList todos={filteredTodos} handleDelete={handleDelete} />
    </div>
  );
};
