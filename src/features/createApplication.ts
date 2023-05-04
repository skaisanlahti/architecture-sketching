import { StorageService } from "../infrastructure/StorageService";
import { PresentableApplication } from "./PresentableApplication";
import { CounterPresenter } from "./counter/CounterPresenter";
import { CounterSource } from "./counter/CounterSource";
import { CounterStateHandler } from "./counter/CounterStateHandler";
import { CounterStorageHandler } from "./counter/CounterStorageHandler";
import { TodoFormPresenter } from "./todo/TodoFormPresenter";
import { TodoFormSource } from "./todo/TodoFormSource";
import { TodoFormStateHandler } from "./todo/TodoFormStateHandler";
import { TodoItem } from "./todo/TodoItem";
import { TodoListPresenter } from "./todo/TodoListPresenter";
import { TodoListSource } from "./todo/TodoListSource";
import { TodoListStateHandler } from "./todo/TodoListStateHandler";
import { TodoListStorageHandler } from "./todo/TodoListStorageHandler";

export function createApplication() {
  // infrastructure
  const countStorage = new StorageService<number>("count");
  const todoStorage = new StorageService<TodoItem[]>("todos");

  // observables
  const counter = new CounterSource();
  const todoList = new TodoListSource();
  const todoForm = new TodoFormSource();

  // event handlers
  const counterStateHandler = new CounterStateHandler(counter);
  const counterStorageHandler = new CounterStorageHandler(
    counter,
    countStorage
  );

  const todoFormStateHandler = new TodoFormStateHandler(todoForm, todoList);
  const todoListStateHandler = new TodoListStateHandler(todoList);
  const todoListStorageHandler = new TodoListStorageHandler(
    todoList,
    todoStorage
  );

  // initialize
  counterStateHandler.start();
  counterStorageHandler.start();
  todoListStateHandler.start();
  todoListStorageHandler.start();
  todoFormStateHandler.start();

  // presenter
  const app: PresentableApplication = {
    counter: new CounterPresenter(counter),
    todoList: new TodoListPresenter(todoList),
    todoForm: new TodoFormPresenter(todoForm),
  };

  return app;
}
