const METER_TO_NAUTICAL_MILE = 0.000539957;

function switchTab($button){
    // Set the correct item on the nav bar to active
    $("ul.navbar-nav").find("li").removeClass("active");
    $button.parent().addClass("active");

    // Empty out current content
    $("body > div.container, div.container-fluid").remove();

    // Fill in the new page based on 'data-tab' attribute
    var tab = $button.data("tab");
    if(tab == "map"){
        var html = $("#mapTemplate").render();
        $("body").append(html);
        map_init();
    } else if(tab == "home"){
        var html = $("#mainPageTemplate").render();
        $("body").append(html);
        home_init();
    }

}


$(document).ready(function(){
    $.views.converters("metersToNauticalMiles", function(val) {
        // Do this a bit wonky so we keep one decimal point around.
        return Math.round(val * METER_TO_NAUTICAL_MILE * 10) / 10;
    });

    // Load up the main page.
    var html = $("#mainPageTemplate").render();
    $("body").append(html);
    home_init();
});