$(function(){
    $("#email").blur(function(){
        let pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        if(!pattern.test(this.value))
           alert("Invalid email, register will fail");
    });
    $('#password').blur(function() {
        var pass = $('input[name=password]').val();
        var repass = $('input[name=repassword]').val();
        if(($('input[name=password]').val().length < 8)  || ($('input[name=password]').val().length > 20) ){
            $('#checkpassword').attr({type:"text"}).val("Password must be between 8 and 20 characters long");
        }
       
    });
    $('#repassword').blur(function() {
        var pass = $('input[name=password]').val();
        var repass = $('input[name=repassword]').val();
        if(($('input[name=password]').val().length < 8)
            || ($('input[name=password]').val().length > 20)){
            $('#checkpassword').attr({type:"text"}).val("Password must be between 8 and 20 characters long");
        }
        else if (pass != repass) {
            $('#checkpassword').attr({type:"text"}).val("Passwords must match");
        }
        else {
            $('#checkpassword').attr({type:"text"}).val("Valid Pasword");
        }
    });
   
});
