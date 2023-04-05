import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <h2>
      Effects
    </h2>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Builder Prototype - Effects',
  meta: [
    {
      name: 'description',
      content: 'Qwik Builder Prototype description',
    },
  ],
};
