import { component$, useTask$, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { server$ } from "@builder.io/qwik-city";
import { CounterWithSignal } from "~/components/counter-with-signal";
import { delay } from "~/core/utils/delay";

export default component$(() => {
  // Async
  // Before initial rendering
  // Sequencial - useTask$ 1, useTask$ 2, useTask$ 3
  // Can Track and Cleanup
  useTask$(async () => {
    console.log("Server/Client-side effect - Blocking");

    server$(() => {
      console.log("Server-side only effect - Blocking");
    })();

    await delay(5000);
  });

  // Async
  // After initial rendering
  // Can Track and Cleanup
  useVisibleTask$(async () => {
    console.log("Client-side only effect - Non-blocking");
    await delay(3000);
  });

  return (
    <>
      <h2>Effects</h2>
      <CounterWithSignal />
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik Builder Prototype - Effects",
  meta: [
    {
      name: "description",
      content: "Qwik Builder Prototype description",
    },
  ],
};
