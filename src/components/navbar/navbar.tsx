import { $, component$, Slot, useOnDocument, useOnWindow, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./navbar.module.css";

interface INavItem {
    href?: string,
    title?: string,
    disabled?: boolean
}

export const NavItem = component$<INavItem>(({ href, title, disabled }) => {
    return (
        <li title={title}>
            <Link class={[styles["nav-item"], { [styles["disabled"]]: disabled }]} href={href}>
                <Slot></Slot>
            </Link>
        </li>
    );
});

export default component$(() => {

    const isActive = useSignal(false);
    
    useVisibleTask$(() => {
        isActive.value = window.scrollY > 50;
    });
    
    useOnWindow("scroll", $((ev) => {
        isActive.value = window.scrollY > 50;
    }));
    
    return (
        <nav class={[styles["navbar"], { [styles["active"]]: isActive.value }]}>
            <div class={styles["navbar-content"]}>
                <ul>
                    <Slot name="start"></Slot>
                </ul>
                <ul>
                    <Slot></Slot>
                </ul>
            </div>
        </nav>
    );
});