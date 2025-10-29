# 🏗️ Architecture Diagram - Qt WebEngine + Next.js

## High-Level Architecture

```
┌───────────────────────────────────────────────────────────────┐
│                    USER'S DESKTOP                              │
│                                                                 │
│  ┌───────────────────────────────────────────────────────┐   │
│  │        Qt Application (C++)                            │   │
│  │        TrainSimulationApp.exe                          │   │
│  │                                                         │   │
│  │  ┌──────────────────────────────────────────────┐     │   │
│  │  │     Qt WebEngineWindow (QMainWindow)         │     │   │
│  │  │  ┌────────────────────────────────────────┐  │     │   │
│  │  │  │  Toolbar (Native Qt Widgets)           │  │     │   │
│  │  │  │  [⟳ Reload] [🔧 DevTools] [ℹ About]   │  │     │   │
│  │  │  └────────────────────────────────────────┘  │     │   │
│  │  │                                                │     │   │
│  │  │  ┌────────────────────────────────────────┐  │     │   │
│  │  │  │   QWebEngineView                       │  │     │   │
│  │  │  │   (Chromium Rendering Engine)          │  │     │   │
│  │  │  │  ┌──────────────────────────────────┐  │  │     │   │
│  │  │  │  │                                  │  │  │     │   │
│  │  │  │  │   Next.js Frontend (React)       │  │  │     │   │
│  │  │  │  │                                  │  │  │     │   │
│  │  │  │  │   📱 UI Components               │  │  │     │   │
│  │  │  │  │   🎨 Tailwind Styling            │  │  │     │   │
│  │  │  │  │   ⚛️  React State Management     │  │  │     │   │
│  │  │  │  │   📊 Charts & Visualizations     │  │  │     │   │
│  │  │  │  │                                  │  │  │     │   │
│  │  │  │  │   Loaded from:                   │  │  │     │   │
│  │  │  │  │   http://localhost:3000          │  │  │     │   │
│  │  │  │  │                                  │  │  │     │   │
│  │  │  │  └──────────────────────────────────┘  │  │     │   │
│  │  │  └────────────────────────────────────────┘  │     │   │
│  │  │                                                │     │   │
│  │  │  ┌────────────────────────────────────────┐  │     │   │
│  │  │  │   Progress Bar (Qt Widget)             │  │     │   │
│  │  │  └────────────────────────────────────────┘  │     │   │
│  │  │                                                │     │   │
│  │  │  ┌────────────────────────────────────────┐  │     │   │
│  │  │  │   Status Bar (Qt Widget)               │  │     │   │
│  │  │  │   "Ready" | "Loading..." | Errors      │  │     │   │
│  │  │  └────────────────────────────────────────┘  │     │   │
│  │  └──────────────────────────────────────────────┘     │   │
│  │                                                         │   │
│  │                    ⇅  HTTP REST API                    │   │
│  │                    localhost:8080                      │   │
│  │                                                         │   │
│  │  ┌──────────────────────────────────────────────┐     │   │
│  │  │    Qt Backend (C++)                          │     │   │
│  │  │                                               │     │   │
│  │  │    ┌────────────────────────────────────┐    │     │   │
│  │  │    │   HttpServer (Qt HttpServer)       │    │     │   │
│  │  │    │   Port: 8080                       │    │     │   │
│  │  │    │   Routes: /api/*                   │    │     │   │
│  │  │    └────────────────────────────────────┘    │     │   │
│  │  │              │                                │     │   │
│  │  │              ▼                                │     │   │
│  │  │    ┌────────────────────────────────────┐    │     │   │
│  │  │    │   ApiHandler                       │    │     │   │
│  │  │    │   - Route requests                 │    │     │   │
│  │  │    │   - Parse JSON                     │    │     │   │
│  │  │    │   - Return responses               │    │     │   │
│  │  │    └────────────────────────────────────┘    │     │   │
│  │  │              │                                │     │   │
│  │  │              ▼                                │     │   │
│  │  │    ┌────────────────────────────────────┐    │     │   │
│  │  │    │   AppContext                       │    │     │   │
│  │  │    │   - Train parameters               │    │     │   │
│  │  │    │   - Simulation state               │    │     │   │
│  │  │    │   - Configuration                  │    │     │   │
│  │  │    └────────────────────────────────────┘    │     │   │
│  │  │              │                                │     │   │
│  │  │              ▼                                │     │   │
│  │  │    ┌────────────────────────────────────┐    │     │   │
│  │  │    │   Controllers                      │    │     │   │
│  │  │    │   - TrainSimulationHandler         │    │     │   │
│  │  │    │   - MassHandler                    │    │     │   │
│  │  │    │   - EnergyHandler                  │    │     │   │
│  │  │    │   - PowerHandler                   │    │     │   │
│  │  │    └────────────────────────────────────┘    │     │   │
│  │  │              │                                │     │   │
│  │  │              ▼                                │     │   │
│  │  │    ┌────────────────────────────────────┐    │     │   │
│  │  │    │   Models (Data Structures)         │    │     │   │
│  │  │    │   - TrainData                      │    │     │   │
│  │  │    │   - SimulationData                 │    │     │   │
│  │  │    │   - StationData                    │    │     │   │
│  │  │    └────────────────────────────────────┘    │     │   │
│  │  │              │                                │     │   │
│  │  │              ▼                                │     │   │
│  │  │    ┌────────────────────────────────────┐    │     │   │
│  │  │    │   File I/O                         │    │     │   │
│  │  │    │   - CSV Import/Export              │    │     │   │
│  │  │    │   - Configuration files            │    │     │   │
│  │  │    └────────────────────────────────────┘    │     │   │
│  │  └──────────────────────────────────────────────┘     │   │
│  └─────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────┘
```

