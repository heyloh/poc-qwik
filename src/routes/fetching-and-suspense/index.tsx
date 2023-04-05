import type { DocumentHead } from "@builder.io/qwik-city";
import { Characters } from "~/components/characters";

export default Characters;

export const head: DocumentHead = {
  title: "Qwik Builder Prototype - Data Fetching and Suspense",
  meta: [
    {
      name: "description",
      content: "Qwik Builder Prototype description",
    },
  ],
};
