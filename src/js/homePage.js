const slide = document.querySelector('.slider');
const slideImg = document.querySelectorAll('.slider img');
const rightSide = document.querySelector('.right');
const ex1 = document.querySelector('.ex1');
const ex2 = document.querySelector('.ex2');
const ex3 = document.querySelector('.ex3');
const activeClass = document.querySelector('.activeX');

// Buttons
const prevBtn = document.querySelector('.arrowOne');
const nextBtn = document.querySelector('.arrowTwo');

// Counter
let counter = 1;
const size = rightSide.clientWidth;

// Media query
const mq = window.matchMedia( "(max-width: 900px)" );

if(mq.matches){
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    console.log('uslo u if ' + size);
} else{
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    console.log('uslo u else');
}

// Add class
function addClass(cnt) {
    if(counter === 2){
        ex2.classList.add('activeX');
        ex1.classList.remove('activeX');
        ex3.classList.remove('activeX');
    } else if(counter === 3 || counter === 0){
        ex1.classList.remove('activeX');
        ex3.classList.add('activeX');
        ex2.classList.remove('activeX');
    } else if (counter === 4 || counter === 1){
        ex3.classList.remove('activeX');
        ex2.classList.remove('activeX');
        ex1.classList.add('activeX');
    }
}

// Button listeners

nextBtn.addEventListener('click', () => {
    if(counter >= slideImg.length - 1) return;
    slide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    addClass(counter);
});

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    slide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    addClass(counter);
});

slide.addEventListener('transitionend', () => {
    if(slideImg[counter].id === 'lastClone'){
        slide.style.transition = 'none';
        counter = slideImg.length - 2;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(slideImg[counter].id === 'firstClone'){
        slide.style.transition = 'none';
        counter = slideImg.length - counter;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});