## Communication Flow

```
┌─────────────┐                  ┌─────────────┐                  ┌─────────────┐
│             │                  │             │                  │             │
│  Next.js    │   HTTP Request   │  Qt HTTP    │  Process Data    │  Business   │
│  Frontend   │ ────────────────>│   Server    │ ────────────────>│   Logic     │
│             │                  │             │                  │             │
│  React UI   │                  │  Port 8080  │                  │ Controllers │
│             │                  │             │                  │             │
│             │  HTTP Response   │             │  Return Results  │             │
│             │ <────────────────│             │ <────────────────│             │
│             │                  │             │                  │             │
└─────────────┘                  └─────────────┘                  └─────────────┘
      ▲                                                                    │
      │                                                                    │
      │                          File I/O                                  │
      │                                                                    ▼
      │                          ┌─────────────┐                 ┌─────────────┐
      │                          │             │                 │             │
      └──────────────────────────│  CSV Files  │<────────────────│    Data     │
               Display           │  JSON Files │  Read/Write     │   Models    │
               Results           │             │                 │             │
                                 └─────────────┘                 └─────────────┘
```

## Request Flow Example

```
User clicks "Start Simulation" button in React UI
                    │
                    ▼
    Frontend sends POST to /api/simulation/start
                    │
                    ▼
    Qt HttpServer receives request (Port 8080)
                    │
                    ▼
    ApiHandler routes to appropriate controller
                    │
                    ▼
    TrainSimulationHandler processes simulation
                    │
                    ├──> Reads TrainData model
                    │
                    ├──> Calculates physics (MassHandler, PowerHandler, etc.)
                    │
                    ├──> Updates SimulationData
                    │
                    └──> Returns JSON response
                    │
                    ▼
    HttpServer sends response back to frontend
                    │
                    ▼
    Next.js receives data and updates React state
                    │
                    ▼
    UI re-renders with new simulation results
                    │
                    ▼
    Charts and tables display updated data
```

## File Structure Map

