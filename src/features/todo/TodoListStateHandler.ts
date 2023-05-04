import { SubscriptionHandler } from "../utils/SubscriptionHandler";
import { TodoItem } from "./TodoItem";
import { ObservableTodoList } from "./TodoListSource";

export class TodoListStateHandler extends SubscriptionHandler {
  public constructor(private readonly todoList: ObservableTodoList) {
    super();
  }

  protected handleAddTodo() {
    return this.todoList.addTodo.subscribe((newTodo) => {
      const todos = this.todoList.todos.getValue();
      this.todoList.todos.next([...todos, newTodo]);
    });
  }

  protected handleRemoveTodo() {
    return this.todoList.removeTodo.subscribe((id) => {
      const todos = this.todoList.todos.getValue();
      this.todoList.todos.next(todos.filter((t) => t.id !== id));
    });
  }

  protected handleToggleDone() {
    const toggle = (id: string) => (todo: TodoItem) => {
      return todo.id === id ? { ...todo, done: !todo.done } : todo;
    };
    return this.todoList.toggleDone.subscribe((id) => {
      const todos = this.todoList.todos.getValue();
      this.todoList.todos.next(todos.map(toggle(id)));
    });
  }
}
