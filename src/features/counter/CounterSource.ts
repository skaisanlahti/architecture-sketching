import { BehaviorSubject, Subject } from "rxjs";

export interface ObservableCounter {
  count: BehaviorSubject<number>;
  increment: Subject<number>;
  decrement: Subject<number>;
  multiply: Subject<number>;
  reset: Subject<void>;
}

export class CounterSource implements ObservableCounter {
  public readonly count = new BehaviorSubject<number>(0);
  public readonly increment = new Subject<number>();
  public readonly decrement = new Subject<number>();
  public readonly multiply = new Subject<number>();
  public readonly reset = new Subject<void>();
}
