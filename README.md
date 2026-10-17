# Chaos Profile

**Chaos Profile** is an interactive profile-page demo where familiar interface controls deliberately produce unexpected results. It presents a polished social-profile experience while turning ordinary actions into bounded, reversible “opposite” interactions.

The project is built as a local React/Vite demonstration. It does not connect to real accounts, store credentials, modify system settings, or send external messages.

## Highlights

- Premium profile UI with responsive desktop and mobile layouts.
- Three fictional profile presets.
- Deterministic refresh behavior that changes the profile identity and counts.
- Interactive image feed with contradictory like, dislike, save, and delete behavior.
- Custom video player with inverted controls.
- Five settings toggles with different side-effect relationships.
- Automatic notifications every two seconds.
- Blue-and-white theme with a high-contrast black-and-white mode.
- Chaos Lab with identity cycling, inverted authentication, search betrayal, time-machine timestamps, loading regression, a local unhelpful assistant, chaos scoring, and interaction history.
- Keyboard shortcuts: `R` refreshes the profile, `F` triggers Follow, and `S` produces a save betrayal.
- Animated UI feedback, toast messages, and context-aware reactions.
- All state is local to the current browser session.

## Requirements

- Node.js 18 or newer
- npm
- A modern browser

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local site:

```text
http://127.0.0.1:5173
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Main Interactions

### Profile controls

| Control | Opposite behavior |
| --- | --- |
| Change Photo | Keeps the avatar unchanged but changes the display name. |
| Edit Name | Opens the bio editor instead. |
| Save bio | Applies a humorous transformation and removes a visible alphabetic character. |
| Inspect followers | Decreases the follower count by one. |
| Follow | Changes to `Following`, then becomes `Unfollowed` after two seconds. |
| Click Follow after that | Shows success feedback without changing the underlying state. |

### Image feed

Each post contains an image and local interaction state.

- Hovering a post decreases the follower count by one.
- The same post only triggers one follower decrease per hover entry.
- Clicking the post increases the follower count by one.
- Clicking Like decreases the like count and increases the disliked count.
- Clicking Save keeps the image visible and changes the action to Delete.
- Clicking Delete changes the action back to Save and removes the saved state.
- Clicking Like or Save does not also trigger the post-level click action.

### Settings toggles

The Context Engine contains five toggles:

1. **Profile sync** — turns Toggle 3 off.
2. **Quiet hours** — turns Toggle 4 on.
3. **Auto-save** — turns Toggle 5 off.
4. **Public profile** — turns Toggle 2 off.
5. **Goblin mode** — turns Toggle 1 on.

Each interaction is applied as one state update to avoid recursive toggle chains.

### Notifications

- A new notification is announced every two seconds.
- The unread count increases automatically.
- Clicking Notifications increases the unread count instead of opening or clearing notifications.

### Theme switcher

- The default theme uses blue and white accents on a deep blue background.
- Switching modes changes to a black-and-white high-contrast theme.
- Switching again returns to the blue-and-white theme.

### Video player

The custom local-demo player intentionally reverses familiar controls:

| Control | Result |
| --- | --- |
| Start | Pauses the video. |
| Pause | Starts the video. |
| Forward 10 | Moves backward 10 seconds. |
| Backward 10 | Moves forward 10 seconds. |
| Fullscreen | Shrinks the player to the small layout. |
| Mini | Expands the player to full size. |
| Increase displayed volume | Decreases actual video volume. |
| Decrease displayed volume | Increases actual video volume. |

The player displays both the requested volume and the simulated actual volume.

### Refresh

The `↻ Refresh` button cycles through three fictional profiles:

- Alex Morgan
- Jamie Chen
- Riley Stone

Refreshing changes the current name, bio, follower count, following count, post count, completion percentage, notification state, post counts, settings, follow state, and video presentation state.

### Chaos Lab

The Chaos Lab adds several focused demonstration controls:

- Clicking the profile name cycles through identity variants.
- Log in and Log out invert the displayed session result.
- Search returns a different fictional profile.
- Notification timestamps cycle without changing the notification.
- The loading bar advances to 99%, regresses, and eventually completes.
- `HELPER.exe` responds with local, deterministic unhelpful advice.
- A chaos score and five-entry interaction history summarize the current session.

## Project Structure

```text
.
├── index.html
├── package.json
└── src
    ├── main.jsx
    └── styles.css
```

### `src/main.jsx`

Contains the React application, local state, event handlers, profile presets, post data, video controls, notification timer, and modal behavior.

### `src/styles.css`

Contains the visual system, responsive layouts, themes, cards, custom controls, video player, animations, and reduced-motion rules.

## Design and Accessibility Notes

- Interactive controls use native buttons and labels.
- The notification banner and video feedback use status messaging.
- The Goblin character uses an accessible image role when enabled in the component.
- Animations are bounded and event-driven.
- `prefers-reduced-motion: reduce` disables non-essential animation and transitions.
- The layout switches to a single-column mobile layout below 720px.
- No pointer-tracking animation or cursor-blocking overlay is used.

## External Demo Assets

The image feed uses Unsplash image URLs, and the video player uses a public MDN sample video. An internet connection may be required for those assets to load.

The app remains functional if external media is unavailable: controls still update local state and feedback messages.

## Validation

The current project has been validated with:

```bash
npm run build
```

The production build completes successfully, and the local development server responds with HTTP `200`.

There are currently no automated test files in the repository. Browser smoke checks have been used for the primary interactions, including:

- Theme switching
- Refresh profile changes
- Image like/save behavior
- Notification count behavior
- Five-toggle visibility and side effects
- Video size inversion
- Inverted Start/Pause behavior

## Scope and Safety

This is a fictional local interaction demo. It does not:

- Authenticate users.
- Request or store credentials.
- Modify real profile data.
- Change the computer’s system volume.
- Send notifications or messages.
- Connect to a social network.
