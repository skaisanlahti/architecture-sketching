import { useAppContext, useBehavior } from "../utils/react-adapter";

export function Counter() {
  const ctx = useAppContext();
  const count = useBehavior(ctx.counter.count);

  return (
    <section className="counter">
      <p className="counter_count">{count}</p>
      <section className="counter_actions">
        <button
          className="counter_button"
          onClick={() => ctx.counter.increment(1)}
        >
          +
        </button>
        <button
          className="counter_button"
          onClick={() => ctx.counter.decrement(1)}
        >
          -
        </button>
        <button
          className="counter_button"
          onClick={() => ctx.counter.multiply(2)}
        >
          x2
        </button>
        <button className="counter_button" onClick={ctx.counter.reset}>
          reset
        </button>
      </section>
    </section>
  );
}
