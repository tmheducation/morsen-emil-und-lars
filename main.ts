input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Wort = "" + Wort + "."
    basic.setLedColor(0x00ffff)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(1000)
    basic.clearScreen()
    basic.turnRgbLedOff()
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    radio.sendString(Wort)
    basic.pause(100)
    Wort = ""
    basic.setLedColor(0xff0000)
    music.playMelody("C E G C5 C5 G E C ", 120)
    basic.pause(1000)
    basic.turnRgbLedOff()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Wort = "" + Wort + "-"
    basic.setLedColor(0x00ff00)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.clearScreen()
    basic.turnRgbLedOff()
})
radio.onReceivedString(function (receivedString) {
    music.playMelody("C5 A F C C F A C5 ", 120)
    for (let zeichen of receivedString) {
        if (zeichen == "-") {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
            basic.pause(500)
            basic.clearScreen()
            basic.pause(100)
        }
        if (zeichen == ".") {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
            basic.pause(500)
            basic.clearScreen()
            basic.pause(100)
        }
    }
})
let Wort = ""
let Gruppe_merk = 0
while (!(input.pinIsPressed(TouchPin.P3))) {
    if (input.pinIsPressed(TouchPin.P1)) {
        radio.setGroup(0 - 1)
        Gruppe_merk += 0 - 1
        basic.showNumber(Gruppe_merk)
        basic.pause(500)
        basic.clearScreen()
    }
    if (input.pinIsPressed(TouchPin.P2)) {
        radio.setGroup(0 + 1)
        Gruppe_merk += 0 + 1
        basic.showNumber(Gruppe_merk)
        basic.pause(500)
        basic.clearScreen()
    }
}
