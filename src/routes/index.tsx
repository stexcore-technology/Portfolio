import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import GalaticSpace from "~/components/galatic-space/galatic-space";
import Present from "~/components/present/present";
import styles from "./index.css?inline"

export default component$(() => {
  // Load styles
  useStylesScoped$(styles);
  
  return (
    <div class="home">
      <GalaticSpace>
        <div class="home-content">
          <Present></Present>
        </div>
      </GalaticSpace>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
