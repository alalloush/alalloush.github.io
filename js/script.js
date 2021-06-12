// Script to attach navbar to Burger Menu on smaller devices and toggles is-active
// @since 10.6.2021
// @author @bradcomp @wicky-info
// source https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
// source https://gist.github.com/wicky-info/3ef6dfef7fe667ecb39df293ac6b9e5c
//
// Description: Code was adapted and set to run on page load. It will add an event listener on the burger menu and toggle the menu. 
// It also takes the items from the dataset which is linked to the navbar items (navbarMenu) and enables them as well.


window.onload=function() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#'+burger.dataset.target);
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
}

//This toggles pop-up modal on off status. It is called from the Impressum and the close button for it.
function toggleModal(){
    var modal = document.querySelector('.modal');
    modal.classList.toggle('is-active');
}
  
//Language Switcher
function switchLang(){

    Array.from(document.querySelectorAll('[lang="de"]'))
    .forEach(el =>el.classList.toggle("is-hidden"))

    Array.from(document.querySelectorAll('[lang="en"]'))
    .forEach(el =>el.classList.toggle("is-hidden"))
}

//Jump to top of page

function jumper(location){
    var element = document.getElementById(location);
    element.scrollIntoView({behavior: 'smooth'})

}
