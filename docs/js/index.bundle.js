!function(){"use strict";const t=document.querySelector(".header");function e(){const t=$(this).next(".questions__paragraph"),e=$(this).hasClass("active");$(".questions__paragraph").not(t).slideUp(300),t.slideToggle(300),$(".questions__title").removeClass("active"),e||$(this).addClass("active")}window.addEventListener("scroll",(function(){t.classList.toggle("sticky",window.scrollY>60)})),function(){const t=document.querySelector(".mobile-nav-btn"),e=document.querySelector(".header__nav"),n=document.querySelector(".nav-icon"),s=document.querySelectorAll("#nav-link");t.onclick=function(){e.classList.toggle("header__nav--open"),n.classList.toggle("nav-icon--active"),document.body.classList.toggle("no-scroll")},s.forEach((t=>{t.addEventListener("click",(function(){e.classList.remove("header__nav--open"),n.classList.remove("nav-icon--active"),document.body.classList.remove("no-scroll")}))}))}(),$(document).ready((function(){$(".about__desc-slider").slick({prevArrow:'<button class="slider__btn slider__btn-left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17" /></svg></button>',nextArrow:'<button class="slider__btn slider__btn-right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1" /></svg></button>',infinite:!1})})),$(document).ready((function(){$(".questions__title").on("click",e)}))}();