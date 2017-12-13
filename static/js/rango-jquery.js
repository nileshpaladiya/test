/**
 * Created by nilesh on 01/12/17.
 */

$(document).ready(function() {
    $("#about-btn").click( function(event) {
        alert("You clicked the button using JQuery!");
    });
    $("p").hover( function() { $(this).css('color', 'red');
        }, function() {
    $("p").css('color', 'blue'); });

    $('#likes').click(function(event) {
        var catid;
        catid = $(this).attr("data-catid");
        $.get('/rango/like/', {category_id: catid}, function(data){
            $('#like_count').html(data);
                $('#likes').hide();
        });
    });

    $('#suggestion').keyup(function(){
        var query;
        query = $(this).val();
        $.get('/rango/suggest/', {suggestion: query}, function(data) {
            $('#cats').html(data);
        });
    });

});