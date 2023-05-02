import { ObservableState } from "./interfaces/ObservableState";
import { Subscriber } from "./interfaces/Subscriber";
import { Updater } from "./interfaces/Updater";

export class State<TState> implements ObservableState<TState> {
  private readonly subscribers = new Map<number, Subscriber<TState>>();
  private subscriberId = 0;
  private currentState;

  public constructor(initialState: TState) {
    this.currentState = initialState;
  }

  public getState() {
    return this.currentState;
  }

  public setState(value: TState) {
    this.currentState = value;
    this.notifySubscribers();
  }

  public updateState(updater: Updater<TState>) {
    this.currentState = updater(this.currentState);
    this.notifySubscribers();
  }

  public subscribe(subscriber: Subscriber<TState>) {
    const id = this.subscriberId++;
    subscriber(this.currentState);
    this.subscribers.set(id, subscriber);
    return () => {
      this.subscribers.delete(id);
    };
  }

  private notifySubscribers() {
    for (const subscriber of this.subscribers.values()) {
      subscriber(this.currentState);
    }
  }
}
