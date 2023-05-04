import { BehaviorSubject } from "rxjs";
import { ObservableTodoForm } from "./TodoFormSource";

export interface PresentableTodoForm {
  task: BehaviorSubject<string>;
  taskError: BehaviorSubject<string>;
  submitTask: () => void;
}

export class TodoFormPresenter implements PresentableTodoForm {
  public readonly task;
  public readonly taskError;

  public constructor(private readonly todoForm: ObservableTodoForm) {
    this.task = todoForm.task;
    this.taskError = todoForm.taskError;
  }

  public readonly submitTask = () => {
    this.todoForm.submitTask.next(this.task.getValue());
  };
}
