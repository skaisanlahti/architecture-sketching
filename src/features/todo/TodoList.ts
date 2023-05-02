import { Event } from "../../library/Event";
import { State } from "../../library/State";
import { ObservableTodoList } from "./interfaces/ObservableTodoList";
import { TodoItem } from "./TodoItem";

export class TodoList implements ObservableTodoList {
  public readonly todos = new State<TodoItem[]>([]);
  public readonly addTodo = new Event<TodoItem>();
  public readonly removeTodo = new Event<string>();
  public readonly toggleDone = new Event<string>();
}
