

/*==== Mobile Menu ============================*/

let menuBtn = document.querySelector('.mobile-menu-btn'),
	mobileMenu = document.querySelector('.mobile-menu'),
	menuClose = document.querySelector('.close-icon'),
	mobileMenuItem = document.querySelectorAll('.mobile-nav-item');
	

menuBtn.onclick = function() {
	 mobileMenu.style.left = '0';
}

menuClose.onclick = function() {
	 mobileMenu.style.left = '-100%';
}

mobileMenuItem.onclick = function() {
	mobileMenu.style.left = '-100%';
}

/*==== Skills Option ==========================*/

