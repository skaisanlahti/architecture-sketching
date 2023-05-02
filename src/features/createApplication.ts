import { StorageService } from "../infrastructure/StorageService";
import { PresentableApplication } from "./PresentableApplication";
import { CounterPresenter } from "./counter/CounterPresenter";
import { CounterStateHandler } from "./counter/CounterStateHandler";
import { CounterStorageHandler } from "./counter/CounterStorageHandler";
import { RxCounter } from "./counter/RxCounter";
import { RxTodoForm } from "./todo/RxTodoForm";
import { RxTodoList } from "./todo/RxTodoList";
import { TodoFormPresenter } from "./todo/TodoFormPresenter";
import { TodoFormStateHandler } from "./todo/TodoFormStateHandler";
import { TodoItem } from "./todo/TodoItem";
import { TodoListPresenter } from "./todo/TodoListPresenter";
import { TodoListStateHandler } from "./todo/TodoListStateHandler";
import { TodoListStorageHandler } from "./todo/TodoListStorageHandler";

export function createApplication() {
  // infrastructure
  const countStorage = new StorageService<number>("count");
  const todoStorage = new StorageService<TodoItem[]>("todos");

  // observables
  const counter = new RxCounter();
  const todoList = new RxTodoList();
  const todoForm = new RxTodoForm();

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
