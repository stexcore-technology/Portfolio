import { component$ } from "@builder.io/qwik";
import { DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import Project from "~/components/project/project";
import useLang from "~/hooks/useLang";
import LangProvider from "~/providers/lang.provider";
import langService from "~/services/lang.service";
import visitsService from "~/services/visits.service";
import { ILangType } from "~/types/lang";

const useContent = routeLoader$(async (event) => {
    const response = await fetch(new URL("/contents/" + event.params.lang + "/create-stexcore-api.html", event.url));
    const html = await response.text();

    const visits = await visitsService.incrementVisit("create-stexcore-api");
    const views = visits.count_visit;

    return { html, views };
});

const PageComponent = component$(() => {
    // HTML and views
    const info = useContent();
    const lang = useLang(["project:create-stexcore-api"]);
    
    return (
        <Project
            title={lang.value["project:create-stexcore-api"]?.title || ""}
            description={lang.value["project:create-stexcore-api"]?.description || ""}
            html={info.value.html}
            views={info.value.views}
        ></Project>
    );
});

export default component$(() => {
  return (
    <LangProvider segments={["project:create-stexcore-api"]}>
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
  const segment = langService.getLang(ctx.params.lang as ILangType, "head:project:create-stexcore-api");

  return {
    title: segment.title,
    meta: [
      { name: "description", content: segment.description },
      { name: "author", content: segment.author },
      { name: "keywords", content: segment.keywords }
    ],
  }
};