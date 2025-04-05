import { component$, QRL, Slot, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./icon-button.css?inline";

interface IIconButtonProps {
    onClick$?: QRL<(ev: MouseEvent, currentTarget: HTMLButtonElement) => void>
}

export default component$<IIconButtonProps>((props) => {
    // Load styles
    useStylesScoped$(styles);
    
    return (
        <button class="icon-button" {...props}>
            <Slot></Slot>
        </button>
    );
});