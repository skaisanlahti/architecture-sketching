import { useAppContext, useBehavior } from "../../utils/react-adapter";

export function TodoList() {
  const ctx = useAppContext();
  const todos = useBehavior(ctx.todoList.todos);

  return (
    <section className="todo-list">
      <ul className="todo-list_list">
        {todos.map((item) => (
          <li
            className="todo-list_item"
            key={item.id}
            aria-checked={item.done ? "true" : "false"}
          >
            <span className="todo-list_task">{item.task}</span>
            <button
              className="todo-list_button"
              onClick={() => ctx.todoList.toggleDone(item.id)}
            >
              {item.done ? "done" : "not done"}
            </button>
            <button
              className="todo-list_button"
              onClick={() => ctx.todoList.removeTodo(item.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
