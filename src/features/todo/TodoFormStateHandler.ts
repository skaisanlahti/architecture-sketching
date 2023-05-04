import { SubscriptionHandler } from "../utils/SubscriptionHandler";
import { createId } from "../utils/createId";
import { ObservableTodoForm } from "./TodoFormSource";
import { TodoItem } from "./TodoItem";
import { ObservableTodoList } from "./TodoListSource";

export class TodoFormStateHandler extends SubscriptionHandler {
  public constructor(
    private readonly todoForm: ObservableTodoForm,
    private readonly todoList: ObservableTodoList
  ) {
    super();
  }

  protected handleClearErrors() {
    return this.todoForm.task.subscribe(() => {
      if (this.todoForm.taskError.getValue() === "") return;
      this.todoForm.taskError.next("");
    });
  }

  protected handleSubmitTodo() {
    return this.todoForm.submitTask.subscribe((task) => {
      if (task.length === 0) {
        this.todoForm.taskError.next("Task can't be empty.");
        return;
      }

      if (task.length > 20) {
        this.todoForm.taskError.next("Task too long.");
        return;
      }

      const newTodo: TodoItem = { id: createId(), task, done: false };
      this.todoList.addTodo.next(newTodo);
      this.todoForm.task.next("");
      this.todoForm.taskError.next("");
    });
  }
}
