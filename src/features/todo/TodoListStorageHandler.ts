import { SubscriptionHandler } from "../../library/SubscriptionHandler";
import { defaultTodos } from "./data";
import { ObservableTodoList } from "./interfaces/ObservableTodoList";
import { TodoStorage } from "./interfaces/TodoStorage";

export class TodoListStorageHandler extends SubscriptionHandler {
  public constructor(
    private readonly todoList: ObservableTodoList,
    private readonly storage: TodoStorage
  ) {
    super();
    this.loadTodos();
  }

  protected handleSaveTodos() {
    return this.todoList.todos.subscribe((todos) => {
      this.storage.save(todos);
    });
  }

  private loadTodos() {
    const todos = this.storage.load();
    if (todos !== undefined && todos.length > 0) {
      this.todoList.todos.setState(todos);
    } else {
      this.todoList.todos.setState(defaultTodos);
    }
  }
}
