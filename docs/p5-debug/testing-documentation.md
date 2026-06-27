# P.5 Debug Assignment

## Option Chosen
RPM Gauge Display Bug

---

## Before Fix

### Steps to Reproduce

1. Open RPM gauge display.
2. RPM values are received as:
   - 0
   - 1000
   - 2000
   - 3000

### Expected Behavior

Display:

0
1000
2000
3000

### Actual Behavior

Display:

0
1
2
3

### Root Cause

The formatting function divided the RPM value by 1000 before displaying it.

```ts
return (rpm / 1000).toFixed(0);