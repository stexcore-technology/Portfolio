import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import GalaticSpace from "~/components/galatic-space/galatic-space";
import Present from "~/components/present/present";
import styles from "./index.module.css";
import useLang from "~/hooks/useLang";
import LangProvider from "~/providers/lang.provider";
import LangButton from "~/components/lang-button/lang-button";
import langService from "~/services/lang.service";
import type { ILangType } from "~/types/lang";

const PageComponent = component$(() => {
  // Load lang
  const lang = useLang(["home", "navbar:home"]);

  return (
    <main class={styles["home"]}>
      <ul class={[styles["lang-content"], "smooth"]}>
        <LangButton></LangButton>
      </ul>
      <GalaticSpace class="smooth">
        <div class={styles["home-content"]}>
          <nav class={[styles["nav"], "smooth"]}>
            <ul>
              <li>
                <Link class={styles["link-nav"]} href={`/${lang.value.lang_type}/projects`} title={lang.value["navbar:home"]?.navbar.projects.tooltip}>
                  {lang.value["navbar:home"]?.navbar.projects.label}
                </Link>
              </li>
              <li>
                <Link class={styles["link-nav"]} href={`/${lang.value.lang_type}/contact`} title={lang.value["navbar:home"]?.navbar.contact.tooltip}>
                  {lang.value["navbar:home"]?.navbar.contact.label}
                </Link>
              </li>
            </ul>
          </nav>
          <Present label={lang.value["home"]?.header || ""}></Present>
          <p class={[styles["typegraphy"], "smooth"]}>
            {lang.value["home"]?.phrase}
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

/**
 * Head Page
 * @param ctx Context
 */
export const head: DocumentHead = (ctx) => {
  // Get lang
  const segment = langService.getLang(ctx.params.lang as ILangType, "head:home");

  return {
    title: segment.title,
    meta: [
      { name: "description", content: segment.description },
      { name: "author", content: segment.author },
      { name: "keywords", content: segment.keywords }
    ],
  }
};
