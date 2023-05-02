import { RxEvent } from "../../library/RxEvent";
import { RxState } from "../../library/RxState";
import { ObservableTodoList } from "./interfaces/ObservableTodoList";
import { TodoItem } from "./TodoItem";

export class RxTodoList implements ObservableTodoList {
  public readonly todos = new RxState<TodoItem[]>([]);
  public readonly addTodo = new RxEvent<TodoItem>();
  public readonly removeTodo = new RxEvent<string>();
  public readonly toggleDone = new RxEvent<string>();
}
