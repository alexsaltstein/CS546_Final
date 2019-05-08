$(document).ready(function () {
    // console.log( "ready!" );
    $(".edit-custom-text").click(function () {
        console.log($(this).text());
        $('#exampleModal').modal('show');
        $(".text-tobe-saved").text($(this).text());
    });

    $(".save-flyer-action").click(function () {
        //jquery ajax action
        $(".edit-custom-text").text($(".text-tobe-saved").val());
        $('#exampleModal').modal('hide');
    });

    $("#dropdownMenuButton").click(function () {
        $('.Blue').click(function() {
            $(".edit-custom-text").text($(".text-tobe-saved").val()); 
        })
    })
});