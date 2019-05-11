$(function(){
    $("#email").blur(function(){
        let username = this.value;
        
        $.ajax({
            url: "/register/"+username,
            type: 'GET',
            // dataType: 'json', // added data type
            success: function(res) {
                $("#checkUsername").attr({type:"textarea"}).val("Sorry, email exists");
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $("#checkUsername").attr({type:"textarea"}).val("You can use this email");
            }
        });
    });
});