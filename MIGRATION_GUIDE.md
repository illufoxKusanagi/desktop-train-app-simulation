# 🎯 Quick Migration Guide: From Current State to Qt WebEngine + Next.js

This guide shows you exactly what changes were made and what you need to do.

## ✅ What's Already Done

Your project structure is already very close! Here's what's in place:

```
✅ Separate backend/ and frontend/ directories
✅ Qt backend with HTTP server
✅ Next.js frontend
✅ REST API communication
✅ Development scripts
```

## 🔄 What Changed

### New Files Created

1. **`build.sh`** - Main build script
   - Replaces Electron-based build
   - Handles both frontend and backend builds
   - Provides dev/prod modes

2. **`backend/webengine/webengine_window.h`** - WebEngine window header
   - Embeds Next.js in Qt window
   - Manages backend server

3. **`backend/webengine/webengine_window.cpp`** - WebEngine implementation
   - Creates desktop window
   - Loads Next.js frontend
   - Handles navigation, devtools, etc.

4. **`README_WEBENGINE.md`** - Complete documentation

### Modified Files

1. **`backend/CMakeLists.txt`**
   - Added Qt WebEngine components
   - Added WebEngineWidgets and WebChannel
   - Linked new webengine source files

2. **`backend/main.cpp`**
   - Changed from `QCoreApplication` to `QApplication` for GUI mode
   - Added WebEngineWindow integration
   - Support for `--frontend=URL` argument
   - Dual mode: GUI (WebEngine) or headless (server only)

## 📋 Step-by-Step Migration

### Step 1: Install Qt WebEngine

```bash
# Fedora/Nobara (your system)
sudo dnf install qt6-qtwebengine-devel

# Verify installation
dnf list installed | grep qt6-qtwebengine
```

### Step 2: Test the Build

```bash
# From project root
./build.sh clean
./build.sh dev
```

**Expected output:**
```
🚂 Train Simulation App - Build System
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Checking Prerequisites
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ All prerequisites satisfied

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Building Frontend (Next.js)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Frontend build complete

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Building Backend (Qt + WebEngine)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Backend build complete

🎉 Development build complete!
Starting application...
```

### Step 3: Run in Development Mode

**Terminal 1** - Start Next.js dev server:
```bash
cd frontend
npm run dev
```

**Terminal 2** - Run Qt app:
```bash
./build.sh dev
```

The Qt window should open showing your Next.js frontend at `http://localhost:3000`.

### Step 4: Test Production Build

```bash
./build.sh prod
```

Then run:
```bash
./backend/build/bin/TrainSimulationApp
```

## 🔧 Configuration Changes Needed

### Frontend Configuration

Update `frontend/.env.local` (create if doesn't exist):

```bash
# API endpoint (Qt backend)
NEXT_PUBLIC_API_URL=http://localhost:8080

# Environment
NODE_ENV=development
```

### Remove Electron Dependencies

If you have any Electron-specific code in your frontend:

1. Remove from `frontend/package.json`:
```json
{
  "dependencies": {
    // Remove these if present:
    // "electron": "...",
    // "electron-builder": "..."
  }
}
```

2. Update API calls to use `http://localhost:8080` instead of IPC

### Update next.config.ts

Make sure `frontend/next.config.ts` doesn't have Electron-specific settings:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove 'output: export' if you don't need static HTML
  
  // API proxy (optional)
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8080/api/:path*",
      },
    ];
  },
};

export default nextConfig;
```

## 🎮 Usage Examples

### Development (Hot Reload)

```bash
# Terminal 1
cd frontend
npm run dev

# Terminal 2
./build.sh dev
```

### Production Build

```bash
./build.sh prod
./backend/build/bin/TrainSimulationApp
```

### Headless Backend Only

```bash
./backend/build/bin/TrainSimulationApp --headless --port=8080
```

### Custom Frontend URL

```bash
./backend/build/bin/TrainSimulationApp --frontend=http://localhost:5000
```

## ✨ New Features Available

### 1. Developer Tools

Click "🔧 DevTools" in the toolbar to open Chromium DevTools.

### 2. Reload

Click "⟳ Reload" to refresh the frontend without restarting the app.

### 3. About Dialog

Click "ℹ About" to see app information.

### 4. Status Bar

Bottom status bar shows loading progress and messages.

## 🐛 Common Issues & Solutions

### Issue: Qt WebEngine not found

**Error:**
```
CMake Error: find_package(Qt6 REQUIRED COMPONENTS WebEngineWidgets)
Could not find Qt6WebEngineWidgets
```

**Solution:**
```bash
sudo dnf install qt6-qtwebengine-devel
```

### Issue: Frontend won't load

**Error in Qt window:**
```
Failed to load frontend from: http://localhost:3000
```

**Solution:**
1. Make sure Next.js dev server is running:
   ```bash
   cd frontend && npm run dev
   ```
2. Check the URL is correct
3. Try opening `http://localhost:3000` in your browser first

### Issue: Build fails with linking errors

**Solution:**
```bash
./build.sh clean
cd backend/build
cmake .. -DCMAKE_BUILD_TYPE=Debug
cmake --build . --verbose
```

### Issue: Port 8080 already in use

**Error:**
```
❌ Failed to start server on port 8080
```

**Solution:**
```bash
# Find process using port 8080
sudo lsof -i :8080

# Kill it or use different port
./backend/build/bin/TrainSimulationApp --port=9000
```

## 📊 Comparison: Before vs After

| Aspect                 | Before (Electron) | After (Qt WebEngine)  |
| ---------------------- | ----------------- | --------------------- |
| **Container**          | Electron          | Qt WebEngine          |
| **Frontend**           | Next.js           | Next.js (same)        |
| **Backend**            | Qt HTTP Server    | Qt HTTP Server (same) |
| **Bundle Size**        | ~150MB+           | ~50MB                 |
| **Memory**             | ~200MB+           | ~100MB                |
| **Startup**            | Slower            | Faster                |
| **Native Integration** | Limited           | Full Qt integration   |
| **DevTools**           | Built-in          | Built-in (Chromium)   |

## 🎉 Benefits You Get

1. ✅ **Smaller binary** - No Electron overhead
2. ✅ **Better performance** - Native Qt rendering
3. ✅ **True desktop integration** - System dialogs, tray, etc.
4. ✅ **Same development experience** - Hot reload still works
5. ✅ **Full control** - Qt provides more control than Electron
6. ✅ **Modern UI** - Still using React/Next.js

## 🚀 Next Steps

1. **Test all features** in the new Qt WebEngine window
2. **Remove old Electron files** if any exist:
   ```bash
   rm -rf electron/
   rm package.json  # If it only had Electron deps
   ```
3. **Update deployment scripts** to use `build.sh`
4. **Create AppImage** or installer for distribution
5. **Update documentation** for your team

## 📚 Additional Resources

- **Qt WebEngine Docs**: https://doc.qt.io/qt-6/qtwebengine-index.html
- **Next.js Docs**: https://nextjs.org/docs
- **Qt HTTP Server**: https://doc.qt.io/qt-6/qthttpserver-index.html

---

**Ready to go! 🚂💨**

Run `./build.sh dev` and start developing!
