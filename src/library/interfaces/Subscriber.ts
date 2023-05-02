export type Subscriber<TValue> = (value: TValue) => void;
export type Unsubscriber = () => void;
