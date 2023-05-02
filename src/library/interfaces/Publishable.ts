export interface Publishable<TValue> {
  publish(value: TValue): void;
}
