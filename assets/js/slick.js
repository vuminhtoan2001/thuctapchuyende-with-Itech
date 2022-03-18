// Slick banner slider
$('.main__slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
    autoplaySpeed:3500,
    dots: true,

  });
$('.main__slider .slick-dots li').html(' <div class="dot-out"><div class="dot-in"></div></div>');
$('.slick-dots li.slick-active').html('<div class="dot-out"><div class="dot-in"></div></div>');

// Slick product img

$('.home-list-products-new').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows:false,
  autoplay: true,
  autoplaySpeed:2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },

  ]
});

$('.section-blog-list').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows:false,
  autoplay: true,
  autoplaySpeed:2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },

  ]
});

// $('.section-blog-list').slick({
//   infinite: false,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   arrows:false,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: ,
//         slidesToScroll: 1,
//         infinite: true,
//       }
//     },
//     {
//       breakpoint: 740,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1
//       }
//     },

//   ]
// });