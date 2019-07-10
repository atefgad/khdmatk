
/*!
 * atef v0.1
 * Copyright 2019.
 */


$(document).ready(function () {
    "use strict";
    // Typed Js
    $("#typed").typed({
        stringsElement: $(".typed-strings"),
        typeSpeed: 30,
        backDelay: 500,
        startDelay: 500,
        loop: true,
        contentType: "html"
    })

    // Author Books
    function AuthorBooks() {
        if ($('.books-row').length) {
            $('.books-row').owlCarousel({
                margin: 5,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 2
                    }
                }
            })
        };
    };
    AuthorBooks();

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

    var headHeight = $('.navbar').innerHeight();
    $('.main-tex').css('paddingTop', headHeight * 2);

    new WOW().init();
});

$(window).scroll(function() {

    // Add Class "NavbarFixed" on Navbar
    if( $(this).scrollTop() > 100 ) {

        $('.navbar').addClass('NavbarFixed');

    } else { $('.navbar').removeClass('NavbarFixed');}

    

});