$(function ($) {

    var MainNav = $('.customNav'),
        wIn = $(window);
    var menuofset = MainNav.offset().top;
    wIn.on('scroll', function () {
        var scrol = wIn.scrollTop();
        if (scrol > menuofset) {
            MainNav.addClass('menufix');
        } else {
            MainNav.removeClass('menufix');
        }
        if (scrol > 500) {
            $('.backTop').addClass('backTopbottom');
            $('.backTop').fadeIn(1000);
        } else {
            $('.backTop').removeClass('backTopbottom');
            $('.backTop').fadeOut(1000);
        }
    });

    $('.backTop').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    })



    $('.flow_slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $('.game_slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        arrows: false,
        dots: true,
        dotsClass: 'slick_dots',

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    // accoordia js//
    $('.accordion-item ').on('click', function () {
        $('.add_border').removeClass('add_border');
        $(this).toggleClass('add_border');
    });


    // nicescroll js//
    $(".nicescroll-box").niceScroll(".wrap", {
        cursorcolor: "#1f004f",
        cursorwidth: "10px",
        cursorborder: "transparent",
        autohidemode: false,
        background: "#000",
        iframeautoresize: true,
        smoothscroll: true,
    });

});
