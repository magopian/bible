var menu = document.getElementsByTagName('nav')[0];
var previousScrollY = window.scrollY;

window.addEventListener('scroll', function() {
  var currentScrollY = window.scrollY;
  if ((previousScrollY > currentScrollY) && (menu.className == '')) {
    // Scrolling up: show menu.
    menu.className = 'show';
  } else if ((previousScrollY < currentScrollY) && (menu.className == 'show')) {
    // Scrolling down: hide menu.
    menu.className = '';
  }
  previousScrollY = currentScrollY;
});
