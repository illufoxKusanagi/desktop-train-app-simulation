# 🚂 START HERE - Qt WebEngine + Next.js Train Simulation

## 👋 Welcome!

You're about to use **Qt WebEngine + Next.js** architecture. This gives you:

- ✅ **Native desktop app** (Qt container)
- ✅ **Modern web UI** (React/Next.js)
- ✅ **Better performance** (smaller, faster)
- ✅ **Same dev experience** (hot reload works!)

## 🎯 Quick Start (2 Steps, 5 Minutes)

### 1️⃣ Install Qt WebEngine

```bash
sudo dnf install qt6-qtwebengine-devel
```

### 2️⃣ Run Everything with ONE Command!

```bash
# From project root - this does EVERYTHING!
./build.sh
```

That's it! This single command will:
- ✅ Install frontend dependencies (if needed)
- ✅ Build the backend (Qt C++)
- ✅ Start Next.js dev server
- ✅ Open the Qt desktop window with your UI

## ✅ Success Indicators

You'll know it works when:
- ✅ Qt window opens automatically
- ✅ Next.js UI loads inside
- ✅ Can click around and interact
- ✅ Toolbar shows [⟳ Reload] [🔧 DevTools] [ℹ About]

**Congratulations! 🎉**

## 🚀 All Commands (from root directory)

```bash
# MOST COMMON - Run everything!
./build.sh              # Build and run (ONE COMMAND!)
./build.sh dev          # Same as above

# Other useful commands
./build.sh install      # Install dependencies only
./build.sh run          # Run without rebuilding
./build.sh prod         # Build for production
./build.sh clean        # Clean all builds
```

**You NEVER need to `cd` anywhere!** Everything runs from root.

## 📚 Documentation Guide

Start with these in order:

1. **You are here** → `START_HERE.md`
2. **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** → Bookmark this!
3. **[INDEX.md](INDEX.md)** → Documentation hub
4. **[MIGRATION_GUIDE.md](MIGRATION_GUIDE.md)** → Detailed guide
5. **[ARCHITECTURE.md](ARCHITECTURE.md)** → How it works

## 🐛 Quick Troubleshooting

| Problem                | Solution                                         |
| ---------------------- | ------------------------------------------------ |
| Qt WebEngine not found | `sudo dnf install qt6-qtwebengine-devel`         |
| Frontend won't load    | Make sure `npm run dev` is running in Terminal 1 |
| Build errors           | `./build.sh clean && ./build.sh dev`             |
| Port 8080 in use       | `sudo kill $(sudo lsof -t -i:8080)`              |

## 🎮 Daily Workflow

```bash
# Terminal 1 - Frontend (keep running)
cd frontend
npm run dev

# Terminal 2 - Backend
./build.sh dev
```

Changes in `frontend/src/` → **hot reload automatically!**  
Changes in `backend/` → **rebuild and restart**

## 🏗️ Architecture at a Glance

```
┌────────────────────────────────┐
│   Qt Desktop Window            │
│  ┌──────────────────────────┐  │
│  │  Qt WebEngine            │  │
│  │ ┌────────────────────┐   │  │
│  │ │  Next.js (React)   │   │  │
│  │ └────────────────────┘   │  │
│  └──────────────────────────┘  │
│          ↕ HTTP API             │
│  ┌──────────────────────────┐  │
│  │  C++ Backend (Port 8080) │  │
│  └──────────────────────────┘  │
└────────────────────────────────┘
```

## 💡 Useful Commands

**All from root directory:**

```bash
./build.sh              # Build and run (DEFAULT)
./build.sh dev          # Same as above
./build.sh install      # Install dependencies only
./build.sh run          # Just run (if already built)
./build.sh prod         # Build production release
./build.sh clean        # Clean all builds
./build.sh help         # Show help
```

## 🎯 Next Steps

1. ✅ Run `sudo dnf install qt6-qtwebengine-devel`
2. ✅ Run `./build.sh` from root directory
3. ✅ Qt window opens with your UI!
4. ✅ Explore the app
5. ✅ Read [QUICK_REFERENCE.md](QUICK_REFERENCE.md)

---

**Ready? Just run this:**

```bash
# Install Qt WebEngine (one time only)
sudo dnf install qt6-qtwebengine-devel

# Run everything! (from root directory)
./build.sh
```

**That's literally it!** 🚀

---

**Questions?** → [INDEX.md](INDEX.md)  
**Daily reference?** → [QUICK_REFERENCE.md](QUICK_REFERENCE.md)  
**Detailed setup?** → [MIGRATION_GUIDE.md](MIGRATION_GUIDE.md)

**Happy coding! 🚂💨**
