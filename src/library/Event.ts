import { ObservableEvent } from "./interfaces/ObservableEvent";
import { Subscriber } from "./interfaces/Subscriber";

export class Event<TValue> implements ObservableEvent<TValue> {
  private readonly subscribers = new Map<number, Subscriber<TValue>>();
  private subscriberId = 0;

  public publish(value: TValue) {
    this.notifySubscribers(value);
  }

  public subscribe(subscriber: Subscriber<TValue>) {
    const id = this.subscriberId++;
    this.subscribers.set(id, subscriber);
    return () => {
      this.subscribers.delete(id);
    };
  }

  private notifySubscribers(value: TValue) {
    for (const subscriber of this.subscribers.values()) {
      subscriber(value);
    }
  }
}
