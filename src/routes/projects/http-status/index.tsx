import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import Project from "~/components/project/project";
import visitsService from "~/services/visits.service";

const useContent = routeLoader$(async (event) => {
    const response = await fetch(new URL("/contents/http-status.html", event.url));
    const data = await response.text();

    await visitsService.incrementVisit("http-status");
    
    return data;
});

export default component$(() => {
    // HTML
    const html = useContent();
    
    return (
        <Project
            title="http-status"
            description="A collection of HTTP status codes for general use in any HTTP framework."
            html={html.value}
        ></Project>
    );
});