jQuery(".slider").slick({
  dots: false,
  infinite: true,
  prevArrow:
    '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
  nextArrow:
    '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

jQuery(".item-slider").slick({
  dots: false,
  infinite: true,
  prevArrow:
    '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
  nextArrow:
    '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
AOS.init({
  duration: 1500,
});
// header and arrow-icon jquery
$(window).scroll(function () {
  scroll = $(window).scrollTop();

  if (scroll >= 150) {
    $(".header").addClass("fixed");
    $(".up-icon").removeClass("active");
  }
  else {
    $(".header").removeClass("fixed");
    $(".up-icon").addClass("active");
  }
});
// responive menu jquery
$(".hamburger-icon").click(function () {
  $(".mobile-menu").addClass("active");
});
$(".close-icon").click(function () {
  $(".mobile-menu").removeClass("active");
});