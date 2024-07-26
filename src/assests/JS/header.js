// When the user scrolls the page, execute myFunction

$(document).ready(function() {
    window.onscroll = function() {

        myFunction()
    };
    var header = $(".header")

    // Get the offset position of the navbar
    var sticky = header.offset().top;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset > sticky) {
            $(".header").addClass("is-sticky")
        } else {
            $(".header").removeClass("is-sticky")
        }
    }

    $(".dot-menu").click(function() {
        $(this).siblings(".container").toggleClass("active")
    })
    $(".meanmenu-reveal").click(function() {
        debugger
        $(this).toggleClass("close")
        if ($(this).hasClass("close")) {
            $(this).text("X")
            $(this).siblings(".mean-nav").children("ul").slideDown()
        } else {
            $(this).text("")
            $(this).append("<span></span><span></span><span></span>")
            $(this).siblings(".mean-nav").children("ul").slideUp()
        }

    })

})