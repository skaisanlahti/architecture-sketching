import { Observable } from "./Observable";
import { Publishable } from "./Publishable";

export type ObservableEvent<TValue> = Publishable<TValue> & Observable<TValue>;
