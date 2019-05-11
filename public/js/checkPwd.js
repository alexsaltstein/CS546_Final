$(function(){
    // $("#email").
    $('#repassword').blur(function() {
        var pass = $('input[name=password]').val();
        var repass = $('input[name=repassword]').val();
        if(($('input[name=password]').val().length == 0) || ($('input[name=repassword]').val().length == 0)){
            $('#checkpassword').attr({type:"text"}).val("Please check the password");
        }
        else if (pass != repass) {
            $('#checkpassword').attr({type:"text"}).val("Please check the password");
        }
        else {
            $('#checkpassword').attr({type:"text"}).val("Passed");
        }
    });
});