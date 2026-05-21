import { init as initLockscreen } from './lockscreen.js';
import { init as initHomepage }   from './homepage.js';
import { init as initHomescreen, handleScrollMove, handleScrollUp } from './homescreen.js';
import { init as initRecents, handleRecentsMove, handleRecentsUp } from './recents.js';

// Populate app grid
const grid = document.getElementById('appGrid');
for (let i = 0; i < 20; i++) {
  const el = document.createElement('div');
  el.className = 'app-icon';
  grid.appendChild(el);
}

// Init all screens
initLockscreen();
initHomepage();
initHomescreen();
initRecents();

// Single window-level pointer handlers, delegated to active module
window.addEventListener('pointermove', e => {
  handleScrollMove(e);
  handleRecentsMove(e);
});

window.addEventListener('pointerup', e => {
  handleScrollUp(e);
  handleRecentsUp(e);
});
