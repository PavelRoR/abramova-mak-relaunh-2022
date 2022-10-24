$(document).ready(function() {
    $(function () {
        var check = $('.check', this),
            email = $('.input', this),
            message = $('.alert-message', this),
            button = $('.button-form', this);
        $(".form").on("submit", function () {
            var check = $('.check', this),
                message = $('.alert-message', this),
                reNone = /.+/,
                email = $('.input', this),
                button = $('.button-form', this);
            if (!email.val().match(reNone)) {
                message.text('Введите email').slideDown(500);
                return false;
            }
            if (!check.prop("checked")) {
                message.text('Подтвердите соглашение').slideDown(500);
                return false;
            }
            if (email.val() && check) {

                // button.text('Отправляем...');
                // setTimeout(function () {
                //     button.text('Отправлено!');
                // }, 500);
                return true
            }
        });
        email.click(function () {
            // email.css({"borderColor": "rgb(25, 10, 12)",'transition':'all .4s ease'});
            message.slideUp(500);
        });
        check.click(function () {
            message.slideUp(500);
        });
    });
    $('.play-button').click(function(){
        $.fancybox.open({
            type: 'iframe',		
            src: 'https://youtube.com/embed/J_jh9-hnQX0?autoplay=1&mute=1&modaestbranding=1',
            smallBtn: true,
            iframe: {
                preload: false,
                // css: {
                //     width: '800px'
                // }	
            }
    
        });
    
    });
    $('.button-up').fancybox();
    $('[data-fancybox]').fancybox({
        loop: 1,
    });
    $('.revs-slider-video').slick({
        lazyLoad: 'ondemand',
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        speed: 300,
        arrows: true,
        // centerPadding: '40px',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });
    $('.revs-slider-text').slick({
        lazyLoad: 'ondemand',
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
        speed: 300,
        arrows: true,
        // centerPadding: '20px',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
        ]
    });
    $('.slick-dots').wrap('<div class="container container-revs">')
    /* Видео */
    $(".video-wrapper-revs img").click(function () {
        var a = $(this).parent().attr("data-youtube");
        $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1&modestbranding=1&mute=1&showinfo=0&rel=0" allowfullscreen></iframe>')
    });
    function imToVideo(){
        $('.video-wrapper-revs iframe').each(function () {
            var l = $(this).parent().attr('data-img');
            $(this).parent().html('<img src="' + l + '" alt="Видео отзыв">');
        });
        $(".video-wrapper-revs img").click(function () {
            var a = $(this).parent().attr("data-youtube");
            $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?modestbrandig=1&mute=1&showinfo=0&rel=0&autoplay=1" allowfullscreen></iframe>');
        });
    }
$('.revs-slider').on('swipe', function (event, slick, direction) {
    imToVideo();
});
$('.revs-slider').on('afterChange', function (event, slick, direction) {
    imToVideo();
});
$('.revs-slider').on('beforeChange', function (event, slick, direction) {
    imToVideo();
});


/*Конец документа*/
});