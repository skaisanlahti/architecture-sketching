import { useObservableState, useViewContext } from "./utils/react-adapter";

export function View(): JSX.Element {
  const ctx = useViewContext();
  const todos = useObservableState(ctx.todoList.todos);
  const task = useObservableState(ctx.todoForm.task);
  const taskError = useObservableState(ctx.todoForm.taskError);
  const count = useObservableState(ctx.counter.count);

  return (
    <main style={{ textAlign: "center", marginTop: "5rem" }}>
      <section style={{ marginBottom: "1rem" }}>
        <p>{count}</p>
        <section
          style={{ display: "flex", gap: "1rem", justifyContent: "center" }}
        >
          <button onClick={() => ctx.counter.increment(1)}>+</button>
          <button onClick={() => ctx.counter.decrement(1)}>-</button>
          <button onClick={() => ctx.counter.multiply(2)}>x2</button>
          <button onClick={ctx.counter.reset}>reset</button>
        </section>
      </section>

      <input
        type="text"
        placeholder="Task description..."
        value={task}
        onChange={(event) => ctx.todoForm.task.setState(event.target.value)}
      />
      <p style={{ color: "red" }}>{taskError}</p>
      <button onClick={ctx.todoForm.submitTask}>New Todo</button>
      <ul style={{ width: "800px", textAlign: "left", margin: "auto" }}>
        {todos.map((item, index) => (
          <li
            key={item.id}
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "4fr 1fr 1fr",
              marginTop: index === 0 ? "1rem" : "",
              padding: "0.25rem",
              color: item.done ? "green" : "red",
            }}
          >
            <span>{item.task}</span>
            <button onClick={() => ctx.todoList.toggleDone(item.id)}>
              {item.done ? "done" : "not done"}
            </button>
            <button onClick={() => ctx.todoList.removeTodo(item.id)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
