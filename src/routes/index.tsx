import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import GalaticSpace from "~/components/galatic-space/galatic-space";
import Present from "~/components/present/present";
import styles from "./index.module.css";

export default component$(() => {
  
  return (
    <main class={styles["home"]}>
      <GalaticSpace class="smooth">
        <div class={styles["home-content"]}>
          <nav class={[styles["nav"], "smooth"]}>
            <ul>
              <li><Link class={styles["link-nav"]} href="/projects">Projects</Link></li>
              <li><Link class={styles["link-nav"]} href="/contact">Contact</Link></li>
            </ul>
          </nav>
          <Present></Present>
          <p class={[styles["typegraphy"], "smooth"]}>
            My goal when developing is not to have excessive dependencies.
          </p>
        </div>
      </GalaticSpace>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Portfolio Stexcore",
  meta: [
    {
      name: "description",
      content: "StexCore Portfolio A Qwik-powered portfolio showcasing all my projects, highlighting expertise and creativity in development.",
    },
    {
      name: "author",
      content: "stexcore"
    },
    {
      name: "keywords",
      content: "portfolio, developments, projects, typescript, html, css, qwik, backend, api, cli"
    }
  ],
};
