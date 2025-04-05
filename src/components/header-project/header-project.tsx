import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./header-project.css?inline";

interface IHeaderProjectProps {
    title: string,
    description: string
}

export default component$<IHeaderProjectProps>((props) => {
    // Load styles
    useStylesScoped$(styles);
    
    return (
        <div class="header-project">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
});