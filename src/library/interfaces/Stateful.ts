import { Updater } from "./Updater";

export interface Stateful<TState> {
  getState(): TState;
  setState(value: TState): void;
  updateState(updater: Updater<TState>): void;
}
