basic.forever(() => {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `);
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
})    