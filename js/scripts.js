// Hide home until I get things sorted

$(document).ready(function () {

    let whichVis = '#home';
    let toShow = '';

    $('#tikka').hide();
    $('#lbchicken').hide();
    $('#steakrb').hide();

    $('#homebutton').click(function () {
        toShow = '#home';
        closeAll(whichVis, toShow);
        whichVis = '#home'
    });

    $('#tikkabutton').click(function () {
        toShow = '#tikka';
        closeAll(whichVis, toShow);
        whichVis = '#tikka'
    });

    $('#lbchickenbutton').click(function () {
        toShow = '#lbchicken';
        closeAll(whichVis, toShow);
        whichVis = '#lbchicken'
    });

    $('#steakrbbutton').click(function () {
        toShow = '#steakrb';
        closeAll(whichVis, toShow);
        whichVis = '#steakrb'
    });


});

function closeAll(whichVis, toShow) {
    $(whichVis).slideUp("fast", function() {
        $(toShow).slideDown("slow");
    });
}