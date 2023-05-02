import { ObservableState } from "../../../library/interfaces/ObservableState";

export interface PresentableCounter {
  count: ObservableState<number>;
  increment: (amount: number) => void;
  decrement: (amount: number) => void;
  multiply: (amount: number) => void;
  reset: () => void;
}
