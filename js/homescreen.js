import { goToHomepage, openRecents } from './transitions.js';
import { setupBottomZone } from './homepage.js';

const scrollEl = document.getElementById('appScroll');
const thumb    = document.getElementById('scrollThumb');

let isDragging = false;
let dragSX = 0, scrollStart = 0, navStartScroll = 0;
let velocity = 0, lastX = 0, lastT = 0, raf = null;

export function syncScrollbar() {
  const { scrollLeft, scrollWidth, clientWidth } = scrollEl;
  const thumbPct = clientWidth / scrollWidth * 100;
  const leftPct  = scrollWidth > clientWidth
    ? (scrollLeft / (scrollWidth - clientWidth)) * (100 - thumbPct) : 0;
  thumb.style.width = thumbPct + '%';
  thumb.style.left  = leftPct + '%';
}

export function isScrollDragging() { return isDragging; }

export function handleScrollMove(e) {
  if (!isDragging) return;
  const now = performance.now();
  velocity = (lastX - e.clientX) / (now - lastT || 1) * 16;
  lastX = e.clientX; lastT = now;
  scrollEl.scrollLeft = scrollStart + (dragSX - e.clientX);
  syncScrollbar();
}

export function handleScrollUp(e) {
  if (!isDragging) return;
  isDragging = false;
  scrollEl.classList.remove('dragging');
  const dx = e.clientX - dragSX;
  if (navStartScroll === 0 && dx > 60) { goToHomepage(); return; }
  momentum();
}

function momentum() {
  velocity *= 0.92;
  if (Math.abs(velocity) < 0.3) return;
  scrollEl.scrollLeft += velocity;
  syncScrollbar();
  raf = requestAnimationFrame(momentum);
}

export function init() {
  // Edge zone: 40px left strip → swipe right to homepage
  const edgeZone = document.getElementById('edge-zone');
  let edgeSX = 0;
  edgeZone.addEventListener('pointerdown', e => { edgeSX = e.clientX; edgeZone.setPointerCapture(e.pointerId); });
  edgeZone.addEventListener('pointerup',   e => { if (e.clientX - edgeSX > 40) goToHomepage(); });

  // App scroll drag
  scrollEl.addEventListener('pointerdown', e => {
    isDragging = true;
    dragSX = e.clientX; scrollStart = navStartScroll = scrollEl.scrollLeft;
    lastX = e.clientX; lastT = performance.now(); velocity = 0;
    if (raf) cancelAnimationFrame(raf);
    scrollEl.classList.add('dragging');
    e.preventDefault();
  });

  scrollEl.addEventListener('scroll', syncScrollbar);
  requestAnimationFrame(syncScrollbar);

  setupBottomZone(document.getElementById('list-bz'), 'homescreen');
}
