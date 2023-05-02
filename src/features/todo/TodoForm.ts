import { Event } from "../../library/Event";
import { State } from "../../library/State";
import { ObservableTodoForm } from "./interfaces/ObservableTodoForm";

export class TodoForm implements ObservableTodoForm {
  public readonly task = new State<string>("");
  public readonly taskError = new State<string>("");
  public readonly submitTask = new Event<string>();
}
