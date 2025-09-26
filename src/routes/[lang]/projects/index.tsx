import { component$, useStylesScoped$ } from "@builder.io/qwik";
import IconButton from "~/components/icon-button/icon-button";
import CardProject from "~/components/card-project/card-project";
import Navbar, { NavItem } from "~/components/navbar/navbar";
import { BackIcon } from "~/icons/icons";
import { type DocumentHead, routeLoader$, useNavigate } from "@builder.io/qwik-city";
import MainContent from "~/components/main-content/main-content";
import Divider from "~/components/divider/divider";
import Header from "~/components/header/header";
import Box from "~/components/box/box";
import styles from "./index.css?inline";
import visitsService from "~/services/visits.service";
import LangProvider from "~/providers/lang.provider";
import useLang from "~/hooks/useLang";
import LangButton from "~/components/lang-button/lang-button";
import langService from "~/services/lang.service";
import type { ILangType } from "~/types/lang";

export const useVisits = routeLoader$(async () => {
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
                            title={lang.value.projects?.projects["indexed-db"].package_name || ""}
                            details={lang.value.projects?.projects["indexed-db"].description || ""}
                            date={lang.value.projects?.projects["indexed-db"].date_creation || ""}
                            views={visits.value.indexedDB}
                        ></CardProject>
                        <CardProject
                            href={`/${lang.value.lang_type}/projects/http-status`}
                            title={lang.value.projects?.projects["http-status"].package_name || ""}
                            details={lang.value.projects?.projects["http-status"].description || ""}
                            date={lang.value.projects?.projects["http-status"].date_creation || ""}
                            views={visits.value.httpStatus}
                        ></CardProject>
                        <CardProject
                            href={`/${lang.value.lang_type}/projects/api-engine`}
                            title={lang.value.projects?.projects["api-engine"].package_name || ""}
                            details={lang.value.projects?.projects["api-engine"].description || ""}
                            date={lang.value.projects?.projects["api-engine"].date_creation || ""}
                            views={visits.value.apiEngine}
                        ></CardProject>
                        <CardProject
                            href={`/${lang.value.lang_type}/projects/create-stexcore-api`}
                            title={lang.value.projects?.projects["create-stexcore-api"].package_name || ""}
                            details={lang.value.projects?.projects["create-stexcore-api"].description || ""}
                            date={lang.value.projects?.projects["create-stexcore-api"].date_creation || ""}
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

/**
 * Head Page
 * @param ctx Context
 */
export const head: DocumentHead = (ctx) => {
  // Get lang
  const segment = langService.getLang(ctx.params.lang as ILangType, "head:projects");

  return {
    title: segment.title,
    meta: [
      { name: "description", content: segment.description },
      { name: "author", content: segment.author },
      { name: "keywords", content: segment.keywords }
    ],
  }
};