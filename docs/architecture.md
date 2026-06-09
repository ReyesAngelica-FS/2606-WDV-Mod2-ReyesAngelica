# StitchFlow Studio Architecture

## System Overview

```text
                    Socket.IO Server
                       Express API
                            |
        -----------------------------------------
        |                   |                   |
        |                   |                   |
        ▼                   ▼                   ▼

 Mobile Controls     Tablet Dashboard     Web Admin Panel
 Machine Operator    Production View      Ala Rey Studios
```
## Mobile Controls
- Start embroidery jobs
- Pause jobs
- Complete jobs
- Send machine alerts
- Haptic feedback

## Tablet Dashboard
- View production queue
- Monitor machine status
- Track completed orders
- View live alerts

## Web Admin Panel
- Create customer orders
- Assign jobs
- Manage production
- View reports