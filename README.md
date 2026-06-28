# 🧵 StitchFlow Studio
### Multi-Device Connected Prototype System

**Course:** WDV 2606 - Mobile Cross Platform Development

**Student:** Angelica Reyes

---

# Project Description

StitchFlow Studio is a multi-device embroidery production management system that demonstrates real-time communication across three connected interfaces using Socket.IO.

The system allows embroidery operators and supervisors to monitor machine status, control production, and view machine activity from different devices simultaneously.

The goal of the project is to demonstrate how multiple applications can remain synchronized through a centralized Socket.IO server while providing each platform with its own purpose-built interface.

---

# Intended Users

This system is designed for:

- Embroidery machine operators
- Production supervisors
- Shop managers

The mobile device is used to send production commands, the tablet acts as a production dashboard, and the web application provides an administrative command center.

---

# System Architecture

The application consists of four connected projects.

```
                    Socket.IO Server
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          │                │                │
 Mobile Controller   Tablet Dashboard   Web Command Center
 React Native        React Native       React + Vite
```

The Socket.IO server maintains the application's shared state and broadcasts updates to every connected client.

---

# Components

## Mobile Controller

The mobile application allows operators to control the embroidery machine by sending commands to the server.

Features include:

- Start Job
- Pause Job
- Complete Job
- Emergency Stop
- Speed Control
- Thread Tension Control

---

## Tablet Dashboard

The tablet application provides a real-time production dashboard.

Displayed information includes:

- Machine Status
- Current Job
- Machine Speed
- Thread Tension
- Progress
- Active Alerts
- Connected Devices

---

## Web Command Center

The web application provides supervisors with a complete overview of the production system.

Displayed information includes:

- Connected Devices
- Active Jobs
- Machine Alerts
- Machine Status
- Production Progress
- Current Job Information

---

## Socket.IO Server

The server is responsible for:

- Managing connected devices
- Processing production commands
- Synchronizing machine state
- Broadcasting updates to all connected clients
- Handling machine alerts

---

# Technologies Used

- React Native
- React
- Vite
- TypeScript
- Express
- Socket.IO
- Socket.IO Client
- Node.js

---

# Project Folder Structure

```
2606-WDV-Mod2-ReyesAngelica
│
├── server
├── mobile-controls
├── tablet-cluster
├── web-map
├── shared-types
├── docs
│   └── p5-debug
└── README.md
```

---

# Real-Time Communication

The system uses Socket.IO events to synchronize all connected devices.

Examples include:

- START_JOB
- PAUSE_JOB
- COMPLETE_JOB
- EMERGENCY_STOP
- SPEED_xx
- TENSION_xx

Each command updates the shared application state and immediately broadcasts the changes to every connected interface.

---

# Setup Instructions

## 1. Clone Repository

```bash
git clone https://github.com/ReyesAngelica-FS/2606-WDV-Mod2-ReyesAngelica.git
```

---

## 2. Install Dependencies

Server

```bash
cd server
npm install
```

Mobile

```bash
cd mobile-controls
npm install
```

Tablet

```bash
cd tablet-cluster
npm install
```

Web

```bash
cd web-map
npm install
```

---

## 3. Start the Server

```bash
cd server
npm run dev
```

---

## 4. Start Mobile

```bash
cd mobile-controls
npx expo start
```

---

## 5. Start Tablet

```bash
cd tablet-cluster
npx expo start
```

---

## 6. Start Web

```bash
cd web-map
npm run dev
```

---

# Demo Video

YouTube (Unlisted)

**Video Link**

https://youtu.be/xkbLyoc3rO0

---

# Debug Assignment

The completed Project 5 debugging assignment is located in:

```
docs/p5-debug/
```

Included:

- Testing Documentation
- Bug Analysis
- Fixed Code Example
- Test Script

---

# Challenges

Some of the challenges encountered during development included:

- Maintaining synchronized state across multiple applications.
- Converting React Native interfaces into a React web application.
- Implementing Socket.IO communication between all connected devices.
- Designing interfaces that served different user roles while sharing the same application state.

---

# Future Improvements

Future versions of StitchFlow Studio could include:

- Multiple machine support
- Authentication
- Production history
- Database integration
- User management
- Job scheduling
- Performance analytics

---

# Author

Angelica Reyes

Full Sail University