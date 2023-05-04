import { StorageService } from "../../infrastructure/StorageService";
import { SubscriptionHandler } from "../utils/SubscriptionHandler";
import { TodoItem } from "./TodoItem";
import { ObservableTodoList } from "./TodoListSource";
import { defaultTodos } from "./data";

export type TodoStorage = StorageService<TodoItem[]>;

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
      this.todoList.todos.next(todos);
    } else {
      this.todoList.todos.next(defaultTodos);
    }
  }
}
