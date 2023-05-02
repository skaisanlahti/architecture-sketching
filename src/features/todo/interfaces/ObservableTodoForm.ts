import { ObservableEvent } from "../../../library/interfaces/ObservableEvent";
import { ObservableState } from "../../../library/interfaces/ObservableState";

export interface ObservableTodoForm {
  task: ObservableState<string>;
  taskError: ObservableState<string>;
  submitTask: ObservableEvent<string>;
}
