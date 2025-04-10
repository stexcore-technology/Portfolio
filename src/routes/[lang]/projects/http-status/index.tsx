import { component$ } from "@builder.io/qwik";
import { DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import Project from "~/components/project/project";
import useLang from "~/hooks/useLang";
import LangProvider from "~/providers/lang.provider";
import langService from "~/services/lang.service";
import visitsService from "~/services/visits.service";
import { ILangType } from "~/types/lang";

const useContent = routeLoader$(async (event) => {
    const response = await fetch(new URL("/contents/" + event.params.lang + "/http-status.html", event.url));
    const html = await response.text();

    const visits = await visitsService.incrementVisit("http-status");
    const views = visits.count_visit;

    return { html, views };
});

const PageComponent = component$(() => {
    // HTML and views
    const info = useContent();
    const lang = useLang(["project:http-status"]);
    
    return (
        <Project
            title={lang.value["project:http-status"]?.title || ""}
            description={lang.value["project:http-status"]?.description || ""}
            html={info.value.html}
            views={info.value.views}
        ></Project>
    );
});

export default component$(() => {
  return (
    <LangProvider segments={["project:http-status"]}>
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
  const segment = langService.getLang(ctx.params.lang as ILangType, "head:project:http-status");

  return {
    title: segment.title,
    meta: [
      { name: "description", content: segment.description },
      { name: "author", content: segment.author },
      { name: "keywords", content: segment.keywords }
    ],
  }
};