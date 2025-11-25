# Yengkong-ZTM-Quest

A customized and improved version of the ZTM Quest project. This version includes personal modifications, bug fixes, new features, and enhancements—including the brand-new in-game Help Overlay (press **H** in game).

## 🎮 Overview

Yengkong-ZTM-Quest is a JavaScript/Kaplay browser-based RPG built from the ZTM community project. This fork has been refined and personalized with new functionality while keeping the original game's structure.

## ✨ New Features Added

### Help / Controls Overlay

A custom in-game help menu that can be opened or closed using **H**, and dismissed with **ESC**.

* Displays movement and interaction controls
* Uses Kaplay UI components
* Appears on top of gameplay and stays fixed while the camera moves

### Future Planned Additions

* Additional map interactions
* More player feedback and UI elements
* Custom items or NPC dialogue

## 🚀 Tech Stack

* **JavaScript**
* **Kaplay (Kaboom) Game Engine**
* **Vite** dev environment
* **Tiled** for map creation

## 📂 Project Structure

```
src/
 ├── scenes/          # Map scenes, initialization, events
 ├── gameObjects/      # NPCs, chairs, computers, interactables
 ├── interactions/     # Interaction scripts
 ├── sounds/           # Map-specific audio
 ├── utils/            # Game utilities, state, helpers
 └── init/             # Map initialization
```

## 🛠️ Running Locally

```bash
npm install
npm run dev
```

The game will start on a local development server.

## 🔗 Original Project

This version is based on the open-source ZTM Quest community project.

## 📜 License

This project remains under the same license terms as the original ZTM Quest unless otherwise specified.

---

Feel free to modify, expand, or customize this README as your version of the project evolves.
