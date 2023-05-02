import { SubscriptionHandler } from "../../library/SubscriptionHandler";
import { CountStorage } from "./interfaces/CountStorage";
import { ObservableCounter } from "./interfaces/ObservableCounter";

export class CounterStorageHandler extends SubscriptionHandler {
  public constructor(
    private readonly counter: ObservableCounter,
    private readonly storage: CountStorage
  ) {
    super();
    this.loadCount();
  }

  private loadCount() {
    const savedCount = this.storage.load();
    if (savedCount !== undefined) this.counter.count.setState(savedCount);
  }

  protected handleSaveCount() {
    return this.counter.count.subscribe((count) => {
      this.storage.save(count);
    });
  }
}
