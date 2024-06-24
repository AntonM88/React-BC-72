import { TodoForm, TodoList, Filter } from "components";
import { ChangeFormTodo, Heading } from "components";
import { useSelector } from "react-redux";
import {
  selectCurrentTodo,
  selectFilter,
  selectTodos,
} from "reduxStore/selectors";

const Todos = () => {
  const currentTodo = useSelector(selectCurrentTodo);
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {currentTodo ? (
        <ChangeFormTodo currentTodo={currentTodo} />
      ) : (
        <TodoForm />
      )}
      {todos.length > 0 && <Filter />}
      {todos.length ? (
        <TodoList todos={filteredTodos} />
      ) : (
        <Heading title={"All todo completed!"} />
      )}
      {filteredTodos.length === 0 && todos.length !== 0 && (
        <Heading title={`Not find todo width ${filter}`} />
      )}
    </div>
  );
};

export default Todos;
