$(document).ready(function() {

/** START owl **/
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

/** START countdown **/
var loftoffTime = new Date();
    loftoffTime = new Date(2016, 2-1, 25);
    $('.countdown').countdown({until: loftoffTime, format: 'DHMS'});

/** START roundabout **/
    $('.choose-bike__round').roundabout({
        autoplay: true,
        autoplayDuration: 5000,
        minOpacity: 1,
        minScale: 0.55,
        btnNext: ".choose-bike__btn_next",
        btnPrev: ".choose-bike__btn_prev",
        autoplayPauseOnHover: true
    });


/** START click event **/
    $(function() {

        var buttons = $('.btn_nav');

        buttons.each(function(index, el) {
            $(el).click(function () {
                $(this).parent().find('.nav_small__dropdown').fadeToggle();
            })
        });
    });

});