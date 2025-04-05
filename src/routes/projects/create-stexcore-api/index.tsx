import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
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