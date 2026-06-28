# StitchFlow Studio Architecture

## System Overview

StitchFlow Studio is a multi-device embroidery production management system. The system uses a central TypeScript Socket.IO server to coordinate real-time communication between three interfaces: Mobile Controls, Tablet Dashboard, and Web Command Center.

```text
                    TypeScript Socket.IO Server
                     Express + Real-Time State
                                |
        ------------------------------------------------
        |                      |                       |
        ▼                      ▼                       ▼

 Mobile Controls        Tablet Dashboard        Web Command Center
 React Native           React Native            React + Vite
 Machine Operator       Production Monitor      Admin Overview
```

## Data Flow

1. The Mobile Controls app sends machine commands to the Socket.IO server.
2. The server updates the shared StitchFlow machine state.
3. The server broadcasts the updated state to all connected clients.
4. The Tablet Dashboard and Web Command Center update in real time.

## Mobile Controls

Purpose: Operator control interface.

Features:

* Start embroidery jobs
* Pause jobs
* Complete jobs
* Adjust machine speed
* Adjust thread tension
* Trigger emergency stop
* Send machine alerts

## Tablet Dashboard

Purpose: Production monitoring interface.

Features:

* View connected devices
* Monitor active jobs
* Display machine status
* Track speed and thread tension
* View production progress
* Display live alerts

## Web Command Center

Purpose: Administrative monitoring interface.

Features:

* View system-wide status
* Monitor connected devices
* Track active jobs
* View alerts
* Review machine status
* Provide supervisor-level production visibility

## Server

Purpose: Central communication hub.

Responsibilities:

* Manage Socket.IO connections
* Receive commands from mobile controls
* Maintain shared machine state
* Broadcast state updates to tablet and web clients
* Handle production alerts
* Synchronize real-time updates across all interfaces

## Key Real-Time Events

```text
START_JOB
PAUSE_JOB
COMPLETE_JOB
EMERGENCY_STOP
SPEED_xx
TENSION_xx
state-update
dashboard-update
```

## Architecture Summary

The three interfaces work together as one connected production system. The mobile app controls the machine, the tablet displays production status, and the web command center provides an administrative overview. The Socket.IO server keeps all clients synchronized in real time.
