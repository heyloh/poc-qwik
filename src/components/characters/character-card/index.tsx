import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { Character } from "..";

import styles from "./styles.css?inline";

const CharacterImage = component$<{ image: string; name: string }>(
  ({ image, name }) => {
    return (
      <img loading="lazy" src={image} alt={name} width={200} height={200} />
    );
  }
);

export const CharacterCard = component$<Character>(
  ({ image, name, species }) => {
    useStylesScoped$(styles);
    return (
      <div class="character">
        <CharacterImage image={image} name={name} />
        <h2>{name}</h2>
        <p>Species: {species}</p>
      </div>
    );
  }
);
