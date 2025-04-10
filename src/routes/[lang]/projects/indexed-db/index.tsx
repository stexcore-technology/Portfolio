import { component$ } from "@builder.io/qwik";
import { DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import Project from "~/components/project/project";
import useLang from "~/hooks/useLang";
import LangProvider from "~/providers/lang.provider";
import visitsService from "~/services/visits.service";

const useContent = routeLoader$(async (event) => {
    const response = await fetch(new URL("/contents/" + event.params.lang + "/indexed-db.html", event.url));
    const html = await response.text();

    const visits = await visitsService.incrementVisit("indexed-db");
    const views = visits.count_visit;

    return { html, views };
});

const PageComponent = component$(() => {
    // HTML and views
    const info = useContent();
    // Lang
    const lang = useLang(["project:indexed-db"]);
    
    return (
        <Project
            title={lang.value["project:indexed-db"]?.title || ""}
            description={lang.value["project:indexed-db"]?.description || ""}
            html={info.value.html}
            views={info.value.views}
        ></Project>
    );
});

export default component$(() => {
  return (
    <LangProvider segments={["project:indexed-db"]}>
      <PageComponent></PageComponent>
    </LangProvider>
  );
});

export const head: DocumentHead = {
  title: "Indexed DB - Portfolio Stexcore",
  meta: [
    {
      name: "description",
      content: "A JavaScript library offering a database-like structure for managing browser data. Built on IndexedDB, it simplifies CRUD operations and conditional queries with table-like interactions, strong typing, and data validation for seamless client-side data management.",
    },
    {
      name: "author",
      content: "stexcore"
    },
    {
      name: "keywords",
      content: "portfolio, developments, project, typescript, javascript, frontend, indexed-db, database, library"
    }
  ],
};