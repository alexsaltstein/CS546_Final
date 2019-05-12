$(document).ready(function () {
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
        $.ajax({
            url: "/flyers",
            type: 'POST',
            data: {
                id: $(".card-main-div").attr("id"),
                background: $(".card-main-div").attr("name"),
                elements: [
                    {
                        text: $(".text-tobe-saved1").val(),
                        color: $(".edit-custom-text1").css("color")
                    },
                    {
                        text: $(".text-tobe-saved2").val(),
                        color: $(".edit-custom-text2").css("color")
                    },
                    {
                        text: $(".text-tobe-saved3").val(),
                        color: $(".edit-custom-text3").css("color")
                    },
                    {
                        text: $(".text-tobe-saved4").val(),
                        color: $(".edit-custom-text4").css("color")
                    }
                ]
            },
            dataType: 'json', // added data type
            success: function (res) {
                alert("success");
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("fail");
            }
        });
        $('#exampleModal').modal('hide');
    });

    $(".dropdown-item1").click(function () {
        $(".btn-color").text($(this).text());
        $(".edit-custom-text1").text($(".text-tobe-saved1").val()).css('color', 'blue');
        $(".edit-custom-text2").text($(".text-tobe-saved2").val()).css('color', 'blue');
        $(".edit-custom-text3").text($(".text-tobe-saved3").val()).css('color', 'blue');
        $(".edit-custom-text4").text($(".text-tobe-saved4").val()).css('color', 'blue');
        //$(".text-tobe-saved").css('color', 'red').val();
    });

    $(".dropdown-item2").click(function () {
        $(".btn-color").text($(this).text());
        $(".edit-custom-text1").text($(".text-tobe-saved1").val()).css('color', 'green');
        $(".edit-custom-text2").text($(".text-tobe-saved2").val()).css('color', 'green');
        $(".edit-custom-text3").text($(".text-tobe-saved3").val()).css('color', 'green');
        $(".edit-custom-text4").text($(".text-tobe-saved4").val()).css('color', 'green');
        //$(".text-tobe-saved").css('color', 'red').val();
    });

    $(".dropdown-item3").click(function () {
        $(".btn-color").text($(this).text());
        $(".edit-custom-text1").text($(".text-tobe-saved1").val()).css('color', 'red');
        $(".edit-custom-text2").text($(".text-tobe-saved2").val()).css('color', 'red');
        $(".edit-custom-text3").text($(".text-tobe-saved3").val()).css('color', 'red');
        $(".edit-custom-text4").text($(".text-tobe-saved4").val()).css('color', 'red');
    });

});