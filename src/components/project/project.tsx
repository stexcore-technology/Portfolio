import { component$ } from "@builder.io/qwik";
import { BackIcon, EyeIcon, GithubIcon, WhatsappIcon } from "~/icons/icons";
import ContentProject from "../content-project/content-project";
import Divider from "../divider/divider";
import HeaderProject from "../header-project/header-project";
import HtmlContent from "../html-content/html-content";
import IconButton from "../icon-button/icon-button";
import MainContent from "../main-content/main-content";
import Navbar, { NavItem } from "../navbar/navbar";
import { useNavigate } from "@builder.io/qwik-city";
import { formatViews } from "~/utils/text.util";

interface IProjectProps {
    title: string,
    description: string,
    html: string,
    views: number
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
                <NavItem title="Views counter for this page" disabled>
                    <EyeIcon></EyeIcon> {formatViews(props.views)}
                </NavItem>
                <NavItem href="https://wa.me/?phone=584242262884">
                    <WhatsappIcon></WhatsappIcon>
                </NavItem>
                <NavItem href="https://github.com/stexcore">
                    <GithubIcon></GithubIcon>
                </NavItem>
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