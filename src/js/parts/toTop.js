$(document).ready(function(){
    $(window).scroll(function(){
        var bo = $("body").scrollTop();
        // $('#toTop').text(bo);
        if ( bo > 300 ) { $("#toTop").css("display", "flex"); } else { $("#toTop").css("display", "none"); };
    })
})

$(document).ready(function(){
    $(window).scroll(function(){
        var he = $("body").scrollTop();
        // $('#toTop').text(bo);
        if ( he > 600 ) { $("#header").fadeIn().addClass('header-fixed'); } else { $("#header").removeClass('header-fixed'); };
    })
})