import { component$, useSignal, useStylesScoped$, $ } from "@builder.io/qwik";
import { IndependentComp } from "../independent-comp";
import styles from './styles.css?inline';

export const CounterWithSignal = component$(() => {
  // https://qwik.builder.io/docs/components/styles/#usestylesscoped
  useStylesScoped$(styles);

  // https://qwik.builder.io/docs/components/state/#usesignal
  const count = useSignal(0);

  // https://qwik.builder.io/docs/components/events/#useevent
  const incrementCount = $(() => count.value++);

  console.log(`Rendered - CounterWithSignal - ${count.value}`);

  return (
    <>
      Count: {count.value}
      <button onClick$={incrementCount}>Increment</button>

      {/*
        https://qwik.builder.io/docs/components/rendering/#rendering-child-components
        Não re-renderiza pois não há dependências de estado
      */}
      <IndependentComp />
    </>
  );
});
