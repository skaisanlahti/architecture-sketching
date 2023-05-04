import { createContext, useContext, useSyncExternalStore } from "react";
import { BehaviorSubject } from "rxjs";
import { PresentableApplication } from "../PresentableApplication";

function createContextProvider<TContext>() {
  const context = createContext<TContext | undefined>(undefined);

  function useContextValue() {
    const value = useContext(context);

    if (!value) {
      throw new Error(
        "Provider not found. useContextValue must be used within a valid context provider."
      );
    }

    return value;
  }

  return [useContextValue, context.Provider, context.Consumer] as const;
}

export const [useAppContext, ViewContextProvider, ViewContextConsumer] =
  createContextProvider<PresentableApplication>();

function subscribe<TState>(state: BehaviorSubject<TState>) {
  return (onStoreChange: () => void) => {
    const subscription = state.subscribe(onStoreChange);
    return () => subscription.unsubscribe();
  };
}

function getSnapshot<TState>(state: BehaviorSubject<TState>) {
  return () => state.getValue();
}

export function useBehavior<TState>(state: BehaviorSubject<TState>) {
  return useSyncExternalStore(subscribe(state), getSnapshot(state));
}
