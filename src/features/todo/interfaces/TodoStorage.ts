import { StorageService } from "../../../infrastructure/StorageService";
import { TodoItem } from "../TodoItem";

export type TodoStorage = StorageService<TodoItem[]>;
