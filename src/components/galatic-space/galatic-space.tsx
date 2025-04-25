import { $, component$, NoSerialize, noSerialize, Slot, useOnWindow, useSignal, useStore, useStylesScoped$, useVisibleTask$ } from "@builder.io/qwik";
import styles from "./galatic-space.css?inline";
import { Galactic } from "./galatic.class";

interface IGalacticSpaceProps {
    class?: string
}

/**
 * export component
 */
export default component$<IGalacticSpaceProps>((props) => {
    // Load styles
    useStylesScoped$(styles);

    // Rect canvas
    const rect = useStore({ width: 0, height: 0 });
    // Time Last move mouse
    const timeMouse = useSignal(0);
    // Galactic instance
    const galactic = useSignal<NoSerialize<Galactic>>();

    // Reference element DOM
    const galacticSpaceRef = useSignal<HTMLDivElement>();
    // Reference canvas DOM
    const canvas = useSignal<HTMLCanvasElement>();

    // Create galactic instance
    useVisibleTask$(() => {
        galactic.value = noSerialize(new Galactic());
    });
    
    // Listen change status on Galactic
    useVisibleTask$(({ track, cleanup }) => {
        // Track canvas
        track(canvas);
        track(galactic);

        // Galactic space bounding
        if(galacticSpaceRef.value) {
            const rectBounding = galacticSpaceRef.value.getBoundingClientRect();

            rect.width = rectBounding.width;
            rect.height = rectBounding.height;
        }
        
        if(galactic.value && canvas.value) {
            // Canvas space
            if(!galactic.value.isRunning()) {
                // Initialize service
                galactic.value.initialize();
            }
    
            // Listen state changes
            const id = galactic.value.on("state", (stars) => {
    
                if(canvas.value && galactic.value) {
                    const ctx = canvas.value.getContext("2d");
    
                    if(ctx) {
                        // Clean star
                        ctx.clearRect(0, 0, canvas.value?.width, canvas.value?.height);
        
                        // Draw star
                        for (const star of stars) {
                            galactic.value.drawStar(ctx, star);
                        }
                    }
                }
            });
            
            cleanup(() => {
                // Remove listenner
                galactic.value?.removeListenner(id);
                // Validate Running
                if(galactic.value?.isRunning()) {
                    // Stop running
                    galactic.value.stop();
                }
            });
        }
    });

    // Listen size changed
    useOnWindow("resize", $(() => {
        if(galacticSpaceRef.value) {
            const rectBounding = galacticSpaceRef.value.getBoundingClientRect();

            rect.width = rectBounding.width;
            rect.height = rectBounding.height;
        }
    }));

    // Listen mouse moved
    useOnWindow("mousemove", $((ev) => {
        // Get current time
        const currentTime = Date.now();

        // Validate previous time
        if(timeMouse.value) {
            const timeDistance = Math.min(currentTime - timeMouse.value, 1000);
            
            // Calculate delta speed
            let delta_x = ev.movementX / rect.width * timeDistance * 6;
            let delta_y = ev.movementY / rect.height * timeDistance * 6;
            
            const MAX_DELTA = 15;
            
            if(delta_x > MAX_DELTA) delta_x = MAX_DELTA;
            if(delta_x < -MAX_DELTA) delta_x = -MAX_DELTA;
            if(delta_y > MAX_DELTA) delta_y = MAX_DELTA;
            if(delta_y < -MAX_DELTA) delta_y = -MAX_DELTA;
            
            // Apply delta speed
            galactic.value?.applyDelta(delta_x, delta_y);
        }
        
        // set current time
        timeMouse.value = currentTime;
    }));
    
    // Render
    return (
        <div ref={galacticSpaceRef} class="galatic-space">
            {!!(rect.width && rect.height) && (
                <div class={props.class}>
                    <canvas key={`canvas_${rect.width}_${rect.height}`} ref={canvas} width={rect.width} height={rect.height}></canvas>
                </div>
            )}
            <div class="container">
                <Slot></Slot>
            </div>
        </div>
    )
});