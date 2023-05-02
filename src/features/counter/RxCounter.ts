import { RxEvent } from "../../library/RxEvent";
import { RxState } from "../../library/RxState";
import { ObservableCounter } from "./interfaces/ObservableCounter";

export class RxCounter implements ObservableCounter {
  public readonly count = new RxState<number>(0);
  public readonly increment = new RxEvent<number>();
  public readonly decrement = new RxEvent<number>();
  public readonly multiply = new RxEvent<number>();
  public readonly reset = new RxEvent<void>();
}
