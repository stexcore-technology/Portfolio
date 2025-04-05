import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./content-project.css?inline";
import Content from "../content/content";

export default component$(() => {
    // Load styles
    useStylesScoped$(styles);

    return (
        <div class="content-project">
            <Content>
                <Slot></Slot>
            </Content>
        </div>
    );
});