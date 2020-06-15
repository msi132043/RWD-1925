//Sidebar_menu Hide, Show, Toggle

$('.hide').click(function () {
  $('.sidebar_menu').slideUp(500);
});


$('.show').click(function () {
  $('.sidebar_menu').slideDown(500);
});


$('.toggle').click(function () {
  $('.sidebar_menu').slideToggle(500);
});


// Menu fixed

const navoff = $('.main_menu').offset().top;

$(window).scroll(function () {
  const scrolling = $(this).scrollTop();

  if (scrolling > navoff) {
    $('.main_menu').addClass('menu_fixed');
  } else {
    $('.main_menu').removeClass('menu_fixed');
  }

});
