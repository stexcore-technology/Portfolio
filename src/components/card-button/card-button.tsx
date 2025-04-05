import { $, component$, HTMLAttributeAnchorTarget, Slot, useStore, useStylesScoped$, useVisibleTask$ } from "@builder.io/qwik";
import styles from "./card-button.css?inline";
import { Link } from "@builder.io/qwik-city";

interface ICardButton {
    href?: string,
    target?: HTMLAttributeAnchorTarget
}

export default component$<ICardButton>(({ href, target }) => {
    // Load styles
    useStylesScoped$(styles);

    // Position
    const current_coors = useStore({ x: 0, y: 0 });
    const coors = useStore({ x: 0, y: 0 });
    const lastTime = useStore({ time: performance.now() });

    // Visible tasks
    useVisibleTask$(({ cleanup }) => {
        // Interval to manage movement
        const interval = setInterval(() => {
            const now = performance.now();
            const deltaTime = (now - lastTime.time) / 1000; // Time
            lastTime.time = now;

            const smoothFactor = 4; // Speed smooth

            // Apply movement
            coors.x += (current_coors.x - coors.x) * smoothFactor * deltaTime;
            coors.y += (current_coors.y - coors.y) * smoothFactor * deltaTime;
        }, 50);

        // Cleanup
        cleanup(() => clearInterval(interval));
    });

    // Handler mouse move event
    const handleMouseMove = $((ev: MouseEvent, currentTarget: HTMLButtonElement) => {
        const bounding = currentTarget.getBoundingClientRect();

        // Position relative
        const offsetX = ev.clientX - bounding.left;
        const offsetY = ev.clientY - bounding.top;

        // Set position
        current_coors.x = offsetX;
        current_coors.y = offsetY;
    });

    return (
        <Link href={href} target={target}>
            <button class="card" onMouseMove$={handleMouseMove}>
                <div class="circle" style={{ top: `${coors.y}px`, left: `${coors.x}px` }}></div>
                <div class="content">
                    <Slot></Slot>
                </div>
            </button>
        </Link>
    );
});
