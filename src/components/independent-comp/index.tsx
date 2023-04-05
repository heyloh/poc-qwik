import { $, component$, useSignal } from "@builder.io/qwik";

export const IndependentComp = component$(() => {
  const aLetters = useSignal('a');
  const moreALetters = $(() => {
    aLetters.value = `${aLetters.value}a`
  });

  console.log(`Rendered - IndependentComp`);

  return (
    <>
      <button onClick$={moreALetters}>Toggle</button>
      <p>{aLetters.value}</p>
    </>
  );
});
