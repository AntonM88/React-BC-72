import {TodoForm, TodoList, Filter, Loader} from "components";
import {ChangeFormTodo, Heading} from "components";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  selectCurrentTodo,
  selectFilter,
  selectTodos,
  selectIsError,
  selectIsLoading,
  selectFilteredTodos,
} from "reduxStore/todo/selectors";
import {fetchTodos} from "reduxStore/todo/operations";

const Todos = () => {
  const currentTodo = useSelector(selectCurrentTodo);
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const filteredTodos = useSelector(selectFilteredTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      {currentTodo ? <ChangeFormTodo currentTodo={currentTodo} /> : <TodoForm />}
      {todos.length > 0 && <Filter />}
      {todos.length > 0 && !isError && <TodoList todos={filteredTodos} />}
      {!todos.length && !isLoading && !isError && <Heading title={"All todo completed!"} />}
      {filteredTodos.length === 0 && todos.length !== 0 && (
        <Heading title={`Not find todo width ${filter}`} />
      )}
      {isLoading && <Loader />}
      {isError && <Heading title={"Something went wrong 😢"} />}
    </div>
  );
};

export default Todos;
