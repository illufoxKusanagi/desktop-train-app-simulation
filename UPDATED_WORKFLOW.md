# ✅ UPDATED - Single Command Workflow

## 🎉 What Changed

Your project now has a **SINGLE COMMAND** workflow!

### Before (Old Way)
```bash
# Terminal 1
cd frontend
npm install
npm run dev

# Terminal 2
cd backend
mkdir build && cd build
cmake ..
make
./TrainSimulationApp
```
😰 Multiple terminals, multiple commands, confusing!

### After (New Way)
```bash
# From root directory:
./build.sh
```
🎉 **ONE COMMAND!** Everything runs automatically!

---

## 🚀 How to Use

### First Time Setup
```bash
# 1. Install Qt WebEngine (one time)
sudo dnf install qt6-qtwebengine-devel

# 2. Run everything!
./build.sh
```

### Every Day After
```bash
./build.sh
```

**That's it!** No need to:
- ❌ cd to subdirectories
- ❌ Install npm packages manually
- ❌ Start Next.js server separately
- ❌ Use multiple terminals
- ❌ Remember complex commands

---

## 📋 Available Commands

All from root directory:

```bash
./build.sh              # Build and run (DEFAULT) ⭐
./build.sh dev          # Same as above
./build.sh install      # Install dependencies only
./build.sh run          # Just run (skip build)
./build.sh prod         # Build production
./build.sh clean        # Clean all builds
./build.sh help         # Show help
```

---

## 🎯 What `./build.sh` Does

1. ✅ Checks prerequisites (cmake, node, npm)
2. ✅ Installs frontend dependencies (if needed)
3. ✅ Builds Qt backend (C++)
4. ✅ Starts Next.js dev server (background)
5. ✅ Waits for frontend to be ready
6. ✅ Opens Qt window with embedded UI
7. ✅ Enables hot reload for frontend changes
8. ✅ Cleans up automatically when you close the window

---

## 🔄 Development Workflow

### Making Frontend Changes
```bash
1. Run: ./build.sh
2. Edit files in: frontend/src/
3. Save
4. ✨ Changes appear instantly (hot reload)
```

### Making Backend Changes
```bash
1. Edit files in: backend/
2. Save
3. Close Qt window
4. Run: ./build.sh
5. Window reopens with changes
```

---

## 📁 Project Structure

```
Your-Project/                  <-- ALWAYS RUN COMMANDS FROM HERE
│
├── build.sh                   <-- THE MAIN SCRIPT ⭐
│
├── backend/                   <-- Qt C++ backend
│   ├── main.cpp
│   ├── CMakeLists.txt
│   ├── webengine/
│   ├── http_server/
│   └── ...
│
├── frontend/                  <-- Next.js frontend
│   ├── src/
│   ├── package.json
│   └── ...
│
└── docs/
    ├── START_HERE.md          <-- Quick start
    ├── SIMPLE_GUIDE.md        <-- Super simple guide
    ├── QUICK_REFERENCE.md     <-- Daily reference
    └── ...
```

---

## ✨ Key Benefits

| Feature                     | Status |
| --------------------------- | ------ |
| Single command to run       | ✅ Yes  |
| Runs from root directory    | ✅ Yes  |
| Auto installs dependencies  | ✅ Yes  |
| Auto starts frontend server | ✅ Yes  |
| Hot reload for frontend     | ✅ Yes  |
| Auto cleanup on exit        | ✅ Yes  |
| One terminal needed         | ✅ Yes  |
| Simple to use               | ✅ Yes  |

---

## 🐛 Troubleshooting

### Build fails?
```bash
./build.sh clean
./build.sh
```

### Port conflict?
```bash
sudo kill $(sudo lsof -t -i:8080)
sudo kill $(sudo lsof -t -i:3000)
./build.sh
```

### Need to reset everything?
```bash
./build.sh clean
rm -rf frontend/node_modules
./build.sh
```

---

## 📚 Documentation

- **[SIMPLE_GUIDE.md](SIMPLE_GUIDE.md)** - Super simple one-pager
- **[START_HERE.md](START_HERE.md)** - Quick start guide
- **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** - Command reference
- **[INDEX.md](INDEX.md)** - Documentation hub

---

## 🎊 Summary

```bash
# Everything you need:
sudo dnf install qt6-qtwebengine-devel  # One time
./build.sh                               # Every time

# That's it! 🚀
```

**No complex setup. No multiple terminals. Just one command.** ✨

---

**Happy coding! 🚂💨**
