import { ObservableState } from "../../../library/interfaces/ObservableState";
import { TodoItem } from "../TodoItem";

export interface PresentableTodoList {
  todos: ObservableState<TodoItem[]>;
  removeTodo: (id: string) => void;
  toggleDone: (id: string) => void;
}
