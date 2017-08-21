$(".toggle-mnu").click(function() {
    $('.logo').fadeToggle();
    $(this).toggleClass("on");
    $(".menu").slideToggle();
    return false;
});