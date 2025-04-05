import { component$ } from "@builder.io/qwik";
import { DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import Project from "~/components/project/project";
import visitsService from "~/services/visits.service";

const useContent = routeLoader$(async (event) => {
    const response = await fetch(new URL("/contents/create-stexcore-api.html", event.url));
    const data = await response.text();

    await visitsService.incrementVisit("create-stexcore-api");
    
    return data;
});

export default component$(() => {
    // HTML
    const html = useContent();
    
    return (
        <Project
            title="create-stexcore-api"
            description="A powerful CLI tool designed to streamline the initialization of API projects in Node.js."
            html={html.value}
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