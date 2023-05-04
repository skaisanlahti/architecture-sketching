import { BehaviorSubject, Subject } from "rxjs";
import { TodoItem } from "./TodoItem";

export interface ObservableTodoList {
  todos: BehaviorSubject<TodoItem[]>;
  addTodo: Subject<TodoItem>;
  removeTodo: Subject<string>;
  toggleDone: Subject<string>;
}

export class TodoListSource implements ObservableTodoList {
  public readonly todos = new BehaviorSubject<TodoItem[]>([]);
  public readonly addTodo = new Subject<TodoItem>();
  public readonly removeTodo = new Subject<string>();
  public readonly toggleDone = new Subject<string>();
}
