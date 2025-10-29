# 🚂 Train Simulation App - Qt WebEngine + Next.js Monorepo

A modern desktop train simulation application combining the power of **Qt 6 (C++)** for the backend and desktop container, with **Next.js (React)** for the frontend UI.

## 📐 Architecture

```
┌─────────────────────────────────────────┐
│     Qt Application (Desktop Window)     │
│  ┌───────────────────────────────────┐  │
│  │   Qt WebEngine (Chromium-based)   │  │
│  │  ┌─────────────────────────────┐  │  │
│  │  │   Next.js Frontend (React)  │  │  │
│  │  │   - Modern UI Components    │  │  │
│  │  │   - React Hooks & State     │  │  │
│  │  │   - Tailwind CSS Styling    │  │  │
│  │  └─────────────────────────────┘  │  │
│  └───────────────────────────────────┘  │
│              ↕ HTTP/REST API            │
│  ┌───────────────────────────────────┐  │
│  │   Qt Backend (C++)                │  │
│  │   - Simulation Engine             │  │
│  │   - Data Processing               │  │
│  │   - File I/O                      │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

## 🏗️ Project Structure

```
train-app/                    <-- ROOT: Always run commands from here
├── 📁 backend/               # Qt C++ Backend
│   ├── main.cpp             # Application entry point
│   ├── CMakeLists.txt       # CMake build configuration
│   │
│   ├── webengine/           # WebEngine integration
│   │   ├── webengine_window.h
│   │   └── webengine_window.cpp
│   │
│   ├── core/                # Core application logic
│   │   ├── appcontext.h
│   │   └── appcontext.cpp
│   │
│   ├── http_server/         # REST API server
│   │   ├── http_server.h
│   │   ├── http_server.cpp
│   │   ├── api_handler.h
│   │   └── api_handler.cpp
│   │
│   ├── controllers/         # Business logic controllers
│   │   ├── simulation/
│   │   ├── data/
│   │   └── output/
│   │
│   ├── models/              # Data models
│   └── auth/                # Authentication
│
├── 📁 frontend/             # Next.js Frontend
│   ├── src/
│   │   ├── app/            # Next.js 13+ App Router
│   │   ├── components/     # React components
│   │   └── services/       # API services
│   ├── package.json
│   └── next.config.ts
│
├── 📄 build.sh              # Main build script (YOU USE THIS!)
├── 📄 .gitignore
└── 📄 README.md
```

## 🚀 Quick Start

### Prerequisites

Make sure you have these installed:

```bash
# Check Qt 6
qmake --version   # Should show Qt 6.x

# Check CMake
cmake --version   # Minimum 3.16

# Check Node.js
node --version    # Minimum v18

# Check npm
npm --version
```

**Install Qt WebEngine** (if not already installed):

```bash
# Fedora/Nobara
sudo dnf install qt6-qtwebengine-devel

# Ubuntu/Debian
sudo apt install qt6-webengine-dev

# Arch Linux
sudo pacman -S qt6-webengine
```

### Installation

1. **Clone the repository** (if not already done):
   ```bash
   cd ~/Documents
   git clone <your-repo-url>
   cd Electron-Train-App-Simulation
   ```

2. **Install frontend dependencies**:
   ```bash
   cd frontend
   npm install
   cd ..
   ```

3. **Make build script executable**:
   ```bash
   chmod +x build.sh
   ```

### Running the Application

#### Development Mode (Recommended for Development)

This mode provides hot reload for the Next.js frontend:

```bash
# Terminal 1: Start Next.js dev server
cd frontend
npm run dev
# Keep this running...

# Terminal 2: Build and run Qt app
./build.sh dev
```

The Qt application will open a window embedding `http://localhost:3000`.

#### Production Mode

Build everything for production:

```bash
./build.sh prod
```

This will:
1. Build the Next.js frontend (optimized)
2. Build the Qt backend (Release mode)
3. Create a standalone executable

Run the production build:
```bash
./backend/build/bin/TrainSimulationApp
```

## 🛠️ Build Script Commands

```bash
./build.sh         # Build and run in development mode (default)
./build.sh dev     # Same as above
./build.sh prod    # Build production release
./build.sh clean   # Clean all build artifacts
./build.sh help    # Show help message
```

## 🎮 Running Modes

The application supports different running modes:

### 1. **Desktop Mode with WebEngine** (Default)

Embeds Next.js frontend in a Qt desktop window:

```bash
./backend/build/bin/TrainSimulationApp
```

**Arguments:**
- `--dev` - Development mode
- `--frontend=URL` - Set frontend URL (default: `http://localhost:3000`)

**Example:**
```bash
# Load from production build
./backend/build/bin/TrainSimulationApp --frontend=http://localhost:3000

# Load from custom port
./backend/build/bin/TrainSimulationApp --frontend=http://localhost:5000
```

### 2. **Headless Mode** (Backend Only)

Run only the backend HTTP server without GUI:

```bash
./backend/build/bin/TrainSimulationApp --headless
```

**Arguments:**
- `--port=8080` - Set server port

