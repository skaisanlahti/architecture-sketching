import { BehaviorSubject, Subject } from "rxjs";

export interface ObservableTodoForm {
  task: BehaviorSubject<string>;
  taskError: BehaviorSubject<string>;
  submitTask: Subject<string>;
}

export class TodoFormSource implements ObservableTodoForm {
  public readonly task = new BehaviorSubject<string>("");
  public readonly taskError = new BehaviorSubject<string>("");
  public readonly submitTask = new Subject<string>();
}
