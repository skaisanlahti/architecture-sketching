import { useAppContext, useBehavior } from "../../utils/react-adapter";

export function TodoForm() {
  const ctx = useAppContext();
  const task = useBehavior(ctx.todoForm.task);
  const taskError = useBehavior(ctx.todoForm.taskError);

  return (
    <section className="todo-form">
      <input
        className="todo-form_input"
        type="text"
        placeholder="Task description..."
        value={task}
        onChange={(event) => ctx.todoForm.task.next(event.target.value)}
      />
      <p className="todo-form_error">{taskError}</p>
      <button className="todo-form_submit" onClick={ctx.todoForm.submitTask}>
        New Todo
      </button>
    </section>
  );
}