```
Project Root
│
├── build.sh ─────────────────────> Orchestrates everything
│
├── backend/
│   │
│   ├── main.cpp ─────────────────> Entry point
│   │                                │
│   │                                ├─> Headless mode?
│   │                                │   └─> Start HttpServer only
│   │                                │
│   │                                └─> GUI mode?
│   │                                    └─> Create WebEngineWindow
│   │
│   ├── webengine/
│   │   ├── webengine_window.h
│   │   └── webengine_window.cpp ─> Creates Qt window
│   │                                Embeds Next.js via WebEngine
│   │                                Starts HttpServer
│   │
│   ├── http_server/
│   │   ├── http_server.cpp ─────> Starts HTTP server on port 8080
│   │   └── api_handler.cpp ─────> Routes API requests
│   │
│   ├── controllers/ ────────────> Business logic
│   │   ├── simulation/
│   │   ├── data/
│   │   └── output/
│   │
│   ├── models/ ─────────────────> Data structures
│   │
│   └── CMakeLists.txt ──────────> Build configuration
│
└── frontend/
    │
    ├── src/
    │   ├── app/ ────────────────> Next.js pages
    │   │   └── page.tsx ────────> Home page
    │   │
    │   ├── components/ ─────────> React components
    │   │   ├── Navbar.tsx
    │   │   ├── TrainForm.tsx
    │   │   └── ResultsChart.tsx
    │   │
    │   └── services/
    │       └── api.ts ──────────> API client (calls localhost:8080)
    │
    ├── package.json ────────────> Dependencies
    │
    └── next.config.ts ──────────> Next.js configuration
```

## Technology Stack

```
┌──────────────────────────────────────────────────────────┐
│                    DESKTOP LAYER                          │
├──────────────────────────────────────────────────────────┤
│  Qt 6.x                                                   │
│  - Native window management                               │
│  - System integration                                     │
│  - WebEngine (Chromium)                                   │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│                    FRONTEND LAYER                         │
├──────────────────────────────────────────────────────────┤
│  Next.js 14+ (React)                                      │
│  - Server/Client Components                               │
│  - App Router                                             │
│  - TypeScript                                             │
│                                                            │
│  Tailwind CSS                                             │
│  - Utility-first styling                                  │
│  - Responsive design                                      │
│                                                            │
│  shadcn/ui (Optional)                                     │
│  - Pre-built components                                   │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│                  COMMUNICATION LAYER                      │
├──────────────────────────────────────────────────────────┤
│  HTTP REST API                                            │
│  - JSON payload                                           │
│  - Standard HTTP methods (GET, POST, PUT, DELETE)         │
│  - Port: 8080 (configurable)                              │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│                    BACKEND LAYER                          │
├──────────────────────────────────────────────────────────┤
│  Qt 6.x C++17                                             │
│  - Qt HttpServer                                          │
│  - Qt Network                                             │
│  - Qt Core                                                │
│                                                            │
│  Business Logic                                           │
│  - Simulation engine                                      │
│  - Physics calculations                                   │
│  - Data processing                                        │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│                      DATA LAYER                           │
├──────────────────────────────────────────────────────────┤
│  File System                                              │
│  - CSV files (import/export)                              │
│  - JSON configuration                                     │
│  - Local storage                                          │
└──────────────────────────────────────────────────────────┘
```

## Deployment Options

```
┌─────────────────────────────────────────────────────────────┐
│                    Option 1: Desktop App                     │
├─────────────────────────────────────────────────────────────┤
│  Distribution: Single executable + dependencies              │
│  Frontend: Embedded in Qt WebEngine                          │
│  Backend: Bundled in same process                            │
│  Use case: End users, offline usage                          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                Option 2: Client-Server Split                 │
├─────────────────────────────────────────────────────────────┤
│  Backend: Run on server (--headless mode)                    │
│  Frontend: Serve via web server (Nginx, etc.)                │
│  Access: Multiple users via browser                          │
│  Use case: Team collaboration, web deployment                │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    Option 3: Hybrid                          │
├─────────────────────────────────────────────────────────────┤
│  Desktop: Qt app for local use                               │
│  Web: Same backend served to browsers                        │
│  Best of both worlds                                         │
│  Use case: Flexible deployment                               │
└─────────────────────────────────────────────────────────────┘
```

---

**This architecture gives you the flexibility of web technologies with the power of native desktop applications!**
