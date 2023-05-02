import { SubscriptionHandler } from "../../library/SubscriptionHandler";
import { ObservableTodoList } from "./interfaces/ObservableTodoList";
import { TodoItem } from "./TodoItem";

export class TodoListStateHandler extends SubscriptionHandler {
  public constructor(private readonly todoList: ObservableTodoList) {
    super();
  }

  protected handleAddTodo() {
    return this.todoList.addTodo.subscribe((newTodo) => {
      this.todoList.todos.updateState((todos) => [...todos, newTodo]);
    });
  }

  protected handleRemoveTodo() {
    return this.todoList.removeTodo.subscribe((id) => {
      this.todoList.todos.updateState((todos) =>
        todos.filter((t) => t.id !== id)
      );
    });
  }

  protected handleToggleDone() {
    const toggle = (id: string) => (todo: TodoItem) => {
      return todo.id === id ? { ...todo, done: !todo.done } : todo;
    };
    return this.todoList.toggleDone.subscribe((id) => {
      this.todoList.todos.updateState((todos) => todos.map(toggle(id)));
    });
  }
}
