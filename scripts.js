$(document).ready(function() {

    //sticky navigation code
    $('.js--section-features').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });

    //scrolling code when you hit button
    $('.js--scroll-to-plan').click(function() {
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
    });

    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
    });

    // //animations on scrolling
    // $('.js--wp-1').waypoint(function(direction) {
    //     $('.js--wp-1').addClass('animated fadeIn');
    // });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated heartBeat');
    }, {
        offset: '25%'
    });

    // mobile navigation
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200);

        if (icon.hasClass('icon ion-md-menu')) {
            icon.addClass('icon ion-md-close-circle-outline');
            icon.removeClass('icon ion-md-menu');
        } else {
            icon.removeClass('icon ion-md-close-circle-outline');
            icon.addClass('icon ion-md-menu');
        }
    });


});