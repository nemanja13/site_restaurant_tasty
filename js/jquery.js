$(document).ready(function(){
    var bar=$("#sideNav> a");
    bar.click(
    function(e){
        e.preventDefault();
        var sideNav=$("#sideNav ul");
        sideNav.toggle(
            function(){
                $(this).find("ul").slideDown();
            }, 
            function(){
                $(this).find("ul").slideUp();
            });
    });
$(".scrollToTop").click(function(){
    $("html").animate({
        scrollTop: 0
    }, 1500);
});
$(window).scroll(function(){
    let top = $(this)[0].scrollY;
    if(top > 600){
        $(".scrollToTop").addClass("vidljiv");
        $(".scrollToTop").removeClass("nevidljiv");
    } else {
        $(".scrollToTop").addClass("nevidljiv");
        $(".scrollToTop").removeClass("vidljiv");
    }
});
});