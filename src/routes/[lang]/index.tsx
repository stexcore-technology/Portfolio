import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import GalaticSpace from "~/components/galatic-space/galatic-space";
import Present from "~/components/present/present";
import styles from "./index.module.css";
import useLang from "~/hooks/useLang";
import LangProvider from "~/providers/lang.provider";

const PageComponent = component$(() => {
  // Load lang
  const lang = useLang(["home", "navbar:home"]);

  return (
    <main class={styles["home"]}>
      <GalaticSpace class="smooth">
        <div class={styles["home-content"]}>
          <nav class={[styles["nav"], "smooth"]}>
            <ul>
              <li>
                <Link class={styles["link-nav"]} href="/projects" title={lang["navbar:home"]?.navbar.projects.tooltip}>
                  {lang["navbar:home"]?.navbar.projects.label}
                </Link>
              </li>
              <li>
                <Link class={styles["link-nav"]} href="/contact" title={lang["navbar:home"]?.navbar.contact.tooltip}>
                  {lang["navbar:home"]?.navbar.contact.label}
                </Link>
              </li>
            </ul>
          </nav>
          <Present label={lang["home"]?.header || ""}></Present>
          <p class={[styles["typegraphy"], "smooth"]}>
            {lang["home"]?.phrase}
          </p>
        </div>
      </GalaticSpace>
    </main>
  );
});

export default component$(() => {
  return (
    <LangProvider segments={["home", "navbar:home"]}>
      <PageComponent></PageComponent>
    </LangProvider>
  )
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
