import { ObservableEvent } from "../../../library/interfaces/ObservableEvent";
import { ObservableState } from "../../../library/interfaces/ObservableState";

export interface ObservableCounter {
  count: ObservableState<number>;
  increment: ObservableEvent<number>;
  decrement: ObservableEvent<number>;
  multiply: ObservableEvent<number>;
  reset: ObservableEvent<void>;
}
