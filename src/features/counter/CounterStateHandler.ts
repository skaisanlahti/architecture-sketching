import { SubscriptionHandler } from "../../library/SubscriptionHandler";
import { ObservableCounter } from "./interfaces/ObservableCounter";

export class CounterStateHandler extends SubscriptionHandler {
  public constructor(private readonly counter: ObservableCounter) {
    super();
  }

  protected handleIncrementCount() {
    return this.counter.increment.subscribe((amount) => {
      this.counter.count.setState(this.counter.count.getState() + amount);
    });
  }

  protected handleDecrementCount() {
    return this.counter.decrement.subscribe((amount) => {
      this.counter.count.setState(this.counter.count.getState() - amount);
    });
  }

  protected handleMultiplyCount() {
    return this.counter.multiply.subscribe((amount) => {
      this.counter.count.setState(this.counter.count.getState() * amount);
    });
  }

  protected handleResetCount() {
    return this.counter.reset.subscribe(() => {
      this.counter.count.setState(0);
    });
  }
}
