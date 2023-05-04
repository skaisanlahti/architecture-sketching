import { Subscription } from "rxjs";
import { getMethodNamesWithPrefix } from "./getMethodNamesWithPrefix";

export interface Startable {
  start(): void;
}
export interface Stoppable {
  stop(): void;
}

export type Controllable = Startable & Stoppable;

export abstract class SubscriptionHandler implements Controllable {
  private readonly handlerMethodPrefix;
  private subscription = new Subscription();

  public constructor(handlerMethodPrefix = "handle") {
    this.handlerMethodPrefix = handlerMethodPrefix;
  }

  public start() {
    if (this.subscription.closed) {
      this.subscription = new Subscription();
    }
    const handlers = getMethodNamesWithPrefix(this, this.handlerMethodPrefix);
    for (const handler of handlers) {
      const instance = this as any; // eslint-disable-line
      const unsubscribe = instance[handler]();
      this.subscription.add(unsubscribe);
    }
  }

  public stop() {
    this.subscription.unsubscribe();
  }
}
