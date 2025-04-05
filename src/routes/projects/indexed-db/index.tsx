import { component$ } from "@builder.io/qwik";
import { DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import Project from "~/components/project/project";
import visitsService from "~/services/visits.service";

const useContent = routeLoader$(async (event) => {
    const response = await fetch(new URL("/contents/indexed-db.html", event.url));
    const data = await response.text();

    await visitsService.incrementVisit("indexed-db");
    
    return data;
});

export default component$(() => {
    // HTML
    const html = useContent();
    
    return (
        <Project
            title="indexed-db"
            description="This JavaScript library simplifies browser data management by layering over IndexedDB for CRUD operations and queries."
            html={html.value}
        ></Project>
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