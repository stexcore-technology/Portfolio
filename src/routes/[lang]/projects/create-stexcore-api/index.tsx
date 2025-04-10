import { component$ } from "@builder.io/qwik";
import { DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import Project from "~/components/project/project";
import useLang from "~/hooks/useLang";
import LangProvider from "~/providers/lang.provider";
import visitsService from "~/services/visits.service";

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

export const head: DocumentHead = {
  title: "Create Stexcore Api CLI - Portfolio Stexcore",
  meta: [
    {
      name: "description",
      content: "A powerful CLI tool to simplify the initialization of API projects in Node.js. Utilizing Express and a scalable project structure, it enables developers to efficiently kick-start robust backend setups.",
    },
    {
      name: "author",
      content: "stexcore"
    },
    {
      name: "keywords",
      content: "portfolio, developments, project, typescript, backend, api, cli, library"
    }
  ],
};