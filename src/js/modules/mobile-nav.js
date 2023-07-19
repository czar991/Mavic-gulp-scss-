const header = document.querySelector('.header');
window.addEventListener('scroll', function () {
  header.classList.toggle('sticky', window.scrollY > 60);
});

function mobileNav() {
  // Mobile nav button
  const navBtn = document.querySelector('.mobile-nav-btn');
  const nav = document.querySelector('.header__nav');
  const menuIcon = document.querySelector('.nav-icon');

  navBtn.onclick = function () {
    nav.classList.toggle('header__nav--open');
    menuIcon.classList.toggle('nav-icon--active');
    document.body.classList.toggle('no-scroll');
    if (header.classList.contains('sticky')) {
      header.classList.toggle('sticky');
    }
  };
}

export default mobileNav;
