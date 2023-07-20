const header = document.querySelector('.header');
window.addEventListener('scroll', function () {
  header.classList.toggle('sticky', window.scrollY > 60);
});

function mobileNav() {
  // Mobile nav button
  const navBtn = document.querySelector('.mobile-nav-btn');
  const nav = document.querySelector('.header__nav');
  const menuIcon = document.querySelector('.nav-icon');
  const navItems = document.querySelectorAll('#nav-link');

  navBtn.onclick = function () {
    nav.classList.toggle('header__nav--open');
    menuIcon.classList.toggle('nav-icon--active');
    document.body.classList.toggle('no-scroll');
  };
  navItems.forEach((item) => {
    item.addEventListener('click', function () {
      nav.classList.remove('header__nav--open');
      menuIcon.classList.remove('nav-icon--active');
      document.body.classList.remove('no-scroll');
    });
  });
}
export default mobileNav;
