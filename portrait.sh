#!/bin/sh

#portrait (left)

xrandr -o left
xinput set-prop "6" --type=float "Coordinate Transformation Matrix" 0 -1.2 1.1 1.17 0 -0.065 0 0 1
