import { TodoForm, TodoList, Filter } from "components";
import { nanoid } from "nanoid";
import { useLocalStorage } from "hooks/useLocalStorage";
import { useState } from "react";
import { ChangeFormTodo } from "../../components";

export const Todos = () => {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [filter, setFilter] = useState("");
  const [currentTodo, setCurrentTodo] = useState(null);

  const createTodo = (text) => {
    const todoObj = {
      id: nanoid(),
      text,
      createAt: Date.now(),
    };
    setTodos((prevState) => [...prevState, todoObj]);
  };

  const changeTodo = (todo) => {
    setCurrentTodo(todo);
  };

  const updateTodo = (text) => {
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === currentTodo.id ? { ...todo, text } : todo
      )
    );
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

  console.log(currentTodo);

  return (
    <div>
      {currentTodo ? (
        <ChangeFormTodo
          currentTodo={currentTodo}
          changeTodo={changeTodo}
          updateTodo={updateTodo}
        />
      ) : (
        <TodoForm createTodo={createTodo} />
      )}
      <Filter handleFilter={handleFilter} />
      <TodoList
        todos={filteredTodos}
        handleDelete={handleDelete}
        changeTodo={changeTodo}
      />
    </div>
  );
};
