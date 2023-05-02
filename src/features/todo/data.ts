import { createId } from "../utils/createId";
import { TodoItem } from "./TodoItem";

export const defaultTodos: TodoItem[] = [
  { id: createId(), task: "Do something", done: false },
  { id: createId(), task: "Do nothing", done: false },
  { id: createId(), task: "Do something wild", done: false },
];
