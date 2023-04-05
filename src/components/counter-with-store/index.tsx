import { component$, useStylesScoped$, $, useStore } from "@builder.io/qwik";
import styles from "./styles.css?inline";

export const CounterWithStore = component$(() => {
  // https://qwik.builder.io/docs/components/styles/#usestylesscoped
  useStylesScoped$(styles);

  // https://qwik.builder.io/docs/components/state/#usestore
  const store = useStore({
    count: {
      value: {
        number: 0,
      },
    },
  });

  // https://qwik.builder.io/docs/components/events/#useevent
  const incrementCount = $(() => {
    store.count = { value: { number: store.count.value.number + 1 } };
  });

  // https://qwik.builder.io/docs/components/events/#useevent
  const incrementCount2 = $(() => {
    store.count.value.number = store.count.value.number + 1;
  });

  return (
    <>
      Count: {store.count.value.number}
      <button onClick$={incrementCount}>Increment</button>
      <button onClick$={incrementCount2}>Increment2</button>
    </>
  );
});
