import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./html-content.css?inline";

interface IHtmlContent {
    html: string
}

export default component$<IHtmlContent>((props) => {
    // Load styles
    useStyles$(styles);
    
    return (
        <div class="content-html" dangerouslySetInnerHTML={props.html}></div>
    );
});