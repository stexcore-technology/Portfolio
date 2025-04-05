import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./content.css?inline";

export default component$(() => {
    // Load styles
    useStylesScoped$(styles);
    
    return (
        <div class="content">
            <Slot></Slot>
        </div>
    );
});