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

    // $(".color-button").click(function () {
    // $('.Blue').click(function() {
    //     var color = $( this ).css( "background-color" );
    //     //$(".edit-custom-text").text($(this).css('color', 'red'));
    //     $(".edit-custom-text").html(color);
    //     $(".text-tobe-saved").html(color);
    // });
    // });

    // $(".Blue").on('mouseenter', event => {
    //     $(".save-flyer-action").click(function(){
    //         $(".edit-custom-text").animate({
    //             color: '#FFFFFF',
    //             backgroundColor: '#000000'
    //         }, 300);
    //     })
    // });

    $(".dropdown-item1").click(function () {
        $(".btn-secondary").text($(this).text());
        $(".save-flyer-action").click(function () {
            $(".edit-custom-text").text($(".text-tobe-saved").val()).css('color', 'blue');
            //$(".text-tobe-saved").css('color', 'red').val();
        })
    })

    $(".dropdown-item2").click(function () {
        $(".btn-secondary").text($(this).text());
        $(".save-flyer-action").click(function () {
            $(".edit-custom-text").text($(".text-tobe-saved").val()).css('color', 'green');
            //$(".text-tobe-saved").css('color', 'red').val();
        })
    })

    $(".dropdown-item3").click(function () {
        $(".btn-secondary").text($(this).text());
        $(".save-flyer-action").click(function () {
            $(".edit-custom-text").text($(".text-tobe-saved").val()).css('color', 'red');
            //$(".text-tobe-saved").css('color', 'red').val();
        })
    })

    // $(".dropdown-item3").click(function () {
    //     $(".btn-secondary").text($(this).text());
    //     $(".save-flyer-action").click(function () {
    //         $(".edit-custom-text").text($(".text-tobe-saved").val()).css('color', 'red');
    //         //$(".text-tobe-saved").css('color', 'red').val();
    //     })
    // })

    $(".image1").click
});