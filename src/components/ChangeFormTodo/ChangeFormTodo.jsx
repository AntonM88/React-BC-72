export const ChangeFormTodo = ({ currentTodo, changeTodo, updateTodo }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.elements.todoUpdate;
    updateTodo(value);
    changeTodo(null);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" defaultValue={currentTodo.text} name="todoUpdate" />
        <button type="submit">Change</button>
      </form>

      <button onClick={() => changeTodo(null)}>Cancel</button>
    </>
  );
};
