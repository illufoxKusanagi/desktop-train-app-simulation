# 🎯 Super Simple Guide - One Command to Rule Them All!

## What You Need to Know

### ✨ Everything runs from the ROOT directory
### ✨ ONE command does EVERYTHING

---

## First Time Setup (5 minutes)

```bash
# 1. Install Qt WebEngine (one time only)
sudo dnf install qt6-qtwebengine-devel

# 2. Make script executable (one time only)
chmod +x build.sh

# 3. Run everything!
./build.sh
```

**Done!** Qt window opens with your app inside.

---

## Every Day After That

```bash
# Just run this from root:
./build.sh
```

**That's literally it!** 🚀

---

## What Happens When You Run `./build.sh`

```
./build.sh
    │
    ├─> Installs frontend dependencies (if needed)
    │
    ├─> Builds Qt backend (C++)
    │
    ├─> Starts Next.js dev server (background)
    │
    ├─> Waits for frontend to be ready
    │
    └─> Opens Qt window with your UI
        (Frontend is embedded inside!)
```

---

## Making Changes

### Frontend Changes (React/Next.js)
```bash
1. Edit files in: frontend/src/
2. Save
3. ✨ Auto-reload! (See changes instantly)
```

### Backend Changes (Qt C++)
```bash
1. Edit files in: backend/
2. Save
3. Close the Qt window
4. Run: ./build.sh
5. Window reopens with your changes
```

---

## Other Useful Commands

```bash
# Install dependencies only
./build.sh install

# Just run (if already built, faster)
./build.sh run

# Build for production
./build.sh prod

# Clean everything and start fresh
./build.sh clean

# Show help
./build.sh help
```

---

## Stopping the App

**Just close the Qt window!**

Everything stops automatically:
- ✅ Frontend dev server stops
- ✅ Backend stops
- ✅ All processes cleaned up

---

## Folder Structure

```
📁 Your-Project/              <-- YOU ARE ALWAYS HERE!
│
├── 📄 build.sh               <-- THE MAGIC SCRIPT
│
├── 📁 backend/               <-- Qt C++ code
│   ├── main.cpp
│   ├── webengine/
│   ├── http_server/
│   └── ...
│
├── 📁 frontend/              <-- Next.js React code
│   ├── src/
│   │   ├── app/
│   │   └── components/
│   └── package.json
│
└── 📁 docs/                  <-- Documentation
    ├── START_HERE.md
    ├── QUICK_REFERENCE.md
    └── ...
```

**Never cd to subdirectories!** Everything runs from root.

---

## Common Questions

### Do I need two terminals?
**No!** Just one terminal, one command: `./build.sh`

### Do I need to install npm packages separately?
**No!** `./build.sh` does it automatically if needed.

### Do I need to start Next.js dev server manually?
**No!** `./build.sh` starts it in the background.

### What if I just want to run without rebuilding?
```bash
./build.sh run  # Faster, skips build
```

### How do I stop everything?
Close the Qt window. Everything stops automatically.

### Where do I run commands?
**Always from the project root directory!**

---

## Troubleshooting

### Build fails?
```bash
./build.sh clean
./build.sh
```

### Frontend won't load?
```bash
./build.sh clean
./build.sh
```

### Port already in use?
```bash
sudo kill $(sudo lsof -t -i:8080)
sudo kill $(sudo lsof -t -i:3000)
./build.sh
```

---

## Summary

```bash
# First time:
sudo dnf install qt6-qtwebengine-devel
chmod +x build.sh

# Every time after:
./build.sh

# That's it! 🎉
```

---

**One command. Root directory. Magic happens.** ✨

For more details, see [QUICK_REFERENCE.md](QUICK_REFERENCE.md)
