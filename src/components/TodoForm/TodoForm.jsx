import { useState } from "react";

export const TodoForm = ({ createTodo }) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Enter Text");
      return;
    }
    createTodo(text);

    setText("");
  };

  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        placeholder="Enter your ToDo"
        value={text}
        onChange={handleChange}
      />
      <button type="submit">Create ToDo</button>
    </form>
  );
};
