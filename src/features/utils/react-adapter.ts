import { createContext, useContext, useSyncExternalStore } from "react";
import { ObservableState } from "../../library/interfaces/ObservableState";
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

export const [useViewContext, ViewContextProvider, ViewContextConsumer] =
  createContextProvider<PresentableApplication>();

function subscribe<TState>(state: ObservableState<TState>) {
  return (onStoreChange: () => void) => state.subscribe(onStoreChange);
}

function getSnapshot<TState>(state: ObservableState<TState>) {
  return () => state.getState();
}

export function useObservableState<TValue>(state: ObservableState<TValue>) {
  return useSyncExternalStore(subscribe(state), getSnapshot(state));
}
