import { $, component$, JSXOutput, QRL, Slot, useOnWindow, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./navbar.module.css";

interface INavItem {
    href?: string,
    title?: string,
    disabled?: boolean
}

export const NavItem = component$<INavItem>(({ href, title, disabled }) => {
    return (
        <li>
            <Link class={[styles["nav-item"], { [styles["disabled"]]: disabled }]} href={href} title={title}>
                <Slot></Slot>
            </Link>
        </li>
    );
});

interface INavSelect {
    value?: string,
    title?: string,
    disabled?: boolean,
    options: {
        item?: JSXOutput,
        value: string
    }[],
    onChange$?: QRL<(value: string) => void>
}

export const NavSelect = component$<INavSelect>(({ value, title, disabled, options, onChange$ }) => {
    const open = useSignal(false);

    const toogleOpen = $(() => {
        open.value = !open.value;
    });

    const opt = options.find((o) => o.value === value);
    const valueLabel = opt?.item || opt?.value;
    
    return (
        <li>
            <div class={styles["select"]}>
                <button class={[styles["nav-item"], styles["select"], { [styles["disabled"]]: disabled }]} title={title} onClick$={toogleOpen}>
                    {valueLabel}
                </button>
                <div class={[styles["popup"], { [styles["active"]]: open.value }]}>
                    {options.map((optItem) => (
                        <button  
                            key={optItem.value}
                            class={[styles["popup-item"], { [styles["active"]]: optItem.value === value }]}
                            onClick$={() => {
                                open.value = false;
                                onChange$?.(optItem.value);
                            }}
                        >
                            {optItem.item || optItem.value}
                        </button>
                    ))}
                </div>
            </div>
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