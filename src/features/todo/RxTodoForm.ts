import { RxEvent } from "../../library/RxEvent";
import { RxState } from "../../library/RxState";
import { ObservableTodoForm } from "./interfaces/ObservableTodoForm";

export class RxTodoForm implements ObservableTodoForm {
  public readonly task = new RxState<string>("");
  public readonly taskError = new RxState<string>("");
  public readonly submitTask = new RxEvent<string>();
}
