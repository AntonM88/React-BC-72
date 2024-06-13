import { TodoForm } from "components";
import { nanoid } from "nanoid";
import { useState } from "react";

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const createTodo = (text) => {
    const todoObj = {
      id: nanoid(),
      text,
      createAt: Date.now(),
    };
    setTodos([...todos, todoObj]);
  };

  console.log(todos);

  return (
    <div>
      <TodoForm createTodo={createTodo} />
    </div>
  );
};
