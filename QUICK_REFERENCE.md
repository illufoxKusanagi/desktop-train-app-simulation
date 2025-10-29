# ⚡ Quick Reference - Common Commands

## 🚀 Most Common Workflows

### Development (Hot Reload)
```bash
# Terminal 1
cd frontend && npm run dev

# Terminal 2  
./build.sh dev
```

### Production Build
```bash
./build.sh prod
./backend/build/bin/TrainSimulationApp
```

### Clean Everything
```bash
./build.sh clean
```

---

## 📦 Installation

```bash
# Qt WebEngine
sudo dnf install qt6-qtwebengine-devel

# Frontend dependencies
cd frontend && npm install

# Make build script executable
chmod +x build.sh
```

---

## 🛠️ Build Commands

| Command            | Description                      |
| ------------------ | -------------------------------- |
| `./build.sh`       | Build and run dev mode (default) |
| `./build.sh dev`   | Same as above                    |
| `./build.sh prod`  | Build production release         |
| `./build.sh clean` | Clean all build artifacts        |
| `./build.sh help`  | Show help message                |

---

## 🎮 Run Commands

**From project root:**

### Development Mode
```bash
./build.sh              # Build and run everything (ONE COMMAND!)
./build.sh dev          # Same as above
./build.sh run          # Just run (skip build if already built)
```

### Production Mode
```bash
./build.sh prod         # Build production
./backend/build/bin/TrainSimulationApp  # Run production build
```

### Headless Mode (Backend Only)
```bash
# Backend server only, no GUI
./backend/build/bin/TrainSimulationApp --headless

# Custom port
./backend/build/bin/TrainSimulationApp --headless --port=9000
```

---

## 🔧 Development Tools

### Working with Frontend
**No need to cd!** Everything is handled by `./build.sh`

But if you want to manually:
```bash
cd frontend
npm run dev          # Start dev server (not needed with ./build.sh)
npm run build        # Build for production
npm run lint         # Run linter
npm run type-check   # TypeScript check
cd ..                # Return to root
```

### Working with Backend
```bash
# Build manually (not needed with ./build.sh)
cd backend
mkdir -p build && cd build
cmake -DCMAKE_BUILD_TYPE=Debug ..
cmake --build .
./bin/TrainSimulationApp
cd ../..             # Return to root
```

---

## 🐛 Debugging

### Check if services are running
```bash
# Frontend dev server
curl http://localhost:3000

# Backend API
curl http://localhost:8080/api/health
```

### View logs
```bash
# Just run with verbose output
./build.sh dev

# Or run backend manually for more control
./backend/build/bin/TrainSimulationApp --dev
```

### Open DevTools
1. Run the app: `./build.sh`
2. Click "🔧 DevTools" in toolbar
3. Or use F12 (if configured)

---

## 🔍 Common Issues

### Frontend won't load
```bash
# Clean and rebuild
./build.sh clean
./build.sh
```

### Port already in use
```bash
# Find what's using the port
sudo lsof -i :8080

# Kill it
sudo kill $(sudo lsof -t -i:8080)

# Try again
./build.sh
```

### Build fails
```bash
# Clean everything and rebuild
./build.sh clean
./build.sh
```

### Qt WebEngine not found
```bash
# Install it
sudo dnf install qt6-qtwebengine-devel

# Verify
dnf list installed | grep qt6-qtwebengine

# Try again
./build.sh
```

---

## 📊 API Endpoints

Base URL: `http://localhost:8080`

| Endpoint                     | Method   | Description       |
| ---------------------------- | -------- | ----------------- |
| `/status`                    | GET      | Server status     |
| `/api/health`                | GET      | Health check      |
| `/api/parameters/train`      | GET/POST | Train parameters  |
| `/api/parameters/electrical` | GET/POST | Electrical params |
| `/api/parameters/running`    | GET/POST | Running params    |
| `/api/parameters/track`      | GET/POST | Track params      |
| `/api/simulation/start`      | POST     | Start simulation  |
| `/api/simulation/status`     | GET      | Simulation status |
| `/api/simulation/results`    | GET      | Get results       |
| `/api/export/results`        | POST     | Export to CSV     |

### Test API
```bash
# Health check
curl http://localhost:8080/api/health

# Get train parameters
curl http://localhost:8080/api/parameters/train

# Update train parameters
curl -X POST http://localhost:8080/api/parameters/train \
  -H "Content-Type: application/json" \
  -d '{"trainId": "123", "name": "Test Train"}'
```

---

## 📁 Important Files

| File                                     | Purpose                 |
| ---------------------------------------- | ----------------------- |
| `build.sh`                               | Main build script       |
| `backend/main.cpp`                       | Application entry point |
| `backend/CMakeLists.txt`                 | Build configuration     |
| `backend/webengine/webengine_window.cpp` | Main window             |
| `frontend/src/app/page.tsx`              | Next.js home page       |
| `frontend/next.config.ts`                | Next.js config          |

---

## 🎯 Typical Day Workflow

### Morning Start
```bash
# From project root
git pull                # Get latest changes
./build.sh install      # Install any new dependencies (optional)
./build.sh              # Build and run everything!
```

### Making Changes

**Frontend changes:**
- Edit files in `frontend/src/`
- Save
- **Auto reload!** See changes instantly

**Backend changes:**
- Edit files in `backend/`
- Save
- Close Qt window
- Run `./build.sh` again
- Window reopens with changes

### End of Day
```bash
git add .
git commit -m "Your message"
git push
```

**Close the Qt window when done - everything stops automatically!**

---

## 💡 Pro Tips

### Quick Restart After Backend Changes
```bash
# If already built, just run:
./build.sh run
# Faster than full rebuild
```

### Development with Hot Reload
```bash
# Single command does it all:
./build.sh

# Frontend changes reload automatically
# Backend changes need restart (close window, run ./build.sh again)
```

### Production Testing
```bash
./build.sh prod
./backend/build/bin/TrainSimulationApp
```

### Work Efficiently
```bash
# Always work from root directory
# No need to cd anywhere!

# Edit frontend: frontend/src/file.tsx
# Edit backend:  backend/src/file.cpp
# Run:           ./build.sh
```

---

## 🚨 Emergency Commands

### Kill All Node Processes
```bash
pkill -9 node
```

### Kill Process on Port
```bash
# Kill process on port 8080
sudo kill $(sudo lsof -t -i:8080)

# Kill process on port 3000
sudo kill $(sudo lsof -t -i:3000)
```

### Reset Everything
```bash
# Nuclear option - clean everything
./build.sh clean
cd frontend
rm -rf node_modules .next
npm install
cd ..
./build.sh dev
```

---

## 📚 Documentation Files

- `README_WEBENGINE.md` - Full documentation
- `MIGRATION_GUIDE.md` - Migration guide
- `IMPLEMENTATION_SUMMARY.md` - What was done
- `QUICK_REFERENCE.md` - This file!

---

**Bookmark this page for quick access! 📌**
