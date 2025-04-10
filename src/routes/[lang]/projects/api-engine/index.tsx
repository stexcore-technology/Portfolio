import { component$ } from "@builder.io/qwik";
import { DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import Project from "~/components/project/project";
import useLang from "~/hooks/useLang";
import LangProvider from "~/providers/lang.provider";
import visitsService from "~/services/visits.service";

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

export const head: DocumentHead = {
  title: "Api Engine - Portfolio Stexcore",
  meta: [
    {
      name: "description",
      content: "Engine for rapidly developing APIs using Express. This library offers a modular and dynamic approach to managing services, controllers, middlewares, and validation schemas, empowering developers to create robust and scalable APIs effortlessly.",
    },
    {
      name: "author",
      content: "stexcore"
    },
    {
      name: "keywords",
      content: "portfolio, developments, project, typescript, backend, api, framework, library"
    }
  ],
};