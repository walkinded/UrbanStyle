$(document).ready(function(){
  $('.desc-tab_content').hide();
  $('.desc-tab_content:first').show();
  $('.desc-tabs li:first').addClass('active');
  $('.desc-tabs li').click(function(event) {
    event.preventDefault();
    $('.desc-tabs li').removeClass('active');
    $(this).addClass('active');
    $('.desc-tab_content').hide();

    var selectTab = $(this).find('a').attr("href");

    $(selectTab).fadeIn();
  });


  $('.gallery-img__slider-small').slick({
    slidesToShow: 4,
    vertical: true,
    verticalSwiping: true,
    asNavFor: ".gallery-img__slider-big",
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          arrows: true,
          slidesToShow: 3
        }
      }
    ]
  });

  $('.gallery-img__slider-big').slick({
    slidesToShow: 1,
    arrows: false,
    pagination: true,
    asNavFor: ".gallery-img__slider-small",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      },
    ]
  });


  $('.slider-pc').slick({
    arrows: true,
    // dots: true,
    slidesToShow: 4,
    // speed: 1000,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
          slidesToShow: 3,
        },
      }
    ]
  });

  $('.slider-vi').slick({
    arrows: true,
    // dots: true,
    slidesToShow: 4,
    // speed: 1000,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
          slidesToShow: 3,
        },
      }
    ]
  });
});
