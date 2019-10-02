$(document).ready(function () {
    if ($(".overlay-content").offset().top > 1200) {
        $('.overlay-content .wow').each(function () {
            $(this).addClass('menu-fix');
        });
    }
});

function openNavSp() {
    document.getElementById("myNavSp").style.width = "100%";
    document.getElementById("entrybutton").style.display = "none";
    document.getElementById("close-menu-btn-sp").style.display = "block";
    document.getElementById("image-menu-btn-sp").style.display = "none";

}

function closeNavSp() {
    document.getElementById("myNavSp").style.width = "0%";
    document.getElementById("close-menu-btn-sp").style.display = "none";
    document.getElementById("image-menu-btn-sp").style.display = "block";
    document.getElementById("entrybutton").style.display = "block";
}

function openNav() {
    document.getElementById("myNav").style.width = "40%";
    document.getElementById("entrybutton").style.display = "none";
    document.getElementById("close-menu-btn").style.display = "block";
    document.getElementById("image-menu-btn").style.display = "none";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("close-menu-btn").style.display = "none";
    document.getElementById("image-menu-btn").style.display = "block";
    document.getElementById("entrybutton").style.display = "block";
}

$(document).ready(function () {

    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});