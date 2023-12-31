import mobileNav from './modules/mobile-nav.js';
mobileNav();

$(document).ready(function () {
  $('.about__desc-slider').slick({
    prevArrow:
      '<button class="slider__btn slider__btn-left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17" /></svg></button>',

    nextArrow:
      '<button class="slider__btn slider__btn-right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1" /></svg></button>',
    infinite: false,
  });
});

// accordeon
$(document).ready(function () {
  $('.questions__title').on('click', acc);
});

function acc() {
  const $paragraph = $(this).next('.questions__paragraph');
  const isActive = $(this).hasClass('active');

  $('.questions__paragraph').not($paragraph).slideUp(300);
  $paragraph.slideToggle(300);

  $('.questions__title').removeClass('active');
  if (!isActive) {
    $(this).addClass('active');
  }
}
