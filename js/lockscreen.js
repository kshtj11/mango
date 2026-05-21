import { goToAppList } from './transitions.js';

export function init() {
  const el = document.getElementById('lockscreen');
  let startY = 0;

  el.addEventListener('mousedown',  e => { startY = e.clientY; });
  el.addEventListener('mouseup',    e => { if (startY - e.clientY > 20) goToAppList(); });
  el.addEventListener('touchstart', e => { startY = e.touches[0].clientY; }, { passive: true });
  el.addEventListener('touchend',   e => { if (startY - e.changedTouches[0].clientY > 20) goToAppList(); });
}
