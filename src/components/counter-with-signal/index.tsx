import { component$, useSignal, useStylesScoped$, $ } from "@builder.io/qwik";
import { IndependentComp } from "../independent-comp";
import styles from './styles.css?inline';

export const CounterWithSignal = component$(() => {
  useStylesScoped$(styles);

  const count = useSignal(0);
  const incrementCount = $(() => count.value++);

  console.log(`Rendered - CounterWithSignal - ${count.value}`);

  return (
    <>
      Count: {count.value}
      <button onClick$={incrementCount}>Increment</button>

      <IndependentComp />
    </>
  );
});
