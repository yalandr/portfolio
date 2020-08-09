/*==== Mobile Menu ============================*/

let menuBtn = document.querySelector('.mobile-menu-btn'),
	mobileMenu = document.querySelector('.mobile-menu'),
	menuClose = document.querySelector('.close-icon'),
	menuLink = document.getElementsByClassName('mobile-menu-link');

menuBtn.onclick = function() {
	 mobileMenu.style.left = '0';
}

menuClose.onclick = function() {
	 mobileMenu.style.left = '-100%';
}

menuLink.onclick = function() {
	 mobileMenu.style.left = '-100%';
}
