window.onload=function() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#'+burger.dataset.target);
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
}

function toggleModal(){
    var modal = document.querySelector('.modal');
    modal.classList.toggle('is-active');
}
  


