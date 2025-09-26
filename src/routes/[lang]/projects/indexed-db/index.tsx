import { component$ } from "@builder.io/qwik";
import { type DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import Project from "~/components/project/project";
import useLang from "~/hooks/useLang";
import LangProvider from "~/providers/lang.provider";
import langService from "~/services/lang.service";
import visitsService from "~/services/visits.service";
import type { ILangType } from "~/types/lang";

export const useContent = routeLoader$(async (event) => {
    const response = await fetch(new URL("/contents/" + event.params.lang + "/indexed-db.html", event.url));
    const html = await response.text();

    const visits = await visitsService.incrementVisit("indexed-db");
    const views = visits.count_visit;

    return { html, views };
});

const PageComponent = component$(() => {
    // HTML and views
    const info = useContent();
    // Lang
    const lang = useLang(["project:indexed-db"]);
    
    return (
        <Project
            title={lang.value["project:indexed-db"]?.title || ""}
            description={lang.value["project:indexed-db"]?.description || ""}
            html={info.value.html}
            views={info.value.views}
        ></Project>
    );
});

export default component$(() => {
  return (
    <LangProvider segments={["project:indexed-db"]}>
      <PageComponent></PageComponent>
    </LangProvider>
  );
});

/**
 * Head Page
 * @param ctx Context
 */
export const head: DocumentHead = (ctx) => {
  // Get lang
  const segment = langService.getLang(ctx.params.lang as ILangType, "head:project:indexed-db");

  return {
    title: segment.title,
    meta: [
      { name: "description", content: segment.description },
      { name: "author", content: segment.author },
      { name: "keywords", content: segment.keywords }
    ],
  }
};