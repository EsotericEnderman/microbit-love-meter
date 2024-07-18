basic.show_string("LOVE METER")

def on_pin_pressed_p0():
    basic.show_number(randint(0, 100))
    pass

input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)
