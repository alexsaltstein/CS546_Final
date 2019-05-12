$(document).ready(function () {
    $(".share-flyer").click(function () {
        u = "/public/images/"+$(".card-main-div").attr("name");
        t = $(".card-main-div").attr('alt');
        window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(u) + '&t=' + encodeURIComponent(t), 'sharer', 'toolbar=0,status=0,width=626,height=436');
        return false;
    });
});