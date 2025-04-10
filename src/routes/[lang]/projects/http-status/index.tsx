import { component$ } from "@builder.io/qwik";
import { DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import Project from "~/components/project/project";
import useLang from "~/hooks/useLang";
import LangProvider from "~/providers/lang.provider";
import visitsService from "~/services/visits.service";

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

export const head: DocumentHead = {
  title: "Http Status - Portfolio Stexcore",
  meta: [
    {
      name: "description",
      content: "A versatile collection of HTTP status codes designed for seamless use in any HTTP framework. Simplifies handling HTTP responses and errors with a user-friendly interface, fully compatible with TypeScript and various frameworks.",
    },
    {
      name: "author",
      content: "stexcore"
    },
    {
      name: "keywords",
      content: "portfolio, developments, project, typescript, api, http, status, library"
    }
  ],
};