import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { CounterWithSignal } from '~/components/counter-with-signal';
import { CounterWithStore } from '~/components/counter-with-store';

export default component$(() => {
  console.log('Rendered - Index - State');

  return (
    <>
      <h2>State - Signal/Store</h2>
      <CounterWithSignal />
      <br />
      <CounterWithStore />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Builder Prototype - Signal/Store',
  meta: [
    {
      name: 'description',
      content: 'Qwik Builder Prototype description',
    },
  ],
};
