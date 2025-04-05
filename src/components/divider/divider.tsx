import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./divider.css?inline";

export default component$(() => {
    // Load styles
    useStylesScoped$(styles);
    
    return (
        <div class="divider"></div>
    );
});