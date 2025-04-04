
interface IStar {
    /**
     * Identifier
     */
    id: number,
    /**
     * Star size
     */
    size: number
    /**
     * Coor X
     */
    coor_x: number,
    /**
     * Coor Y
     */
    coor_y: number,
    /**
     * Speed X
     */
    speed_x: number,
    /**
     * Speed Y
     */
    speed_y: number,
    /**
     * Default Speed X
     */
    default_speed_x: number,
    /**
     * Default Speed Y
     */
    default_speed_y: number,
}

/**
 * Get range
 * @param min Min value
 * @param max Max value
 * @returns Value generated
 */
function range(min: number, max: number) {
    return (Math.random() * (max - min)) + min;
}

/**
 * Galactic stars
 */
export class Galactic {

    /**
     * Stars
     */
    private stars: IStar[];

    /**
     * Timer running
     */
    private timer: NodeJS.Timeout | null = null;

    /**
     * Listenners
     */
    private listenners: {
        /**
         * Event type
         */
        event: string,
        /**
         * Callback
         * @param args Arguments
         */
        callback: (...args: any[]) => void
    }[] = [];

    /**
     * Listenner
     */
    private hListenner = 0;
    
    /**
     * Constructor galactic
     */
    constructor() {
        // Get count stars
        const count_stars = range(90, 120);

        // Get stars
        this.stars = Array.from({ length: count_stars }, (_, i): IStar => {
            // Get default speed
            const default_speed_x = range(-0.6, 0.6);
            const default_speed_y = range(-0.6, 0.6);

            return {
                id: i,
                size: range(0.5, 1),
                coor_x: range(0, 100),
                coor_y: range(0, 100),
                speed_x: default_speed_x,
                speed_y: default_speed_y,
                default_speed_x: default_speed_x,
                default_speed_y: default_speed_y,
            };
        });
    }

    /**
     * Draw a star
     * @param ctx Canvas context
     * @param star Star Data
     */
    public drawStar(ctx: CanvasRenderingContext2D, star: IStar) {
        // Calculate position
        const x = (star.coor_x / 100) * ctx.canvas.width;
        const y = (star.coor_y / 100) * ctx.canvas.height;

        // Draw circle
        ctx.beginPath();
        ctx.arc(x, y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgb(180, 180, 180)";
        ctx.fill();
    }

    /**
     * Apply acceleration by external alteration
     * @param delta_x Delta speed x
     * @param delta_y Delta speed y
     */
    public applyDelta(delta_x: number, delta_y: number) {
        for (const star of this.stars) {
            // Get depth factor
            const depthFactor = Math.pow(star.size, 3); // apply inpact depth factor
    
            // Apply delta
            star.speed_x += delta_x * depthFactor;
            star.speed_y += delta_y * depthFactor;
        }
    }
    
    /**
     * Get running status
     */
    public isRunning() {
        return !!this.timer;
    }

    /**
     * Initialize operations
     */
    public initialize() {
        // Validate if is running
        if (this.timer) throw new Error("Galactic is already running!");

        // Get current time
        let previewTime = Date.now();
    
        const IMPACT_FACTOR = 3;
        const MAX_COORD = 100;
        const MIN_COORD = 0;
    
        // Interval operation
        this.timer = setInterval(() => {
            const currentTime = Date.now();
            const time_distance = (currentTime - previewTime) / 1000;
    
            previewTime = currentTime;
    
            for (const star of this.stars) {
                // Calculate difference speed
                const diff_speed_x = star.default_speed_x - star.speed_x;
                const diff_speed_y = star.default_speed_y - star.speed_y;
    
                // Apply diff_speed with impact
                star.speed_x += diff_speed_x * (IMPACT_FACTOR * time_distance);
                star.speed_y += diff_speed_y * (IMPACT_FACTOR * time_distance);
    
                // Update coors
                star.coor_x += star.speed_x * time_distance;
                star.coor_y += star.speed_y * time_distance;
    
                // Logic for toroidal effect (move to the opposite side)
                if (star.coor_x > MAX_COORD) {
                    star.coor_x = MIN_COORD + (star.coor_x - MAX_COORD);
                } else if (star.coor_x < MIN_COORD) {
                    star.coor_x = MAX_COORD - (MIN_COORD - star.coor_x);
                }
    
                if (star.coor_y > MAX_COORD) {
                    star.coor_y = MIN_COORD + (star.coor_y - MAX_COORD);
                } else if (star.coor_y < MIN_COORD) {
                    star.coor_y = MAX_COORD - (MIN_COORD - star.coor_y);
                }
            }
    
            // Emit current stars status
            this.emit("state", this.stars);
        }, 50);
    }
    
    /**
     * Stop operations
     */
    public stop() {
        if(!this.timer) throw new Error("Galactic is not running!");

        // Clear interval
        clearInterval(this.timer);
    }

    /**
     * Listen a change state event
     * @param event State event
     * @param callback Callback
     */
    public on(event: "state", callback: (stars: IStar[]) => void): number;
    /**
     * Define function logic
     */
    public on(event: string, callback: (...args: any[]) => void): number {
        const id = ++this.hListenner;

        // Append listenner
        this.listenners.push({ event, callback });
        
        return id;
    }

    /**
     * Emit current state
     * @param event State event
     * @param stars Stars state
     */
    public emit(event: "state", stars: IStar[]): void;
    /**
     * Define function logic
     */
    public emit(event: string, ...args: any[]): void {
        this.listenners.forEach((l) => {
            if(l.event === event) {
                l.callback(...args);
            }
        });
    }
    
}