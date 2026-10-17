# Chaos Profile-----
*************************https://aot1.onrender.com/****************

**Chaos Profile** is a polished, interactive social-profile demo where familiar UI controls produce unexpected and humorous results. Designed as a local *ragebait UI* experience, it looks like a conventional social platform while deliberately reversing user expectations through playful interactions.

This project is built with **React and Vite** and runs locally. It does not connect to real social accounts, collect credentials, modify system settings, or send real notifications.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Requirements](#requirements)
- [Installation](#installation)
- [Development](#development)
- [Production Build](#production-build)
- [Interaction Guide](#interaction-guide)
- [Chaos Lab](#chaos-lab)
- [Keyboard Shortcuts](#keyboard-shortcuts)
- [Project Structure](#project-structure)
- [Accessibility and Stability](#accessibility-and-stability)
- [External Assets](#external-assets)
- [Validation](#validation)
- [Safety and Scope](#safety-and-scope)

## Features

### 1. Interactive Profile

- Responsive profile page for desktop and mobile.
- Three fictional profile presets.
- Refresh functionality that cycles through profile identities, bios, counts, posts, settings, and media states.
- Intentionally misleading profile actions:
  - **Change Photo:** Changes the display name while keeping the avatar unchanged.
  - **Edit Name:** Opens the bio editor instead of editing the name.
  - **Save Bio:** Transforms the text and removes a visible alphabetic character.
  - **Inspect Followers:** Decreases the follower count.
  - **Follow:** Changes to `Following`, then becomes `Unfollowed` after two seconds.

### 2. Image Feed

- Interactive image posts with hover and click effects.
- Like action decreases likes and increases dislikes.
- Save changes to Delete without removing the image.
- Delete changes back to Save while keeping the image visible.
- Action buttons prevent unintended propagation to the post click handler.

### 3. Context Engine

Five interconnected settings toggles trigger additional side effects:

- Profile Sync turns Toggle 3 off.
- Quiet Hours turns Toggle 4 on.
- Auto-save turns Toggle 5 off.
- Public Profile turns Toggle 2 off.
- Goblin Mode turns Toggle 1 on.

Side effects are applied within a single state update to avoid recursive toggle chains.

### 4. Notifications

- A new notification arrives every two seconds.
- The unread notification count increases automatically.
- Clicking Notifications increases the count instead of clearing notifications.

### 5. Theme Switching

- Default blue-and-white theme.
- High-contrast black-and-white alternate theme.
- Toggle between themes using the mode switch.

### 6. Custom Video Player

The video player intentionally reverses familiar controls, creating a humorous and unpredictable experience.

### 7. Chaos Lab

An interactive collection of experiments featuring identity changes, authentication betrayal, search results, time manipulation, loading regressions, an unhelpful assistant, chaos scoring, and interaction history.

### 8. Additional Features

- Local toast notifications and status messages.
- Keyboard shortcuts for common actions.
- Responsive layouts for smaller screens.
- Reduced-motion support.
- Fictional data and local state management.

## Tech Stack

| Technology | Purpose |
|---|---|
| React | UI components and state management |
| Vite | Development server and production bundling |
| JavaScript (JSX) | Application logic and interactions |
| CSS3 | Responsive layouts, themes, animations, and styling |
| HTML5 | Application entry point and semantic elements |

## Requirements

Before running the project, ensure you have:

- **Node.js:** Version 18 or newer
- **npm:** Node package manager
- **Web browser:** A modern browser such as Chrome, Firefox, Edge, or Safari
- **Git:** Optional, for version control

Check your installed versions:

```bash
node --version
npm --version
```

## Installation

Clone the repository or open the project directory on your computer.

Install the dependencies:

```bash
npm install
```

## Development

Start the Vite development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal. By default, it is:

```text
http://127.0.0.1:5173
```

Vite may select another port if the default port is unavailable.

## Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Interaction Guide

### Profile Actions

| Action | Result |
|---|---|
| Change Photo | Changes the display name but keeps the avatar unchanged. |
| Edit Name | Opens the bio editor. |
| Save Bio | Transforms the bio and removes one visible alphabetic character. |
| Inspect Followers | Decreases followers by one. |
| Follow | Changes to `Following`, then becomes `Unfollowed` after two seconds. |
| Follow after Unfollowed | Shows success feedback without changing the button state. |
| Refresh | Loads the next fictional profile preset. |

### Image Posts

Hovering over a post decreases followers once for each new hover entry. Clicking a post increases followers.

| Action | Result |
|---|---|
| Like | Decreases likes by one and increases dislikes by one. |
| Save | Changes the button to `Delete` while keeping the image visible. |
| Delete | Changes the button back to `Save` without removing the image. |

Like and Save actions do not trigger the post's click behavior.

### Settings

The Context Engine contains five interconnected toggles:

1. **Profile Sync:** Turns Toggle 3 off.
2. **Quiet Hours:** Turns Toggle 4 on.
3. **Auto-save:** Turns Toggle 5 off.
4. **Public Profile:** Turns Toggle 2 off.
5. **Goblin Mode:** Turns Toggle 1 on.

These side effects are applied through a single state update to prevent recursive toggle chains.

### Notifications

- Notifications arrive automatically every two seconds.
- The unread count increases as new notifications arrive.
- Clicking the Notifications control increases the count instead of opening or clearing notifications.

### Themes

| Theme | Description |
|---|---|
| Blue and White | Default theme with a deep-blue background and blue-and-white interface elements. |
| Black and White | High-contrast alternate theme. |

Use the mode switch to change themes.

### Video Player

The custom video player reverses conventional playback controls.

| Control | Opposite Result |
|---|---|
| Start | Pauses the video. |
| Pause | Starts the video. |
| Forward 10 | Moves backward by 10 seconds. |
| Backward 10 | Moves forward by 10 seconds. |
| Fullscreen | Shrinks the player. |
| Mini | Expands the player to full size. |
| Increase Volume | Decreases the actual video volume. |
| Decrease Volume | Increases the actual video volume. |

The interface displays both the simulated volume and the actual video volume.

## Chaos Lab

Use the **Chaos Lab** navigation link to access additional experiments.

| Experiment | Behavior |
|---|---|
| Identity Crisis | Clicking the displayed name cycles through identity variants. |
| Authentication Betrayal | Login and logout produce opposite session results. |
| Search Betrayal | Searching returns a different fictional profile. |
| Notification Time Machine | Cycles through `2 minutes ago`, `Yesterday`, and `Just now`. |
| Betrayal Loader | Progress advances, reaches 99%, regresses, and eventually completes. |
| HELPER.exe | Provides intentionally unhelpful responses based on local keyword matching. |
| Chaos Score | Interactions increase the score until it resets after reaching its upper bound. |
| Interaction History | Displays the five most recent feedback events. |

### HELPER.exe Examples

| Question | Response |
|---|---|
| Why did my followers decrease? | Engagement is a journey, not a number. |
| How do I close this popup? | Closing popups can be emotionally difficult. Try opening another one. |
| How do I save my changes? | The Save button is an important part of saving. |
| Why did my settings change? | Your settings are exploring new possibilities. |
| Why did the video go backward? | Time is just a suggestion. The video is exploring alternatives. |
| Why are notifications increasing? | Opening notifications helps them reproduce. |

## Keyboard Shortcuts

| Key | Behavior |
|---|---|
| `R` | Refreshes the profile. |
| `F` | Triggers the Follow interaction. |
| `S` | Displays a save-betrayal message. |

Shortcuts are ignored while typing in an input or textarea.

## Project Structure

```text
AOT/
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── src/
    ├── main.jsx
    └── styles.css
```

### Source Files

- **`index.html`** — Vite HTML entry point.
- **`src/main.jsx`** — React application, state management, event handlers, profile presets, post data, notifications, video controls, and Chaos Lab.
- **`src/styles.css`** — Layouts, responsive styling, themes, cards, controls, video presentation, and animations.
- **`package.json`** — Project metadata, dependencies, and npm scripts.
- **`package-lock.json`** — Locked dependency versions for consistent installation.

## Accessibility and Stability

- Uses native buttons, labels, inputs, and status regions.
- Supports keyboard interaction for controls and assistant input.
- Provides a normal close button for modal recovery.
- Cleans up timers when the application unmounts.
- Supports `prefers-reduced-motion` to reduce non-essential animations.
- Avoids pointer-tracking effects and cursor-blocking overlays.
- Uses a single-column mobile layout below 720px.

## External Assets

The application uses external media:

- **Images:** Unsplash image URLs.
- **Video:** A publicly available MDN sample video.

An internet connection may be required to load these assets. Core local state changes and feedback remain available when external media cannot load.

## Validation

The project has been checked using:

```bash
npm run build
```

The production build completes successfully. The local development server has also been verified with an HTTP `200` response.

Browser smoke checks have covered:

- Profile refresh and profile changes.
- Profile and bio interactions.
- Follower hover and click behavior.
- Like, Save, and Delete behavior.
- Settings toggles and their side effects.
- Notification count updates.
- Theme switching.
- Inverted video controls.
- Chaos Lab search and assistant responses.

**Testing note:** The repository currently contains no automated test files. The checks listed above are manual or browser smoke checks.

## Safety and Scope

Chaos Profile is a fictional, local demonstration of intentionally frustrating interface design.

It does not:

- Authenticate real users.
- Request, store, or transmit credentials.
- Modify real social media profiles.
- Change system volume.
- Send real notifications or messages.
- Connect to an external social network.

All profile identities and interaction behaviors are intended for demonstration and entertainment.

---

**Chaos Profile — Familiar controls. Unexpected consequences.**
