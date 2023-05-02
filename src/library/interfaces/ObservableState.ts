import { Observable } from "./Observable";
import { Stateful } from "./Stateful";

export type ObservableState<TState> = Stateful<TState> & Observable<TState>;
