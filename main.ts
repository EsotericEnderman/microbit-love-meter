basic.showString("LOVE METER")
input.onPinPressed(TouchPin.P0, function on_pin_pressed_p0() {
    basic.showNumber(randint(0, 100))
    
})
