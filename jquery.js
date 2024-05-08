$(function() {
    var images = $(".images img").hide();
    var current = 0;
    setInterval(function() {
        var next = ((current + 1) % images.length);
        images.eq(current).fadeOut();
        images.eq(next).fadeIn();
        current = next;
    });
});