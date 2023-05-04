import { BehaviorSubject } from "rxjs";
import { TodoItem } from "./TodoItem";
import { ObservableTodoList } from "./TodoListSource";

export interface PresentableTodoList {
  todos: BehaviorSubject<TodoItem[]>;
  removeTodo: (id: string) => void;
  toggleDone: (id: string) => void;
}

export class TodoListPresenter implements PresentableTodoList {
  public readonly todos;

  public constructor(private readonly todoList: ObservableTodoList) {
    this.todos = todoList.todos;
  }

  public readonly removeTodo = (id: string) => {
    this.todoList.removeTodo.next(id);
  };

  public readonly toggleDone = (id: string) => {
    this.todoList.toggleDone.next(id);
  };
}
