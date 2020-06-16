$('.my-class').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    arrows: true,
    dots: true,
    cssEase: 'linear',
    pauseOnHover: false
});

$('.my-class-2').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true
});

$('.my-class-3').slick({
    dots: true,
    infinite: false,
    speed: 300,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true
    
});


//
//$('.my-class-3').slick({
//  centerMode: true,
//  centerPadding: '60px',
//  slidesToShow: 3,
//  responsive: [
//    {
//      breakpoint: 768,
//      settings: {
//        arrows: true,
//        centerMode: true,
//        centerPadding: '40px',
//        slidesToShow: 3,
//      }
//    },
//    {
//      breakpoint: 480,
//      settings: {
//        arrows: true,
//        centerMode: true,
//        centerPadding: '40px',
//        slidesToShow: 1,
//      }
//    }
//  ]
//});
