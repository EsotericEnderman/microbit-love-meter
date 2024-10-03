basic.showString("LOVE METER");

input.onPinPressed(TouchPin.P0, function onPinPressedP0() {
    basic.showNumber(randint(0, 100));
});
