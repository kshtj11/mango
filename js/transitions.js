window.M = window.M || {};

M.prevScreen = 'homepage';

M.goToAppList = function() {
  document.getElementById('lockscreen').style.transform = 'translateY(-100%)';
  document.getElementById('homescreen').style.transform = 'translateX(0)';
  document.getElementById('homepage').style.transform   = 'translateX(-100%)';
};

M.goToHomepage = function() {
  document.getElementById('homescreen').style.transform = 'translateX(100%)';
  document.getElementById('homepage').style.transform   = 'translateX(0)';
};

M.goBackToAppList = function() {
  document.getElementById('homescreen').style.transform = 'translateX(0)';
  document.getElementById('homepage').style.transform   = 'translateX(-100%)';
};

M.openRecents = function(from) {
  M.prevScreen = from;
  document.getElementById('recents').style.transform = 'translateY(0)';
};

M.closeRecents = function() {
  document.getElementById('recents').style.transform = 'translateY(100%)';
};
