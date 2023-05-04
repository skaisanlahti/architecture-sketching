import { PresentableCounter } from "./counter/CounterPresenter";
import { PresentableTodoForm } from "./todo/TodoFormPresenter";
import { PresentableTodoList } from "./todo/TodoListPresenter";

export interface PresentableApplication {
  todoList: PresentableTodoList;
  todoForm: PresentableTodoForm;
  counter: PresentableCounter;
}
