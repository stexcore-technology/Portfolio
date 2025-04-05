import { component$ } from "@builder.io/qwik";
import { BackIcon } from "~/icons/icons";
import ContentProject from "../content-project/content-project";
import Divider from "../divider/divider";
import HeaderProject from "../header-project/header-project";
import HtmlContent from "../html-content/html-content";
import IconButton from "../icon-button/icon-button";
import MainContent from "../main-content/main-content";
import Navbar, { NavItem } from "../navbar/navbar";
import { useNavigate } from "@builder.io/qwik-city";

interface IProjectProps {
    title: string,
    description: string,
    html: string
}

export default component$<IProjectProps>((props) => {
    // Load styles
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
                <HeaderProject
                    title={props.title}
                    description={props.description}
                ></HeaderProject>
                <Divider></Divider>
                <ContentProject q:slot="bottom">
                    <HtmlContent html={props.html}></HtmlContent>
                </ContentProject>
            </MainContent>
        </>
    );
});