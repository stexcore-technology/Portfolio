import { component$, useStylesScoped$ } from "@builder.io/qwik";
import CardButton from "../card-button/card-button";
import { EyeIcon } from "~/icons/icons";
import styles from "./card-project.css?inline";

interface ICardProjectProps {
    date?: string,
    href?: string
    title: string,
    details: string,
    views: number
}

export default component$<ICardProjectProps>(({ date, title, details, views, href }) => {
    // Load styles
    useStylesScoped$(styles);
    
    return (
        <CardButton href={href}>
            <div class="date">
                {date}
                <div class="visits">
                    <EyeIcon size="md"></EyeIcon> {views}
                </div>
            </div>
            <div class="content">
                <h2>{title}</h2>
                <p>{details}</p>
            </div>
        </CardButton>
    )
});