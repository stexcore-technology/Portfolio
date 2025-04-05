import { component$, useStylesScoped$ } from "@builder.io/qwik";
import IconButton from "~/components/icon-button/icon-button";
import CardProject from "~/components/card-project/card-project";
import Navbar, { NavItem } from "~/components/navbar/navbar";
import { BackIcon } from "~/icons/icons";
import { routeLoader$, useNavigate } from "@builder.io/qwik-city";
import MainContent from "~/components/main-content/main-content";
import Divider from "~/components/divider/divider";
import Header from "~/components/header/header";
import Box from "~/components/box/box";
import styles from "./index.css?inline";
import visitsService from "~/services/visits.service";

const useVisits = routeLoader$(async () => {
    const [
        indexedDB,
        httpStatus,
        apiEngine,
        createStexcoreApi
    ] = await Promise.all([
        visitsService.getVisit("indexed-db"),
        visitsService.getVisit("http-status"),
        visitsService.getVisit("api-engine"),
        visitsService.getVisit("create-stexcore-api"),
    ]);
    
    return {
        indexedDB: indexedDB?.count_visit ?? 0,
        httpStatus: httpStatus?.count_visit ?? 0,
        apiEngine: apiEngine?.count_visit ?? 0,
        createStexcoreApi: createStexcoreApi?.count_visit ?? 0
    };
});

export default component$(() => {
    // Load styles
    useStylesScoped$(styles);
    // Visits
    const visits = useVisits();
    // Load navigate
    const navigate = useNavigate();

    return (
        <>
            <Navbar>
                <IconButton q:slot="start" onClick$={() => navigate("..")}>
                    <BackIcon></BackIcon>
                </IconButton>
                <NavItem href="/projects">Projects</NavItem>
                <NavItem href="/contact">Contact</NavItem>
            </Navbar>
            <MainContent>
                <Header
                    title="Projects"
                    description="Some of the projects are from work and some are on my own time."
                ></Header>
                <Divider></Divider>
                <Box py={40}>
                    <div class="grid-container">
                        <CardProject
                            href="/projects/indexed-db"
                            title="@stexcore/indexed-db"
                            details="Simplifies client-side data management by providing a typed JavaScript library on top of IndexedDB. Allows CRUD operations and conditional queries with a database-like structure."
                            date="December 13, 2024"
                            views={visits.value.indexedDB}
                        ></CardProject>
                        <CardProject
                            href="/projects/http-status"
                            title="@stexcore/http-status"
                            details="A clean, TypeScript-compatible library of HTTP status codes for managing responses and errors in any HTTP framework."
                            date="April 1, 2025"
                            views={visits.value.httpStatus}
                        ></CardProject>
                        <CardProject
                            href="/projects/api-engine"
                            title="@stexcore/api-engine"
                            details="Express-powered API engine for modular and scalable backend development. Manage services, controllers, middlewares, and schemas dynamically."
                            date="April 1, 2025"
                            views={visits.value.apiEngine}
                        ></CardProject>
                        <CardProject
                            href="/projects/create-stexcore-api"
                            title="create-stexcore-api"
                            details="CLI tool for fast API project initialization in Node.js. Uses Express and a scalable structure for streamlined backend setup."
                            date="April 2, 2025"
                            views={visits.value.createStexcoreApi}
                        ></CardProject>
                    </div>
                </Box>
            </MainContent>
        </>
    )
});