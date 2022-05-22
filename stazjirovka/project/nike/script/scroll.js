$(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
        $("aside").addClass("full");
    } else {
        $("aside").removeClass("full");
    }
});