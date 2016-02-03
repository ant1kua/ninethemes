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
/** END owl **/
/** START countdown **/
var loftoffTime = new Date();
    loftoffTime = new Date(2016, 2-1, 25);
    $('.countdown').countdown({until: loftoffTime, format: 'DHMS'});
/** END countdown **/

});