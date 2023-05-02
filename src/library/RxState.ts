import { BehaviorSubject } from "rxjs";
import { ObservableState } from "./interfaces/ObservableState";
import { Subscriber } from "./interfaces/Subscriber";
import { Updater } from "./interfaces/Updater";

export class RxState<TState> implements ObservableState<TState> {
  private readonly behaviorSubject;

  public constructor(initialState: TState) {
    this.behaviorSubject = new BehaviorSubject(initialState);
  }

  public getState() {
    return this.behaviorSubject.value;
  }

  public setState(value: TState) {
    this.behaviorSubject.next(value);
  }

  public updateState(updater: Updater<TState>) {
    this.behaviorSubject.next(updater(this.behaviorSubject.value));
  }

  public subscribe(subscriber: Subscriber<TState>) {
    const subscription = this.behaviorSubject.subscribe(subscriber);
    return () => {
      subscription.unsubscribe();
    };
  }
}
