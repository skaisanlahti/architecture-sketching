import { ObservableTodoForm } from "./interfaces/ObservableTodoForm";
import { PresentableTodoForm } from "./interfaces/PresentableTodoForm";

export class TodoFormPresenter implements PresentableTodoForm {
  public readonly task;
  public readonly taskError;

  public constructor(private readonly todoForm: ObservableTodoForm) {
    this.task = todoForm.task;
    this.taskError = todoForm.taskError;
  }

  public readonly submitTask = () => {
    this.todoForm.submitTask.publish(this.task.getState());
  };
}
