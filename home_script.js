$(function() {
    $("input[type=text]").click(function() {
        $(".placeholder").css("display", "none");
    })
    $("input[type=text]").blur(function() {
        $(".placeholder").css("display", "block");
    })
    $("input[type=email]").click(function() {
        $(".placeholder-email").css("display", "none");
    })
    $("input[type=email]").blur(function() {
        $(".placeholder-email").css("display", "block");
    })
});