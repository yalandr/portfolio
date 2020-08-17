

/*==== Mobile Menu ============================*/

const menuBtn = document.querySelector('.mobile-menu-btn'),
 mobileMenu = document.querySelector('.mobile-menu'),
 menuClose = document.querySelector('.close-icon'),
 menuList = document.querySelector('.mobile-nav-list');

menuBtn.onclick = function() {
  mobileMenu.style.left = '0';
  menuClose.style.transform = 'rotate(90deg)';
}

menuClose.onclick = function() {
  mobileMenu.style.left = '-100%';
  menuClose.style.transform = 'rotate(-90deg)';
}

menuList.onclick = function(e) {
 if (e.target.classList.contains('mobile-menu-link')) {
  mobileMenu.style.left = '-100%';
  menuClose.style.transform = 'rotate(-90deg)';
 }
}

