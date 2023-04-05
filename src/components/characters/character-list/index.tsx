import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { Character } from "..";
import { CharacterCard } from "../character-card";

import styles from "./styles.css?inline";

export const CharacterList = component$<{
  characters: Character[];
}>(({ characters }) => {
  if (!characters) return null;

  useStylesScoped$(styles);

  return (
    <section class="characters-container">
      {characters.map((character) => (
        <CharacterCard key={character.id} {...character} />
      ))}
    </section>
  );
});
