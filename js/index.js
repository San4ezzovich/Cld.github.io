"use strict";

let burger = document.querySelector('.burger');
let search = document.querySelector(".search");
let headerList = document.querySelector(".header__list");
let headerListItem = document.querySelectorAll(".nav__link");

burger.addEventListener("click", () =>{
  burger.classList.toggle('open');
  headerList.classList.toggle('open');
  document.body.classList.toggle('stop-scroll');
  document.addEventListener( 'click', (e) => {
    const withinBoundaries = e.composedPath().includes(headerList);
    const withinBoundaries1 = e.composedPath().includes(burger);
    if ( ! withinBoundaries && ! withinBoundaries1 ) {
      burger.classList.remove('open');
      headerList.classList.remove('open');
      document.body.classList.remove('stop-scroll');
    }
  })
});
headerListItem.forEach((e) => {
  e.addEventListener("click",() =>{
    burger.classList.remove('open');
    headerList.classList.remove('open');
    document.body.classList.remove('stop-scroll');
  })
});

let searchBtn = document.querySelector(".search-icon");
let headerLogo = document.querySelector(".header__logo");

searchBtn.onclick = () => {
  search.classList.toggle('open');
  headerLogo.classList.toggle('open');
  document.addEventListener( 'click', (e) => {
    const withinBoundaries = e.composedPath().includes(search);
    const withinBoundaries1 = e.composedPath().includes(searchBtn);
    if ( ! withinBoundaries && ! withinBoundaries1 ) {
      search.classList.remove('open');
      headerLogo.classList.remove('open');

    }
  })
};


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows


  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay: {
   delay:3000,
 },
});
let howItem = document.querySelectorAll(".how-item__link");
let howImg = document.querySelectorAll(".how__background");
let howTitle = document.querySelectorAll(".how-body__title");
let howDescr = document.querySelectorAll(".how-body-descr");
howItem.forEach((element) => {
  element.addEventListener("click", (e) => {
    let path = e.currentTarget.dataset.path;
    howItem.forEach(el=>{el.classList.remove("active")});
    e.currentTarget.classList.add("active");
    howImg.forEach((el)=>{el.classList.remove("active")});
    howTitle.forEach((el)=>{el.classList.remove("active")});
    howDescr.forEach((el)=>{el.classList.remove("active")});
    document.querySelector(`.how__background[data-target="${path}"]`).classList.add("active");
    document.querySelector(`.how-body__title[data-target="${path}"]`).classList.add("active");
    document.querySelector(`.how-body-descr[data-target="${path}"]`).classList.add("active");
  });
});
$("#my-accordion").accordionjs({
    // Allow self close.(data-close-able)
    closeAble   : false,

    // Close other sections.(data-close-other)
    closeOther  : true,

    // Animation Speed.(data-slide-speed)
    slideSpeed  : 150,

    // The section open on first init. A number from 1 to X or false.(data-active-index)
    activeIndex : false,

    // Callback when a section is open
    openSection: function(section){
    },

    // Callback before a section is open
    beforeOpenSection: function( section ){},
});
