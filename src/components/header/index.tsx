import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./styles.css?inline";

const createScopedClass = (scopeId: string) => (className: string) => {
  return `${scopeId} ${className}`;
};

export const Header = component$(() => {
  const { scopeId } = useStylesScoped$(styles)
  const scopedClass = createScopedClass(scopeId);

  return (
    <header class="container">
      <ul class="nav-bar">
        <li class="nav-item">
          <Link class={scopedClass(`nav-item-link`)} href="/">
            State/Signal
          </Link>
        </li>
        <li class="nav-item">
          <Link class={scopedClass(`nav-item-link`)} href="/effects">
            Effects
          </Link>
        </li>
        <li class="nav-item">
          <Link
            class={scopedClass(`nav-item-link`)}
            href="/fetching-and-suspense"
          >
            Data Fetching and Suspense
          </Link>
        </li>
      </ul>
    </header>
  );
});
