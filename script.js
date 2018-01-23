$(document).ready(function(){
    $("sidebar a").on("click", function(event) {
        $("#sidebar_selected_item").removeAttr("id");
        $(this).attr("id", "sidebar_selected_item");
    });
 }); 