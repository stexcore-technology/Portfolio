import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./header.css?inline";

interface IHeaderProps {
    title: string,
    description?: string
}

export default component$<IHeaderProps>(({ title, description }) => {
    // Load styles
    useStylesScoped$(styles);
    
    return (
        <div class="header">
            <h1 class="title">{title}</h1>
            <p class="description">{description}</p>
        </div>
    );
});