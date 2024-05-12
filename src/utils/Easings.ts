/**
 * Grab the easing functions from https://easings.net/#
 */

class Easing {
    static easeOutQuart = (x: number): number => {
        return 1 - Math.pow(1 - x, 4);
    };

    static easeOutBack = (x: number): number => {
        const c1 = 1.70158;
        const c3 = c1 + 1;

        return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
    };

    static easeInOutExpo = (x: number): number => {
        return x === 0
            ? 0
            : x === 1
            ? 1
            : x < 0.5
            ? Math.pow(2, 20 * x - 10) / 2
            : (2 - Math.pow(2, -20 * x + 10)) / 2;
    };
}

export default Easing;
