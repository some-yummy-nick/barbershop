(function () {
  var navMain = document.querySelector('.menu');
  var navToggle = document.querySelector('.menu__toggle');
  var menuEnter = document.querySelector('.menu__user');
  navMain.classList.remove('menu--nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('menu--closed')) {
      navMain.classList.remove('menu--closed');
      navMain.classList.add('menu--opened');
      menuEnter.classList.add('menu__user--mobile');
    } else {
      navMain.classList.add('menu--closed');
      navMain.classList.remove('menu--opened');
      menuEnter.classList.remove('menu__user--mobile');
    }
  });

})();

(function ($) {
  $('.menu__link').each(function () {
    var location = window.location.href;
    var link = this.href;
    if (location == link) {
      $(this).parent().addClass('menu__item--active');
      $(this).removeAttr('href');
    } else {
      $(this).parents().removeClass('menu__item--active');
    }
  });
}(jQuery));

(function () {
  var login = document.querySelector('.menu__user');
  var loginForm = document.querySelector('.popup');
  var loginClose = document.querySelector('.login__btn--close');

  login.addEventListener('click', function (e) {
    loginForm.style.display = 'block';
    e.preventDefault();
  });
  loginClose.addEventListener('click', function () {
    loginForm.style.display = 'none';

  })
})();
