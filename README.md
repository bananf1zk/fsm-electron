# FSM Designer (Desktop Version)

This is a **desktop version** of the original [FSM Designer](http://madebyevan.com/fsm/) by [Evan Wallace](http://madebyevan.com/), repackaged using Electron to work fully offline on Windows.

> ✨ All credit for the original functionality, design, and interface goes to Evan Wallace.  
> 🛠 I have only adapted it into an installable desktop app for ease of use.

---

## 🖥 Features

- Create and edit finite state machines visually
- Use LaTeX-style inputs for Greek symbols (e.g. `\epsilon`, `\delta`, `\emptyset`)
- Export diagrams as SVG, PNG or Latex code
- Fully offline — no internet or browser needed
- Installer or portable `.zip` version available

---

## 📦 Installation

### Option 1: Prebuilt Installer (Windows)

1. Go to the [Releases page](https://github.com/bananf1zk/fsm-electron/releases)
2. Download and run `FSM Electron App Setup 1.0.0.exe`
3. Launch the app from the Start Menu or using the newly created shortcut

### Option 2: Portable Version

1. Download `portable.zip`
2. Extract it anywhere
3. Run `FSM Electron App.exe`

### Option 3: macOS / Linux / Source Build

Currently, prebuilt `.dmg` and `.deb` files are not provided.  
However, you can **build and run the app manually** from source:

```bash
git clone https://github.com/bananf1zk/fsm-electron.git
cd fsm-electron
npm install
```

To run it directly:
```bash
npm start
```

To generate a platform-specific installer:
```bash
npm run dist
```

This will output:
- `.dmg` for macOS
- `.AppImage` or `.deb` for Linux

> ⚠️ Make sure you have Node.js and npm installed. You do not need to install Electron globally — it is included as a dev dependency.