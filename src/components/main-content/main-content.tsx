import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./main-content.css?inline";

export default component$(() => {
    // Load styles
    useStylesScoped$(styles);
    
    return (
        <main>
            <div class="main-content">
                <Slot></Slot>
            </div>
            <Slot name="bottom"></Slot>
        </main>
    );
});