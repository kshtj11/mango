# mango

OS launcher usability testing prototype. 480×480 fixed canvas, dark/minimal visual language, all interactions are swipe-based.

---

## Screens

| Screen | Description |
|---|---|
| **Lock** | Entry point. Dot-grid background, time + status bar. |
| **App List** | Fixed top dock + search bar + horizontally scrollable 2-row app grid + scrollbar. |
| **Homepage** | Dock screen — 4 icons pinned to bottom, large empty space above. |
| **Recents** | Cover-flow carousel of open app cards. |
| **Settings Drawer** | Quick-settings grid (slides in from top). |

---

## Navigation

```
Lock ──swipe up──► App List ◄──swipe left── Homepage
                      │
              swipe right (edge/scroll@0)
                      │
                      ▼
                  Homepage

Any screen (except lock) ──swipe down from top 30px──► Settings Drawer
                                                              │
                                                        swipe up
                                                              │
                                                           close

Homepage / App List ──swipe up from bottom 44px (or long press)──► Recents
                                                                        │
                                                        tap outside / swipe down
                                                                        │
                                                                     close
```

---

## Gesture Reference

| Gesture | Where | Action |
|---|---|---|
| Swipe up | Lock screen | Unlock → App List |
| Swipe right | Left 40px edge on App List | Go to Homepage |
| Swipe right | App grid when scrollLeft=0 | Go to Homepage |
| Swipe left | Homepage | Go to App List |
| Swipe down | Top 30px on App List / Homepage / Recents | Open Settings Drawer |
| Swipe up | Settings Drawer | Close Settings Drawer |
| Swipe up from bottom 44px | Homepage / App List | Open Recents |
| Long press bottom 44px | Homepage / App List | Open Recents |
| Drag left/right | Recents cards | Navigate between cards (cover flow) |
| Swipe down | Recents | Close Recents |
| Tap outside cards | Recents | Close Recents |
| Drag left/right | App grid | Scroll apps (momentum) |
