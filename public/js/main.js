$(document).ready(function () {
    $(".edit-custom-generic").click(function () {
        $('#exampleModal').modal('show');
        $(".text-tobe-saved1").val($(".edit-custom-text1").text());
        $(".text-tobe-saved2").val($(".edit-custom-text2").text());
        $(".text-tobe-saved3").val($(".edit-custom-text3").text());
        $(".text-tobe-saved4").val($(".edit-custom-text4").text());

        let color = $(this).css("color");
        if (color == "rgb(0, 0, 0)"){
            $(".btn-color").text("Black");
        }else if (color == "rgb(255, 0, 0)"){
            $(".btn-color").text("Red");
        }else if (color == "rgb(0, 128, 0)"){
            $(".btn-color").text("Green");
        }else if (color == "rgb(0, 0, 255)"){
            $(".btn-color").text("Blue");
        }else{
            console.log("something went wrong");
            $(".btn-color").text("Error");
        }
        let font = $(this).css("font-family").split(",")[0];
        $(".btn-font").text(font);
    });

    $(".save-flyer-action").click(function () {
        if ($(".text-tobe-saved1").val().length > 20 ||
            $(".text-tobe-saved2").val().length > 20 ||
            $(".text-tobe-saved3").val().length > 20 ||
            $(".text-tobe-saved4").val().length > 20) {
            alert("Text length must not be greater than 20 characters");
        } else {
            $(".edit-custom-text1").text($(".text-tobe-saved1").val());
            $(".edit-custom-text2").text($(".text-tobe-saved2").val());
            $(".edit-custom-text3").text($(".text-tobe-saved3").val());
            $(".edit-custom-text4").text($(".text-tobe-saved4").val());
            $(".edit-custom-generic").css('color', $(".btn-color").text());
            $(".edit-custom-generic").css('font-family', `${$(".btn-font").text()} , Times, serif`);
            console.log(`rgba(0, 0, 0, 0) url("http://localhost:3000/public/images/`.length);
            console.log(`") no-repeat scroll 0% 0% / 100% padding-box border-box`.length);
            console.log($(".card-main-div").css("background"));
            console.log(($(".card-main-div").css("background")).substring(58, ($(".card-main-div").css("background")).length -55));
            $.ajax({
                url: "/flyers",
                type: 'POST',
                data: {
                    id: $(".card-main-div").attr("id"),
                    background: `${($(".card-main-div").css("background")).substring(58, ($(".card-main-div").css("background")).length -55)}`,
                    elements: [
                        {
                            text: $(".text-tobe-saved1").val(),
                            color: $(".edit-custom-generic").css("color"),
                            font: $(".edit-custom-generic").css("font-family")
                        },
                        {
                            text: $(".text-tobe-saved2").val(),
                            color: $(".edit-custom-generic").css("color"),
                            font: $(".edit-custom-generic").css("font-family")
                        },
                        {
                            text: $(".text-tobe-saved3").val(),
                            color: $(".edit-custom-generic").css("color"),
                            font: $(".edit-custom-generic").css("font-family")
                        },
                        {
                            text: $(".text-tobe-saved4").val(),
                            color: $(".edit-custom-generic").css("color"),
                            font: $(".edit-custom-generic").css("font-family")
                        }
                    ]
                },
                dataType: 'json', // added data type
                success: function (res) {
                    alert("Saved to your profile");
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert("Failed to save to your profile");
                }
            });
            $('#exampleModal').modal('hide');
        }
    });

    $(".color-choice").click(function () {
        $(".btn-color").text($(this).text());
    });
    $(".font-choice").click(function () {
        $(".btn-font").text($(this).text());
    });

});