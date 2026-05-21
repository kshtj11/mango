// Populate app grid
const grid = document.getElementById('appGrid');
for (let i = 0; i < 20; i++) {
  const el = document.createElement('div');
  el.className = 'app-icon';
  grid.appendChild(el);
}

// Init all screens
M.initLockscreen();
M.initHomepage();
M.initHomescreen();
M.initRecents();

// Single window-level pointer handlers, delegated to active module
window.addEventListener('pointermove', e => {
  M._scrollMove(e);
  M._recentsMove(e);
});

window.addEventListener('pointerup', e => {
  M._scrollUp(e);
  M._recentsUp(e);
});
