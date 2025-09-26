import { component$ } from "@builder.io/qwik";
import { DocumentHead, routeLoader$, z, zod$ } from "@builder.io/qwik-city";
import Project from "~/components/project/project";
import useLang from "~/hooks/useLang";
import LangProvider from "~/providers/lang.provider";
import langService from "~/services/lang.service";
import visitsService from "~/services/visits.service";
import { ILangType } from "~/types/lang";

const useContent = routeLoader$(async (event) => {
    const response = await fetch(new URL("/contents/" + event.params.lang + "/api-engine.html", event.url));
    const html = await response.text();

    const visits = await visitsService.incrementVisit("api-engine");
    const views = visits.count_visit;

    return { html, views };
});

const PageComponent = component$(() => {
    // HTML and Views
    const info = useContent();
    const lang = useLang(["project:api-engine"]);
    
    return (
        <Project
            title={lang.value["project:api-engine"]?.title || ""}
            description={lang.value["project:api-engine"]?.description || ""}
            html={info.value.html}
            views={info.value.views}
        ></Project>
    );
});

export default component$(() => {
  return (
    <LangProvider segments={["project:api-engine"]}>
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
  const segment = langService.getLang(ctx.params.lang as ILangType, "head:project:api-engine");

  return {
    title: segment.title,
    meta: [
      { name: "description", content: segment.description },
      { name: "author", content: segment.author },
      { name: "keywords", content: segment.keywords }
    ],
  }
};