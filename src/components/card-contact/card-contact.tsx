import { component$, HTMLAttributeAnchorTarget, JSXOutput, useStylesScoped$ } from "@builder.io/qwik";
import CardButton from "../card-button/card-button";
import styles from "./card-contact.css?inline";

interface ICardContact {
    icon: JSXOutput,
    contact: string,
    platform: string,
    href?: string,
    title?: string,
    target?: HTMLAttributeAnchorTarget
}

export default component$<ICardContact>((props) => {    
    // Load styles
    useStylesScoped$(styles);

    return (
        <CardButton href={props.href} target={props.target} title={props.title}>
            <div class="information">
                <div class="icon text-light">
                    { props.icon }
                </div>
                <div class="icon-line">
                    <div class="contact text-light">{props.contact}</div>
                    <div class="platform">{props.platform}</div>
                </div>
            </div>
        </CardButton>
    );
});