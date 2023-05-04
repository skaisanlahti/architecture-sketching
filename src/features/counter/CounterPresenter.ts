import { BehaviorSubject } from "rxjs";
import { ObservableCounter } from "./CounterSource";

export interface PresentableCounter {
  count: BehaviorSubject<number>;
  increment: (amount: number) => void;
  decrement: (amount: number) => void;
  multiply: (amount: number) => void;
  reset: () => void;
}

export class CounterPresenter implements PresentableCounter {
  public readonly count;

  public constructor(private counter: ObservableCounter) {
    this.count = counter.count;
  }

  public readonly increment = (amount: number) => {
    this.counter.increment.next(amount);
  };

  public readonly decrement = (amount: number) => {
    this.counter.decrement.next(amount);
  };

  public readonly multiply = (amount: number) => {
    this.counter.multiply.next(amount);
  };

  public readonly reset = () => {
    this.counter.reset.next();
  };
}
