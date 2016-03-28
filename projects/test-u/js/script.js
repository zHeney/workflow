
$(document).ready(function(){

    if ($(window).width() <= '1080') {
        $("#filter a:first-child").click(function(event){
            $("#leftBlock ul").css('display','block');
            event.stopPropagation(),
            console.log("menu");
        });

        $("html").click(function(){
            $("#leftBlock ul").css('display','none');
            // event.stopPropagation();
            console.log("html");
        });
    }

});
