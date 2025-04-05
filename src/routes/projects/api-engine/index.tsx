import { component$ } from "@builder.io/qwik";
import { DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import Project from "~/components/project/project";
import visitsService from "~/services/visits.service";

const useContent = routeLoader$(async (event) => {
    const response = await fetch(new URL("/contents/api-engine.html", event.url));
    const data = await response.text();

    await visitsService.incrementVisit("api-engine");

    return data;
});

export default component$(() => {
    // HTML
    const html = useContent();
    
    return (
        <Project
            title="api-engine"
            description="Engine for rapidly developing APIs using Express under the hood."
            html={html.value}
        ></Project>
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