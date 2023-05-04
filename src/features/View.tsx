import { Counter } from "./counter/Counter";
import { TodoForm } from "./todo/view/TodoForm";
import { TodoList } from "./todo/view/TodoList";

export function View(): JSX.Element {
  return (
    <main style={{ textAlign: "center", marginTop: "5rem" }}>
      <Counter />
      <TodoForm />
      <TodoList />
    </main>
  );
}
