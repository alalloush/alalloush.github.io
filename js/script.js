/*
Burger Menu Script
Script to attach navbar to Burger Menu on smaller displays and toggles is-active
---
@since      10.6.2021
@author     @bradcomp @wicky-info
@source     https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
@source     https://gist.github.com/wicky-info/3ef6dfef7fe667ecb39df293ac6b9e5c
---
Description: Code was adapted and set to run on page load. It will add an event listener on the burger menu and toggle the menu. 
It also takes the items from the dataset which is linked to the navbar items (navbarMenu) and enables them as well.
*/
window.onload=function() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#'+burger.dataset.target);
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
}
  
/*
Language Changer Script
Script to switch language between English and German
---
@since 12.6.2021
@author @alalloush
---
Description: Code was adapted and set to run on page load. It will add an event listener on the burger menu and toggle the menu. 
It also takes the items from the dataset which is linked to the navbar items (navbarMenu) and enables them as well.
*/
function switchLang(){

    Array.from(document.querySelectorAll('[lang="de"]'))
    .forEach(el =>el.classList.toggle("is-hidden"))

    Array.from(document.querySelectorAll('[lang="en"]'))
    .forEach(el =>el.classList.toggle("is-hidden"))
}



/*
Smooth Scroll Script
Script to smoothly jump to any passed ID tag
---
@since      12.6.2021
@author     @alalloush
---
Description: Takes a parameter idTag and jumps to that location with smooth scrolling.
---
@param      idTag       HTML ID jump location     
*/
function SmoothScroll(idTag){
    var element = document.getElementById(idTag);
    element.scrollIntoView({behavior: 'smooth'})

}
