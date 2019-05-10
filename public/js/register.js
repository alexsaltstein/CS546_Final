$(function(){
    $("#username").blur(function(){
        let username = this.value;
        alert("alert");
        $.ajax({
            url: "/register/"+username,
            type: 'GET',
            dataType: 'json', // added data type
            success: function(res) {
                console.log("abc");
                alert(res);
            }
        });
    });
});
