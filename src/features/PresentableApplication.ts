import { PresentableCounter } from "./counter/interfaces/PresentableCounter";
import { PresentableTodoForm } from "./todo/interfaces/PresentableTodoForm";
import { PresentableTodoList } from "./todo/interfaces/PresentableTodoList";

export interface PresentableApplication {
  todoList: PresentableTodoList;
  todoForm: PresentableTodoForm;
  counter: PresentableCounter;
}
