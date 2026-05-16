# FocusFlow — Serene Productivity ☀️

A beautiful, neumorphic todo app built with React and Vite. Designed in [Google Stitch](https://stitch.withgoogle.com/) with the **"Serene Productivity"** design system — soft UI shadows, calm color palette, and tactile interactions that make task management feel like a zen garden.

## ✨ Features

- **Add / Complete / Delete / Archive tasks** — full task lifecycle
- **Categories** — Work, Personal, Health, Finance, Learning
- **Priority levels** — High, Medium, Low with color-coded badges
- **Scheduling** — Today, Tomorrow, This Week, Next Week
- **Search & Filter** — find tasks fast by name, category, or status
- **Dark Mode** — toggle between light and dark themes (persisted)
- **Progress Bar** — visual daily completion tracker
- **Stats Dashboard** — Total, Done, Pending, Archived at a glance
- **Responsive** — sidebar on desktop, bottom nav + hamburger on mobile
- **Local Storage** — tasks and theme preference persist across sessions
- **No backend / No login** — fully client-side, privacy-first

## 🎨 Design System

Built from the **Stitch "Serene Productivity"** design system:

| Token | Value |
|-------|-------|
| Font | Geist |
| Primary | `#005DA7` |
| Secondary (Success) | `#006D37` |
| Background | `#F5F7FA` |
| Surface | `#FFFFFF` |
| Radius | 8px (base), 12px (cards) |
| Style | Soft UI / Neumorphism |

### Neumorphic Principles
- **Raised elements**: dual shadow (light top-left, dark bottom-right)
- **Sunken elements**: inset shadows for inputs and active states
- **No hard borders**: separation through shadow-based extrusions
- **Soft checkboxes**: inset circles that "pop" into filled green on complete

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

App runs at `http://localhost:5173/`

## 📁 Project Structure

```
src/
├── App.jsx              # Main app — state, routing, layout
├── index.css            # Full design system (CSS custom properties)
├── main.jsx             # React entry point
└── components/
    ├── Sidebar.jsx      # Desktop sidebar with nav + theme toggle
    ├── MobileHeader.jsx # Mobile top bar (hamburger + logo + theme)
    ├── BottomNav.jsx    # Mobile bottom navigation
    ├── TaskList.jsx     # Task section renderer (Today/Upcoming)
    ├── TaskCard.jsx     # Individual task card with actions
    ├── AddTaskModal.jsx # New task form with chip selectors
    ├── ArchiveView.jsx  # Archived tasks view
    ├── SearchBar.jsx    # Neumorphic search input
    ├── FilterBar.jsx    # Category/status filter chips
    ├── StatsRow.jsx     # Stats overview cards
    └── ProgressBar.jsx  # Daily completion progress
```

## 🛠 Tech Stack

- **React 19** — UI framework
- **Vite 8** — build tool & dev server
- **Vanilla CSS** — custom properties + neumorphic design system
- **Material Icons Outlined** — icon set
- **Google Fonts (Geist)** — typography
- **LocalStorage** — persistence (no backend)

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| > 768px | Sidebar + main content |
| ≤ 768px | Hidden sidebar + hamburger + bottom nav |
| ≤ 480px | Compact modal + smaller headings |

## 🌙 Dark Mode

Toggle via sidebar (desktop) or header icon (mobile). Theme persists in localStorage. CSS custom properties swap all colors instantly — no flash on reload.

---

Made with 🪨 by caveman.
