jQuery(document).ready(function ($) {
    $(window).stellar();
    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    button1 = $('.button_up');
    mywindow = $(window);
    htmlbody = $('html,body');

    slide.waypoint(function (event, direction) {
        dataslide = $(this).attr('data-slide');
        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }
    });

    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });

    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');
    }

    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    button1.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    $('.facebook').click(function(e) {
        window.location = "https://www.facebook.com/codyzazulak";
    });

    $('.twitter').click(function(e) {
        window.location = "https://twitter.com/CodyZazulak";
    });

    $('.github').click(function(e) {
        window.location = "https://github.com/codyzazulak1";
    });

    $('.linked-in').click(function(e) {
        window.location = "http://www.linkedin.com/in/codyzazulak1";
    });

});