import { component$ } from "@builder.io/qwik";
import { DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import Project from "~/components/project/project";
import visitsService from "~/services/visits.service";

const useContent = routeLoader$(async (event) => {
    const response = await fetch(new URL("/contents/api-engine.html", event.url));
    const html = await response.text();

    const visits = await visitsService.incrementVisit("api-engine");
    const views = visits.count_visit;

    return { html, views };
});

export default component$(() => {
    // HTML and Views
    const info = useContent();
    
    return (
        <Project
            title="api-engine"
            description="Engine for rapidly developing APIs using Express under the hood."
            html={info.value.html}
            views={info.value.views}
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