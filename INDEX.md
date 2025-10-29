# 📚 Documentation Index - Qt WebEngine + Next.js Monorepo

Welcome! This is your complete documentation package for Qt WebEngine + Next.js architecture.

## ⚡ FASTEST START (Recommended!)

**Want to just run it? Do this:**

1. **[SIMPLE_GUIDE.md](SIMPLE_GUIDE.md)** ← ONE PAGE, super simple!
2. Run: `sudo dnf install qt6-qtwebengine-devel`
3. Run: `./build.sh`
4. **Done!** 🎉

---

## 🎯 Complete Learning Path

**New to this project?** Read in this order:

1. **[SIMPLE_GUIDE.md](SIMPLE_GUIDE.md)** ← Start here! (5 min read)
   - One command workflow
   - Super simple explanation
   - No fluff, just essentials

2. **[START_HERE.md](START_HERE.md)** ← Quick start guide
   - Installation steps
   - First run
   - Success indicators

3. **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** ← Bookmark this!
   - Common commands
   - Daily workflows
   - Quick troubleshooting

4. **[UPDATED_WORKFLOW.md](UPDATED_WORKFLOW.md)** ← What changed
   - Old vs new workflow
   - Single command benefits
   - How it works

5. **[IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md)** ← Technical details
   - What was implemented
   - Why this architecture
   - Benefits overview

6. **[MIGRATION_GUIDE.md](MIGRATION_GUIDE.md)** ← Detailed setup
   - Step-by-step instructions
   - Configuration changes
   - Common issues & solutions

7. **[README_WEBENGINE.md](README_WEBENGINE.md)** ← Complete reference
   - Full documentation
   - API reference
   - Advanced topics

8. **[ARCHITECTURE.md](ARCHITECTURE.md)** ← Understanding the system
   - System architecture
   - Communication flow
   - Technology stack

## 📋 Documentation Quick Links

### Getting Started (FASTEST)
- **[SIMPLE_GUIDE.md](SIMPLE_GUIDE.md)** - One page, one command, done! ⭐
- **[START_HERE.md](START_HERE.md)** - Quick start (2 steps)
- **[UPDATED_WORKFLOW.md](UPDATED_WORKFLOW.md)** - New single command workflow

