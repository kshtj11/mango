import { closeRecents } from './transitions.js';

const recentsScroll = document.getElementById('recentsScroll');

let isRecentsDrag = false;
let rDragSX = 0, rStartX = 0, rStartY = 0, rScrollStart = 0;
let rVel = 0, rLastX = 0, rLastT = 0, rRaf = null;

export function isRecentsScrollDragging() { return isRecentsDrag; }

export function handleRecentsMove(e) {
  if (!isRecentsDrag) return;
  const now = performance.now();
  rVel = (rLastX - e.clientX) / (now - rLastT || 1) * 16;
  rLastX = e.clientX; rLastT = now;
  recentsScroll.scrollLeft = rScrollStart + (rDragSX - e.clientX);
}

export function handleRecentsUp(e) {
  if (!isRecentsDrag) return;
  isRecentsDrag = false;
  recentsScroll.classList.remove('dragging');
  const dx = Math.abs(e.clientX - rStartX);
  const dy = rStartY - e.clientY;
  if (dy > 50 && dy > dx) { closeRecents(); return; }
  rMomentum();
}

function rMomentum() {
  rVel *= 0.92;
  if (Math.abs(rVel) < 0.3) return;
  recentsScroll.scrollLeft += rVel;
  rRaf = requestAnimationFrame(rMomentum);
}

export function init() {
  recentsScroll.addEventListener('pointerdown', e => {
    isRecentsDrag = true;
    rDragSX = rStartX = e.clientX; rStartY = e.clientY;
    rScrollStart = recentsScroll.scrollLeft;
    rLastX = e.clientX; rLastT = performance.now(); rVel = 0;
    if (rRaf) cancelAnimationFrame(rRaf);
    recentsScroll.classList.add('dragging');
    e.preventDefault();
  });
}
