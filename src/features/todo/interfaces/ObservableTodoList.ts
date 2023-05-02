import { ObservableEvent } from "../../../library/interfaces/ObservableEvent";
import { ObservableState } from "../../../library/interfaces/ObservableState";
import { TodoItem } from "../TodoItem";

export interface ObservableTodoList {
  todos: ObservableState<TodoItem[]>;
  addTodo: ObservableEvent<TodoItem>;
  removeTodo: ObservableEvent<string>;
  toggleDone: ObservableEvent<string>;
}
