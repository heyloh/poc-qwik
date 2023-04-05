import { component$, useStylesScoped$, $, useStore } from "@builder.io/qwik";
import styles from "./styles.css?inline";

export const CounterWithStore = component$(() => {
  useStylesScoped$(styles);

  const store = useStore({
    count: {
      value: {
        number: 0,
      },
    },
  });

  const incrementCount = $(() => {
    store.count = { value: { number: store.count.value.number + 1 } };
  });

  return (
    <>
      Count: {store.count.value.number}
      <button onClick$={incrementCount}>Increment</button>
    </>
  );
});
