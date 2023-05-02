import { ObservableTodoList } from "./interfaces/ObservableTodoList";
import { PresentableTodoList } from "./interfaces/PresentableTodoList";

export class TodoListPresenter implements PresentableTodoList {
  public readonly todos;

  public constructor(private readonly todoList: ObservableTodoList) {
    this.todos = todoList.todos;
  }

  public readonly removeTodo = (id: string) => {
    this.todoList.removeTodo.publish(id);
  };

  public readonly toggleDone = (id: string) => {
    this.todoList.toggleDone.publish(id);
  };
}
