$(document).ready(function(){
    $('.text-area').hide();
    $('.text-area:first').show();
    $('.services__wrapper a').click(function(e) {
        e.preventDefault();
        $('.services__wrapper .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.text-area').not(tab).css({'display':'none'});
        $(tab).fadeIn(400);
    });
});

$(document).ready(function(){
    $('.text-for-projects').hide();
    $('.text-for-projects:first').show();
    $('.projects__logo-wrapper a').click(function(e) {
        e.preventDefault();
        $('.projects__logo-wrapper .active-svg').removeClass('active-svg');
        $(this).addClass('active-svg');
        var tab = $(this).attr('href');
        $('.text-for-projects').not(tab).css({'display':'none'});
        $(tab).fadeIn(400);
    });
});


// services 2

$(document).ready(function(){
    $('.text-for-services2').hide();
    $('.text-for-services2:first').show();
    $('.services2__flex-item a').click(function(e) {
        e.preventDefault();
        // $('.services2__flex-item .no-border').removeClass('no-border');
        // $(this).addClass('no-border ');
        $('.services2__flex-layout a').removeClass('active-services2');
        $(this).addClass('active-services2');
        $('.services2__flex-item').removeClass('no-border');
        $(this).parent().addClass('no-border');
        var tab = $(this).attr('href');
        $('.text-for-services2').not(tab).css({'display':'none'});
        $(tab).fadeIn(400);
    });
});

// $(document).ready(function(){
//     $('.services2__flex-layout').click(function(e) {
//         e.preventDefault();
//         $('.services2__flex-layout').removeClass('active-services2');
//         $(this).addClass('active-services2');
//     });
// });
// $(document).ready(function(){
//     $('.services2__flex-layout').click(function(e) {
//         e.preventDefault();
//         $('.services2__flex-item').removeClass('no-border');
//         $(this).parent().addClass('no-border');
//     });
// });



// eof services 2 services2__flex-item