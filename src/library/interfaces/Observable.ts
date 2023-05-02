import { Unsubscriber } from "./CleanupFunction";
import { Subscriber } from "./Subscriber";

export interface Observable<TValue> {
  subscribe(subscriber: Subscriber<TValue>): Unsubscriber;
}
