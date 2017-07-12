$(document).ready(function(){
    $(window).scroll(function(){
        var bo = $("body").scrollTop();
        $('#toTop').text(bo);
        if ( bo > 200 ) { $("#toTop").css("display", "block"); } else { $("#toTop").css("display", "none"); };
    })
})