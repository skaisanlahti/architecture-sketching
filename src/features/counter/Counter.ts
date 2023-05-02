import { Event } from "../../library/Event";
import { State } from "../../library/State";
import { ObservableCounter } from "./interfaces/ObservableCounter";

export class Counter implements ObservableCounter {
  public readonly count = new State<number>(0);
  public readonly increment = new Event<number>();
  public readonly decrement = new Event<number>();
  public readonly multiply = new Event<number>();
  public readonly reset = new Event<void>();
}
