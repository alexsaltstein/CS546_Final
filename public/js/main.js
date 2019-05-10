$(document).ready(function () {
    // console.log( "ready!" );
    $(".edit-custom-generic").click(function () {
        $('#exampleModal').modal('show');
        $(".text-tobe-saved1").text($(".edit-custom-text1").text());
        $(".text-tobe-saved2").text($(".edit-custom-text2").text());
        $(".text-tobe-saved3").text($(".edit-custom-text3").text());
        $(".text-tobe-saved4").text($(".edit-custom-text4").text());
    });

    $(".save-flyer-action").click(function () {
        //jquery ajax action
        $(".edit-custom-text1").text($(".text-tobe-saved1").val());
        $(".edit-custom-text2").text($(".text-tobe-saved2").val());
        $(".edit-custom-text3").text($(".text-tobe-saved3").val());
        $(".edit-custom-text4").text($(".text-tobe-saved4").val());
        $('#exampleModal').modal('hide');
    });

    $(".dropdown-item1").click(function () {
        $(".btn-color").text($(this).text());
        $(".save-flyer-action").click(function () {
            $(".edit-custom-text1").text($(".text-tobe-saved1").val()).css('color', 'blue');
            $(".edit-custom-text2").text($(".text-tobe-saved2").val()).css('color', 'blue');
            $(".edit-custom-text3").text($(".text-tobe-saved3").val()).css('color', 'blue');
            $(".edit-custom-text4").text($(".text-tobe-saved4").val()).css('color', 'blue');
            //$(".text-tobe-saved").css('color', 'red').val();
        })
    })

    $(".dropdown-item2").click(function () {
        $(".btn-color").text($(this).text());
        $(".save-flyer-action").click(function () {
            $(".edit-custom-text1").text($(".text-tobe-saved1").val()).css('color', 'green');
            $(".edit-custom-text2").text($(".text-tobe-saved2").val()).css('color', 'green');
            $(".edit-custom-text3").text($(".text-tobe-saved3").val()).css('color', 'green');
            $(".edit-custom-text4").text($(".text-tobe-saved4").val()).css('color', 'green');
            //$(".text-tobe-saved").css('color', 'red').val();
        })
    })

    $(".dropdown-item3").click(function () {
        $(".btn-color").text($(this).text());
        $(".save-flyer-action").click(function () {
            $(".edit-custom-text1").text($(".text-tobe-saved1").val()).css('color', 'red');
            $(".edit-custom-text2").text($(".text-tobe-saved2").val()).css('color', 'red');
            $(".edit-custom-text3").text($(".text-tobe-saved3").val()).css('color', 'red');
            $(".edit-custom-text4").text($(".text-tobe-saved4").val()).css('color', 'red');
        })
    })
    
});