import { Subject } from "rxjs";
import { ObservableEvent } from "./interfaces/ObservableEvent";
import { Subscriber } from "./interfaces/Subscriber";

export class RxEvent<TValue> implements ObservableEvent<TValue> {
  private readonly subject = new Subject<TValue>();

  public publish(value: TValue) {
    this.subject.next(value);
  }

  public subscribe(subscriber: Subscriber<TValue>) {
    const subscription = this.subject.subscribe(subscriber);
    return () => {
      subscription.unsubscribe();
    };
  }
}
