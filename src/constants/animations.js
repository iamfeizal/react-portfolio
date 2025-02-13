export const containerTop = (delay) => ({
    hidden: {y: -100, opacity: 0},
    visible: {y: 0, opacity: 1,},
    transition: { duration: 0.5, delay: delay }
})

export const containerLeft = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {x: 0, opacity: 1,},
    transition: { duration: 0.5, delay: delay }
})

export const containerRight = (delay) => ({
    hidden: {x: 100, opacity: 0},
    visible: {x: 0, opacity: 1,},
    transition: { duration: 0.5, delay: delay }
})