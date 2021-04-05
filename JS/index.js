function disableScroll(){  
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function(){ window.scrollTo(x, y) };
}
function enableScroll(){  
    window.onscroll = null;
}
/*===== MENU SHOW Y HIDDEN =====*/ 
const navMenu = document.getElementById('nav__menu'),
      openMenu = document.getElementById('nav__menu--open'),
      closeMenu = document.getElementById('nav__menu--close');

/*SHOW*/ 
openMenu.addEventListener('click', (e)=>{
    navMenu.classList.toggle('show');
    window.addEventListener('scroll', disableScroll());

})

/*HIDDEN*/
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show');
    window.addEventListener('scroll', enableScroll());

})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__menu__item');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));  
  /*Remove menu mobile*/
  navMenu.classList.remove('show');
  window.addEventListener('scroll', enableScroll());
}
navLink.forEach(n => n.addEventListener('click', linkAction));

