import { SubscriptionHandler } from "../../library/SubscriptionHandler";
import { createId } from "../utils/createId";
import { ObservableTodoForm } from "./interfaces/ObservableTodoForm";
import { ObservableTodoList } from "./interfaces/ObservableTodoList";
import { TodoItem } from "./TodoItem";

export class TodoFormStateHandler extends SubscriptionHandler {
  public constructor(
    private readonly todoForm: ObservableTodoForm,
    private readonly todoList: ObservableTodoList
  ) {
    super();
  }

  protected handleClearErrors() {
    return this.todoForm.task.subscribe(() => {
      if (this.todoForm.taskError.getState() !== "") {
        this.todoForm.taskError.setState("");
      }
    });
  }

  protected handleSubmitTodo() {
    return this.todoForm.submitTask.subscribe((task) => {
      if (task.length === 0) {
        this.todoForm.taskError.setState("Task can't be empty.");
        return;
      }

      if (task.length > 20) {
        this.todoForm.taskError.setState("Task too long.");
        return;
      }

      const newTodo: TodoItem = { id: createId(), task, done: false };
      this.todoList.addTodo.publish(newTodo);
      this.todoForm.task.setState("");
      this.todoForm.taskError.setState("");
    });
  }
}
