import { component$ } from "@builder.io/qwik";
import { DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import Project from "~/components/project/project";
import visitsService from "~/services/visits.service";

const useContent = routeLoader$(async (event) => {
    const response = await fetch(new URL("/contents/create-stexcore-api.html", event.url));
    const html = await response.text();

    const visits = await visitsService.incrementVisit("create-stexcore-api");
    const views = visits.count_visit;

    return { html, views };
});

export default component$(() => {
    // HTML and views
    const info = useContent();
    
    return (
        <Project
            title="create-stexcore-api"
            description="A powerful CLI tool designed to streamline the initialization of API projects in Node.js."
            html={info.value.html}
            views={info.value.views}
        ></Project>
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