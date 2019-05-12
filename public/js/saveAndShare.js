//does not work because it is not a hosted website
$(document).ready(function () {
    $(".share-flyer").click(function () {
        u = "http://localhost:3000/public/images/"+$(".card-main-div").attr("name");//this would be replaced with the url of our image
        t = $(".card-main-div").attr('alt');
        console.log(u);
        window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(u) + '&t=' + encodeURIComponent(t), 'sharer', 'toolbar=0,status=0,width=626,height=436');
        return false;
    });
});