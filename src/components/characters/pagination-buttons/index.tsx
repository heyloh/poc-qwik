import type { QRL} from "@builder.io/qwik";
import { useStylesScoped$ } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

import styles from './styles.css?inline';

export const PaginationButtons = component$<{
  onNext: QRL<() => void>;
  onPrev: QRL<() => void>;
}>(({ onNext, onPrev }) => {
  useStylesScoped$(styles);
  return (
    <div class="pagination-buttons">
      <button onClick$={onPrev}>Anterior</button>
      <button onClick$={onNext}>Próxima</button>
    </div>
  );
});
