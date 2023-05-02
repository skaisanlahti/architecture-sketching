import { ObservableCounter } from "./interfaces/ObservableCounter";
import { PresentableCounter } from "./interfaces/PresentableCounter";

export class CounterPresenter implements PresentableCounter {
  public readonly count;

  public constructor(private counter: ObservableCounter) {
    this.count = counter.count;
  }

  public readonly increment = (amount: number) => {
    this.counter.increment.publish(amount);
  };

  public readonly decrement = (amount: number) => {
    this.counter.decrement.publish(amount);
  };

  public readonly multiply = (amount: number) => {
    this.counter.multiply.publish(amount);
  };

  public readonly reset = () => {
    this.counter.reset.publish();
  };
}
