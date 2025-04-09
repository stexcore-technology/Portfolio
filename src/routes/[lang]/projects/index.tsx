import { component$, useStylesScoped$ } from "@builder.io/qwik";
import IconButton from "~/components/icon-button/icon-button";
import CardProject from "~/components/card-project/card-project";
import Navbar, { NavItem } from "~/components/navbar/navbar";
import { BackIcon } from "~/icons/icons";
import { DocumentHead, routeLoader$, useNavigate } from "@builder.io/qwik-city";
import MainContent from "~/components/main-content/main-content";
import Divider from "~/components/divider/divider";
import Header from "~/components/header/header";
import Box from "~/components/box/box";
import styles from "./index.css?inline";
import visitsService from "~/services/visits.service";
import LangProvider from "~/providers/lang.provider";
import useLang from "~/hooks/useLang";
import LangButton from "~/components/lang-button/lang-button";

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

const PageComponent = component$(() => {
    const lang = useLang(["navbar:home", "projects"]);
    
    // Load styles
    useStylesScoped$(styles);
    // Visits
    const visits = useVisits();
    // Load navigate
    const navigate = useNavigate();

    return (
        <>
            <Navbar>
                <IconButton q:slot="start" onClick$={() => navigate("..")} title={lang.value["navbar:home"]?.navbar.back.tooltip}>
                    <BackIcon></BackIcon>
                </IconButton>
                <NavItem href={`/${lang.value.lang_type}/projects`} title={lang.value["navbar:home"]?.navbar.projects.tooltip}>
                    {lang.value["navbar:home"]?.navbar.projects.label}
                </NavItem>
                <NavItem href={`/${lang.value.lang_type}/contact`} title={lang.value["navbar:home"]?.navbar.contact.tooltip}>
                    {lang.value["navbar:home"]?.navbar.contact.label}
                </NavItem>
                <Box px={10}></Box>
                <LangButton></LangButton>
            </Navbar>
            <MainContent>
                <Header
                    title={lang.value.projects?.header.title || ""}
                    description={lang.value.projects?.header.description || ""}
                ></Header>
                <Divider></Divider>
                <Box py={40}>
                    <div class="grid-container">
                        <CardProject
                            href={`/${lang.value.lang_type}/projects/indexed-db`}
                            title="@stexcore/indexed-db"
                            details="Simplifies client-side data management by providing a typed JavaScript library on top of IndexedDB. Allows CRUD operations and conditional queries with a database-like structure."
                            date="December 13, 2024"
                            views={visits.value.indexedDB}
                        ></CardProject>
                        <CardProject
                            href={`/${lang.value.lang_type}/projects/http-status`}
                            title="@stexcore/http-status"
                            details="A clean, TypeScript-compatible library of HTTP status codes for managing responses and errors in any HTTP framework."
                            date="April 1, 2025"
                            views={visits.value.httpStatus}
                        ></CardProject>
                        <CardProject
                            href={`/${lang.value.lang_type}/projects/api-engine`}
                            title="@stexcore/api-engine"
                            details="Express-powered API engine for modular and scalable backend development. Manage services, controllers, middlewares, and schemas dynamically."
                            date="April 1, 2025"
                            views={visits.value.apiEngine}
                        ></CardProject>
                        <CardProject
                            href={`/${lang.value.lang_type}/projects/create-stexcore-api`}
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

export default component$(() => {
    return (
        <LangProvider segments={["navbar:home", "projects"]}>
            <PageComponent></PageComponent>
        </LangProvider>
    );
});

export const head: DocumentHead = {
  title: "Projects - Portfolio Stexcore",
  meta: [
    {
      name: "description",
      content: "Explore the projects and libraries I'm currently working on. Discover how I leverage my expertise in web development, Docker configurations, and dynamic Excel file generation to create innovative and efficient solutions.",
    },
    {
      name: "author",
      content: "stexcore"
    },
    {
      name: "keywords",
      content: "portfolio, developments, projects, typescript, html, css, qwik, backend, api, cli"
    }
  ],
};