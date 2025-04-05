export const cubicBezier = [0.76, 0, 0.24, 1];
export const menuSlide = {
    initial: {
        x: 'calc(100% + 100px)',
    },

    enter: {
        x: '0',
        transition: { duration: 0.8, ease: cubicBezier },
    },

    exit: {
        x: 'calc(100% + 100px)',
        transition: { duration: 0.8, ease: cubicBezier },
    },
};

export const slide = {
    initial: {
        x: 80,
    },

    enter: (i) => ({
        x: 0,
        transition: { duration: 0.8, ease: cubicBezier, delay: 0.07 * (i + 1) },
    }),

    exit: (i) => ({
        x: 80,
        transition: { duration: 0.6, ease: cubicBezier, delay: 0.02 * i },
    }),
};

export const scale = {
    open: {
        scale: 1,
        transition: { duration: 0.3 },
    },

    closed: {
        scale: 0,
        transition: { duration: 0.4 },
    },
};

export const fadeInOut = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 0.8, ease: cubicBezier } },
    exit: { opacity: 0, transition: { duration: 0.8, ease: cubicBezier } },
};
