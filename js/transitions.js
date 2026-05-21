const lockscreen = document.getElementById('lockscreen');
const homescreen = document.getElementById('homescreen');
const homepage   = document.getElementById('homepage');
const recents    = document.getElementById('recents');

export let prevScreen = 'homepage';

export function goToAppList() {
  lockscreen.style.transform = 'translateY(-100%)';
  homescreen.style.transform = 'translateX(0)';
  homepage.style.transform   = 'translateX(-100%)';
}

export function goToHomepage() {
  homescreen.style.transform = 'translateX(100%)';
  homepage.style.transform   = 'translateX(0)';
}

export function goBackToAppList() {
  homescreen.style.transform = 'translateX(0)';
  homepage.style.transform   = 'translateX(-100%)';
}

export function openRecents(from) {
  prevScreen = from;
  recents.style.transform = 'translateY(0)';
}

export function closeRecents() {
  recents.style.transform = 'translateY(100%)';
}
