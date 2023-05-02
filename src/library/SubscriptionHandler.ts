import { getMethodNamesWithPrefix } from "../features/utils/getMethodNamesWithPrefix";
import { Controllable } from "./interfaces/Controllable";
import { Unsubscriber } from "./interfaces/Subscriber";

export abstract class SubscriptionHandler implements Controllable {
  private readonly unsubscribers: Unsubscriber[] = [];
  private readonly handlerMethodPrefix;

  public constructor(handlerMethodPrefix = "handle") {
    this.handlerMethodPrefix = handlerMethodPrefix;
  }

  public start() {
    const handlers = getMethodNamesWithPrefix(this, this.handlerMethodPrefix);
    for (const handler of handlers) {
      const instance = this as any; // eslint-disable-line
      const unsubscribe = instance[handler]();
      this.unsubscribers.push(unsubscribe);
    }
  }

  public stop() {
    for (const unsubscribe of this.unsubscribers) {
      unsubscribe();
    }
    this.unsubscribers.length = 0;
  }
}
