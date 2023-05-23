input.onButtonPressed(Button.A, function () {
    basic.showNumber(steps)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    steps = 0
})
let steps = 0
steps = 0
basic.forever(function () {
    if (input.acceleration(Dimension.X) >= 1000) {
        steps += 1
        basic.pause(500)
        led.stopAnimation()
        if (steps == 1) {
            basic.showLeds(`
                . # . # .
                # # . # #
                . # # # .
                . . # . .
                # # . # #
                `)
            music.playMelody("C D E F G A B C5 ", 1000)
            music.playMelody("C D E F G A B C5 ", 1000)
        }
    }
})
