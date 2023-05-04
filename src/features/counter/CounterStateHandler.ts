import { SubscriptionHandler } from "../utils/SubscriptionHandler";
import { ObservableCounter } from "./CounterSource";

export class CounterStateHandler extends SubscriptionHandler {
  public constructor(private readonly counter: ObservableCounter) {
    super();
  }

  protected handleIncrementCount() {
    return this.counter.increment.subscribe((amount) => {
      this.counter.count.next(this.counter.count.getValue() + amount);
    });
  }

  protected handleDecrementCount() {
    return this.counter.decrement.subscribe((amount) => {
      this.counter.count.next(this.counter.count.getValue() - amount);
    });
  }

  protected handleMultiplyCount() {
    return this.counter.multiply.subscribe((amount) => {
      this.counter.count.next(this.counter.count.getValue() * amount);
    });
  }

  protected handleResetCount() {
    return this.counter.reset.subscribe(() => {
      this.counter.count.next(0);
    });
  }
}
