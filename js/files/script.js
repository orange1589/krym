let mainBurger = document.getElementsByClassName('background-header__burger');
let mainMenu = document.getElementsByClassName('background-header__menu');
let mainColor = document.getElementsByClassName('background-header__color');

mainBurger[0].onclick = function () {
	mainBurger[0].classList.toggle('burger-active');
	mainMenu[0].classList.toggle('menu-active');
	mainColor[0].classList.toggle('color-active');
}