**Example:**
```bash
# Run backend on custom port
./backend/build/bin/TrainSimulationApp --headless --port=9000
```

Then access via browser: `http://localhost:8080` (or use the Next.js dev server separately)

## 📡 API Endpoints

The backend provides these REST endpoints:

| Method | Endpoint                     | Description                  |
| ------ | ---------------------------- | ---------------------------- |
| GET    | `/status`                    | Server status                |
| GET    | `/api/health`                | Health check                 |
| GET    | `/api/parameters/train`      | Get train parameters         |
| POST   | `/api/parameters/train`      | Update train parameters      |
| GET    | `/api/parameters/electrical` | Get electrical parameters    |
| POST   | `/api/parameters/electrical` | Update electrical parameters |
| GET    | `/api/parameters/running`    | Get running parameters       |
| POST   | `/api/parameters/running`    | Update running parameters    |
| GET    | `/api/parameters/track`      | Get track parameters         |
| POST   | `/api/parameters/track`      | Update track parameters      |
| POST   | `/api/simulation/start`      | Start simulation             |
| GET    | `/api/simulation/status`     | Get simulation status        |
| GET    | `/api/simulation/results`    | Get simulation results       |
| POST   | `/api/export/results`        | Export results to CSV        |

## 🔧 Development Workflow

### Frontend Development (Next.js)

```bash
cd frontend

# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Type checking
npm run type-check

# Linting
npm run lint
```

### Backend Development (Qt C++)

```bash
cd backend

# Configure CMake
mkdir -p build && cd build
cmake -DCMAKE_BUILD_TYPE=Debug ..

# Build
cmake --build .

# Run
./bin/TrainSimulationApp
```

### Full Stack Development

Use two terminals:

**Terminal 1** (Frontend):
```bash
cd frontend
npm run dev
```

**Terminal 2** (Backend):
```bash
./build.sh dev
```

This provides:
- ✅ Next.js hot reload for UI changes
- ✅ Qt desktop container
- ✅ Full API integration

## 📦 Building for Distribution

### Create Production Build

```bash
./build.sh prod
```

This creates:
- **Executable**: `backend/build/bin/TrainSimulationApp`
- **Frontend**: `frontend/.next/` or `frontend/out/`

### Package for Distribution

For a complete standalone app, you'll need to:

1. **Bundle Qt libraries** with your executable
2. **Include frontend build** (embedded or as resources)

Example using `linuxdeployqt`:

```bash
# Install linuxdeployqt
wget -c -nv "https://github.com/probonopd/linuxdeployqt/releases/download/continuous/linuxdeployqt-continuous-x86_64.AppImage"
chmod +x linuxdeployqt-continuous-x86_64.AppImage

# Create AppDir structure
mkdir -p AppDir/usr/bin
cp backend/build/bin/TrainSimulationApp AppDir/usr/bin/

# Bundle Qt dependencies
./linuxdeployqt-continuous-x86_64.AppImage AppDir/usr/bin/TrainSimulationApp -bundle-non-qt-libs

# Create AppImage
./linuxdeployqt-continuous-x86_64.AppImage AppDir/usr/bin/TrainSimulationApp -appimage
```

## 🐛 Troubleshooting

### Qt WebEngine not found

```bash
# Install Qt WebEngine
sudo dnf install qt6-qtwebengine-devel  # Fedora/Nobara
sudo apt install qt6-webengine-dev      # Ubuntu/Debian
```

### Frontend fails to load

1. Make sure Next.js dev server is running:
   ```bash
   cd frontend && npm run dev
   ```

2. Check the URL in Qt app matches the dev server:
   ```bash
   ./backend/build/bin/TrainSimulationApp --frontend=http://localhost:3000
   ```

### Build errors

1. Clean and rebuild:
   ```bash
   ./build.sh clean
   ./build.sh dev
   ```

2. Check CMake can find Qt:
   ```bash
   cd backend/build
   cmake .. -DQt6_DIR=/usr/lib64/cmake/Qt6  # Adjust path
   ```

## 🎯 Benefits of This Architecture

| Benefit                  | Description                              |
| ------------------------ | ---------------------------------------- |
| 🚀 **Modern UI**          | Use React, Tailwind, and modern web tech |
| ⚡ **Native Performance** | C++ backend for heavy computation        |
| 🖥️ **True Desktop App**   | Native window, system integration        |
| 🔥 **Hot Reload**         | Fast UI development with Next.js         |
| 📦 **Single Package**     | One executable, no separate browser      |
| 🔒 **Secure**             | No CORS issues, embedded frontend        |
| 🎨 **Best of Both**       | Qt's power + Web's flexibility           |

## 📝 Next Steps

1. ✅ **Remove Electron dependencies** (if any remain)
2. ✅ **Update frontend to remove Electron APIs**
3. ✅ **Test all API endpoints**
4. ✅ **Set up production build pipeline**
5. ✅ **Create installer/AppImage for distribution**

## 📄 License

[Your License Here]

## 🤝 Contributing

[Your Contributing Guidelines]

---

**Built with ❤️ using Qt 6 + Next.js**
