import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./present.css?inline";

/**
 * Export component
 */
export default component$(() => {
    // Load style
    useStylesScoped$(styles);
    
    return (
        <div class="present">stexcore</div>
    );
});