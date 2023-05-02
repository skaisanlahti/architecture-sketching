import { ObservableState } from "../../../library/interfaces/ObservableState";

export interface PresentableTodoForm {
  task: ObservableState<string>;
  taskError: ObservableState<string>;
  submitTask: () => void;
}