### Daily Use
- **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** - Commands cheat sheet (bookmark this!)
- [Build Commands](QUICK_REFERENCE.md#️-build-commands)
- [Development Workflow](QUICK_REFERENCE.md#-typical-day-workflow)
- [Debugging Tips](QUICK_REFERENCE.md#-debugging)

### Understanding the System
- [First Time Setup](MIGRATION_GUIDE.md#step-by-step-migration)
- [High-Level Overview](ARCHITECTURE.md#high-level-architecture)
- [Communication Flow](ARCHITECTURE.md#communication-flow)
- [File Structure](ARCHITECTURE.md#file-structure-map)
- [Technology Stack](ARCHITECTURE.md#technology-stack)

### Reference
- [API Endpoints](README_WEBENGINE.md#-api-endpoints)
- [Command Line Arguments](QUICK_REFERENCE.md#-run-commands)
- [Configuration Files](MIGRATION_GUIDE.md#frontend-configuration)

### Troubleshooting
- [Common Issues](QUICK_REFERENCE.md#-common-issues)
- [Emergency Commands](QUICK_REFERENCE.md#-emergency-commands)
- [Full Troubleshooting Guide](README_WEBENGINE.md#-troubleshooting)

## 📁 File Reference

### Documentation Files

| File                        | Purpose                | When to Read                            |
| --------------------------- | ---------------------- | --------------------------------------- |
| `IMPLEMENTATION_SUMMARY.md` | Overview of changes    | First time, to understand what was done |
| `MIGRATION_GUIDE.md`        | Step-by-step migration | When setting up for first time          |
| `QUICK_REFERENCE.md`        | Common commands        | Daily reference, bookmark this!         |
| `README_WEBENGINE.md`       | Complete documentation | When you need detailed info             |
| `ARCHITECTURE.md`           | System architecture    | To understand how it all works          |
| `INDEX.md`                  | This file              | Navigation hub                          |

### Code Files

| File                                     | Purpose                  |
| ---------------------------------------- | ------------------------ |
| `build.sh`                               | Main build script        |
| `backend/main.cpp`                       | Application entry point  |
| `backend/CMakeLists.txt`                 | Build configuration      |
| `backend/webengine/webengine_window.h`   | WebEngine window header  |
| `backend/webengine/webengine_window.cpp` | WebEngine implementation |
| `backend/http_server/http_server.cpp`    | HTTP server              |
| `backend/http_server/api_handler.cpp`    | API routing              |
| `frontend/next.config.ts`                | Next.js configuration    |

## 🚀 Common Tasks

### First Time Setup
```bash
# 1. Install Qt WebEngine
sudo dnf install qt6-qtwebengine-devel

# 2. Install frontend dependencies
cd frontend && npm install

# 3. Make build script executable
chmod +x build.sh

# 4. Build and run
./build.sh dev
```
📖 **More details:** [MIGRATION_GUIDE.md](MIGRATION_GUIDE.md#step-by-step-migration)

### Daily Development
```bash
# Terminal 1: Start Next.js dev server
cd frontend && npm run dev

# Terminal 2: Build and run Qt app
./build.sh dev
```
📖 **More details:** [QUICK_REFERENCE.md](QUICK_REFERENCE.md#development-hot-reload)

### Production Build
```bash
./build.sh prod
./backend/build/bin/TrainSimulationApp
```
📖 **More details:** [README_WEBENGINE.md](README_WEBENGINE.md#building-for-distribution)

### Testing API
```bash
# Health check
curl http://localhost:8080/api/health

# Get train parameters
curl http://localhost:8080/api/parameters/train
```
📖 **More details:** [QUICK_REFERENCE.md](QUICK_REFERENCE.md#-api-endpoints)

## 🎓 Learning Path

### Level 1: Beginner
**Goal:** Get the app running

1. Read [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md)
2. Follow [MIGRATION_GUIDE.md](MIGRATION_GUIDE.md) step-by-step
3. Run `./build.sh dev`
4. Test in browser: http://localhost:3000

### Level 2: Intermediate
**Goal:** Understand the architecture

1. Read [ARCHITECTURE.md](ARCHITECTURE.md)
2. Explore frontend code in `frontend/src/`
3. Explore backend code in `backend/`
4. Make a small change and rebuild

### Level 3: Advanced
**Goal:** Customize and extend

1. Read full [README_WEBENGINE.md](README_WEBENGINE.md)
2. Add new API endpoints
3. Create new React components
4. Build production release
5. Create AppImage for distribution

## ❓ FAQ

### What is Qt WebEngine?
Qt's embedded Chromium browser. It lets you embed web content (Next.js) in a Qt window.

📖 **More:** [ARCHITECTURE.md - Technology Stack](ARCHITECTURE.md#technology-stack)

### Do I still need Next.js dev server?
**For development:** Yes, for hot reload  
**For production:** No, use production build

📖 **More:** [README_WEBENGINE.md - Running Modes](README_WEBENGINE.md#-running-modes)

### How do I debug frontend issues?
Click "🔧 DevTools" button in the Qt app toolbar.

📖 **More:** [QUICK_REFERENCE.md - Debugging](QUICK_REFERENCE.md#-debugging)

### Can I deploy this as a web app?
Yes! Run backend in `--headless` mode and serve frontend separately.

📖 **More:** [ARCHITECTURE.md - Deployment Options](ARCHITECTURE.md#deployment-options)

### How is this different from Electron?
- Smaller binary (~50MB vs ~150MB)
- Better performance
- Native Qt integration
- Same development experience

📖 **More:** [IMPLEMENTATION_SUMMARY.md - Benefits](IMPLEMENTATION_SUMMARY.md#-benefits-you-get)

## 🔧 Troubleshooting Quick Access

| Problem                | Quick Fix                                            | Full Guide                                                            |
| ---------------------- | ---------------------------------------------------- | --------------------------------------------------------------------- |
| Qt WebEngine not found | `sudo dnf install qt6-qtwebengine-devel`             | [MIGRATION_GUIDE.md](MIGRATION_GUIDE.md#issue-qt-webengine-not-found) |
| Frontend won't load    | Check Next.js dev server is running                  | [QUICK_REFERENCE.md](QUICK_REFERENCE.md#frontend-wont-load)           |
| Build fails            | `./build.sh clean && ./build.sh dev`                 | [QUICK_REFERENCE.md](QUICK_REFERENCE.md#build-fails)                  |
| Port already in use    | `./backend/build/bin/TrainSimulationApp --port=9000` | [QUICK_REFERENCE.md](QUICK_REFERENCE.md#port-already-in-use)          |

## 📞 Getting Help

### Check Documentation
1. Search this INDEX for your topic
2. Check [QUICK_REFERENCE.md](QUICK_REFERENCE.md) for common commands
3. Check [README_WEBENGINE.md](README_WEBENGINE.md) for detailed info

### Still Stuck?
- Check [Common Issues](QUICK_REFERENCE.md#-common-issues)
- Review [Troubleshooting](README_WEBENGINE.md#-troubleshooting)
- Look at [Architecture diagrams](ARCHITECTURE.md)

### External Resources
- **Qt WebEngine**: https://doc.qt.io/qt-6/qtwebengine-index.html
- **Next.js**: https://nextjs.org/docs
- **Qt HttpServer**: https://doc.qt.io/qt-6/qthttpserver-index.html

## 🎯 Goals Checklist

Use this to track your progress:

- [ ] Read IMPLEMENTATION_SUMMARY.md
- [ ] Install Qt WebEngine
- [ ] Install frontend dependencies
- [ ] Run `./build.sh dev` successfully
- [ ] See Qt window with Next.js UI
- [ ] Test API endpoints
- [ ] Make a frontend change and see hot reload
- [ ] Make a backend change and rebuild
- [ ] Build production release
- [ ] Understand the architecture
- [ ] Bookmark QUICK_REFERENCE.md

## 📊 Documentation Stats

| Category            | Files | Purpose             |
| ------------------- | ----- | ------------------- |
| **Getting Started** | 2     | Setup and migration |
| **Reference**       | 2     | Commands and API    |
| **Architecture**    | 1     | System design       |
| **Code**            | 5+    | Implementation      |

**Total documentation pages:** 6  
**Estimated reading time:** 45 minutes  
**Estimated setup time:** 30 minutes

## 🎉 Success Indicators

You'll know you're set up correctly when:

✅ `./build.sh dev` runs without errors  
✅ Qt window opens showing your Next.js UI  
✅ You can click around in the UI  
✅ API calls work (check Network tab in DevTools)  
✅ You can reload the page with ⟳ button  
✅ DevTools open with 🔧 button

## 🚀 Next Steps After Setup

1. **Explore the UI**
   - Navigate through all pages
   - Test all features
   - Check console for errors

2. **Make Changes**
   - Edit a React component
   - See hot reload in action
   - Edit backend, rebuild, test

3. **Build Production**
   - Run `./build.sh prod`
   - Test the production build
   - Verify everything works

4. **Plan Deployment**
   - Decide: Desktop app or web app?
   - Follow deployment guide
   - Create installer/package

---

## 📝 Document Version

- **Version:** 1.0
- **Last Updated:** 2025-10-29
- **Status:** Complete
- **Maintained By:** Development Team

---

**Happy coding! 🚂💨**

*This documentation covers the complete Qt WebEngine + Next.js monorepo architecture.*
