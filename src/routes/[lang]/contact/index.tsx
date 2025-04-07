import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead, useNavigate } from "@builder.io/qwik-city";
import CardContact from "~/components/card-contact/card-contact";
import IconButton from "~/components/icon-button/icon-button";
import MainContent from "~/components/main-content/main-content";
import Navbar, { NavItem } from "~/components/navbar/navbar";
import { BackIcon, GithubIcon, MailIcon, WhatsappIcon } from "~/icons/icons";
import styles from "./index.css?inline";
import LangProvider from "~/providers/lang.provider";
import useLang from "~/hooks/useLang";

const PageComponent = component$(() => {
  const lang = useLang(["navbar:home", "contact"]);
    // Load styles
    useStylesScoped$(styles);
    // Get navigate
    const navigate = useNavigate();

    return (
        <>
            <Navbar>
                <IconButton q:slot="start" onClick$={() => navigate("..")} title={lang["navbar:home"]?.navbar.back.tooltip}>
                    <BackIcon></BackIcon>
                </IconButton>
                <NavItem href="/projects" title={lang["navbar:home"]?.navbar.projects.tooltip}>
                  {lang["navbar:home"]?.navbar.projects.label}
                </NavItem>
                <NavItem href="/contact" title={lang["navbar:home"]?.navbar.contact.tooltip}>
                  {lang["navbar:home"]?.navbar.contact.label}
                </NavItem>
            </Navbar>
            <MainContent>
                <div class="content">
                    <CardContact
                        icon={<WhatsappIcon></WhatsappIcon>}
                        contact="+58 424 2262884"
                        platform={lang.contact?.contacts.whatsapp.label || ""}
                        title={lang.contact?.contacts.whatsapp.tooltip}
                        href="https://wa.me/?phone=584242262884&text=Hi+Stexcore!"
                        target="_blank"
                    ></CardContact>
                    <CardContact
                        icon={<MailIcon></MailIcon>}
                        contact="dev@stexcore.com"
                        platform={lang.contact?.contacts.email.label || ""}
                        title={lang.contact?.contacts.email.tooltip}
                        href="mailto:dev@stexcore.com"
                        ></CardContact>
                    <CardContact
                        icon={<GithubIcon></GithubIcon>}
                        contact="stexcore"
                        platform={lang.contact?.contacts.github.label || ""}
                        title={lang.contact?.contacts.github.tooltip}
                        href="https://github.com/stexcore"
                        target="_blank"
                    ></CardContact>
                </div>
            </MainContent>
        </>
    );
});

export default component$(() => {
  return (
    <LangProvider segments={["contact", "navbar:home"]}>
      <PageComponent></PageComponent>
    </LangProvider>
  )
});

export const head: DocumentHead = {
  title: "Contact - Portfolio Stexcore",
  meta: [
    {
      name: "description",
      content: "Discover the various methods to contact me through my portfolio. Find options like email, social media, and contact forms, designed to make professional communication easy and efficient.",
    },
    {
      name: "author",
      content: "stexcore"
    },
    {
      name: "keywords",
      content: "portfolio, projects, contact, whatsapp, email, github"
    }
  ],
};