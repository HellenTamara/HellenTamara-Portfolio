// Sidebar
$(document).ready(function () {
    $(".menu-wrapper").click(function (e) {
        e.stopPropagation();
        $(".window-overlay").fadeIn();
        $(".vertical-menu").toggleClass("hide");
        if ($(".vertical-menu").hasClass("hide")) {
            $(".window-overlay").fadeOut();
        }
    });

    $(document).click(function (e) {
        if (!$(e.target).closest(".vertical-menu").length && !$(e.target).closest(".menu-wrapper").length) {
            $(".vertical-menu").addClass("hide");
            $(".window-overlay").fadeOut();
        }
    });

    $(".vertical-menu").click(function (e) {
        e.stopPropagation();
    });

    $(".form-close-btn").click(function () {
        $(".window-overlay").fadeOut();
        $(".window-wrapper").removeClass("change");
    });
});


// Contact window
$(document).ready(function () {
    $(".button-style").click(function (e) {
        e.stopPropagation();
        $(".window-overlay").fadeIn();
        $(".window-wrapper").addClass("change");
    });

    $(window).click(function () {
        if ($(".window-wrapper").hasClass("change")) {
            $(".window-overlay").fadeOut();
            $(".window-wrapper").removeClass("change");
        }
    });

    $(".window-wrapper").click(function (e) {
        e.stopPropagation();
    });

    $(".form-close-btn").click(function () {
        $(".window-overlay").fadeOut();
        $(".window-wrapper").removeClass("change");
    });
});

// Language 
$(document).ready(function () {
    $(".language-block").click(function (e) {
        e.stopPropagation();
        const lang = $(".lang-pt").css("display");
        if (lang == "none") {
            $(".lang-pt").css("display", "block");
            $(".lang-eng").css("display", "none");
        } else {
            $(".lang-pt").css("display", "none");
            $(".lang-eng").css("display", "block");
        } 

    });
});