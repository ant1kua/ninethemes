$(document).ready(function() {

    // OWL-CAROUSES
    $(".owl-footer").owlCarousel({
        items: 8,
        slideSpeed : 300,
        paginationSpeed : 400,
        pagination : false,
        navigation : true,
        navigationText: [
            "&larr;",
            "&rarr;"
        ]
    });

    $(".owl-reviews").owlCarousel({
        singleItem : true,
        slideSpeed : 300,
        paginationSpeed : 400,
        pagination : true,
        navigation : true,
        navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ]
    });

    // COUNTDOWN
    var loftoffTime = new Date();
        loftoffTime = new Date(loftoffTime.getFullYear() + 1, 1 - 1, 1);
        $('.countdown').countdown({until: loftoffTime, format: 'DHMS'});

    // ROUNDABOUT
    $('.choose-bike__round').roundabout({
        autoplay: true,
        autoplayDuration: 5000,
        minOpacity: 1,
        minScale: 0.55,
        btnNext: ".choose-bike__btn_next",
        btnPrev: ".choose-bike__btn_prev",
        autoplayPauseOnHover: true
    });

    // MAGNIFIC-POPUP
    //$('.popup').magnificPopup({
    //
    //});

    // CLICK EVENTS
    $(function() {
        var buttons = $('.btn_nav');

        buttons.each(function(index, el) {
            $(el).click(function () {
                $(this).parent().find('.nav_small__dropdown').fadeToggle();
            })
        });
    });

    $('.btn_close').click(function() {
        $('.popup').toggle();
    });

});