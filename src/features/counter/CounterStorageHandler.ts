import { StorageService } from "../../infrastructure/StorageService";
import { SubscriptionHandler } from "../utils/SubscriptionHandler";
import { ObservableCounter } from "./CounterSource";

export type CountStorage = StorageService<number>;

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
    if (savedCount !== undefined) this.counter.count.next(savedCount);
  }

  protected handleSaveCount() {
    return this.counter.count.subscribe((count) => {
      this.storage.save(count);
    });
  }
}
