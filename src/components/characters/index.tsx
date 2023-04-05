import {
  $,
  Resource,
  component$,
  useResource$,
  useSignal,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";
import { HttpClient } from "~/core/services/http-client";
import { CharacterList } from "./character-list";
import { PaginationButtons } from "./pagination-buttons";
import { Loading } from "../loading";
import { delay } from "~/core/utils/delay";

type Origin = {
  name: string;
};

type Location = {
  name: string;
};

export type Character = {
  id: number;
  name: string;
  species: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  url: string;
  created: string;
};

export type CharactersResource = {
  characters: Character[];
  next: string;
  prev: string;
};

const DEFAULT_PAGE = "https://rickandmortyapi.com/api/character";

export const Characters = component$(() => {
  useStylesScoped$(`
    .container {
      width: 100%;
    }
  `);
  const page = useSignal(DEFAULT_PAGE);
  const pagination = useStore({ next: DEFAULT_PAGE, prev: DEFAULT_PAGE });

  const charactersResource = useResource$<CharactersResource>(
    async ({ track, cleanup }) => {
      track(page);

      const controller = new AbortController();
      cleanup(() => controller.abort());

      const response = await HttpClient.get(page.value, {
        signal: controller.signal,
      });

      await delay(2000);

      return {
        characters: response.data.results,
        next: response.data.info.next,
        prev: response.data.info.prev,
      } as CharactersResource;
    }
  );

  const nextPage = $(() => {
    page.value = pagination.next;
  });

  const prevPage = $(() => {
    page.value = pagination.prev;
  });

  return (
    <section class="container">
      <Resource
        value={charactersResource}
        onPending={() => <Loading />}
        onResolved={(resource) => {
          pagination.next = resource.next ?? page.value;
          pagination.prev = resource.prev ?? DEFAULT_PAGE;
          return <CharacterList {...resource} />;
        }}
      />
      <PaginationButtons onNext={nextPage} onPrev={prevPage} />
    </section>
  );
});
