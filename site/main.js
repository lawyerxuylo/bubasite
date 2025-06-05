'use strict';

// выбор языка
let lang = document.getElementById('lang');

lang.onclick = function (e) {
    let content = lang.querySelector('.languages__content');
    let nav = content.querySelector('nav');

    let height = window.getComputedStyle(nav).height;
    let newHeight = Number(height.split('px')[0]) + 25;

    if (content.classList.contains('show')) {
        content.classList.remove('show');
        content.style.cssText = 'height: 0';
    }else{
        content.classList.add('show');
        content.style.cssText = `height: ${newHeight}px`;
    }
}

// меню для телефона
let menu = {
    button: document.getElementById('menu'),
    content: document.getElementById('menu-content'),
    // height() {
    //    return window.getComputedStyle(this.content.querySelector('.menu-content')).height
    // },
    // newHeight() { 
    //     return Number(this.height().split('px')[0]) + 25
    // },
    open(){
        this.button.classList.add('active');
        this.content.style.cssText = `height: 100vh`;
    },
    close(){
        this.button.classList.remove('active');
        this.content.style.cssText = 'height: 0';
    }
}

let menuButton = menu.button;
menuButton.onclick = function () {
    if (menuButton.classList.contains('active')) {
        menu.close();
    }else{
        menu.open();
    }
}

let menuContent = menu.content;
menuContent.onclick = function () {
    menu.close();
}



// slider
const slider = new Swiper('.slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
        return `<div class="slider-item__number ${className}"> 
                   ${(index < 10 ? '0' + (index + 1) : (index + 1))} 
                   <div class="slider-item-number__line"></div>
                </div>`;
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});