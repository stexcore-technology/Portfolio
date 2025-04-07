import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./present.css?inline";

/**
 * Export component
 */
export default component$<{ label: string }>(({ label }) => {
    // Load style
    useStylesScoped$(styles);
    
    return (
        <div class="present">{label}</div>
    );
});