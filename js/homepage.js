import { goBackToAppList, openRecents } from './transitions.js';

function setupBottomZone(el, screenName) {
  let startX = 0, startY = 0, moved = false, timer = null;

  el.addEventListener('pointerdown', e => {
    startX = e.clientX; startY = e.clientY; moved = false;
    el.setPointerCapture(e.pointerId);
    timer = setTimeout(() => { if (!moved) openRecents(screenName); }, 500);
  });
  el.addEventListener('pointermove', e => {
    if (Math.abs(e.clientX - startX) > 8 || Math.abs(e.clientY - startY) > 8) {
      moved = true; clearTimeout(timer);
    }
  });
  el.addEventListener('pointerup', e => {
    clearTimeout(timer);
    if (startY - e.clientY > 30) openRecents(screenName);
  });
}

export function init() {
  const el = document.getElementById('homepage');
  let startX = 0;

  el.addEventListener('pointerdown', e => { startX = e.clientX; });
  el.addEventListener('pointerup',   e => { if (startX - e.clientX > 60) goBackToAppList(); });

  setupBottomZone(document.getElementById('home-bz'), 'homepage');
}

export { setupBottomZone };
