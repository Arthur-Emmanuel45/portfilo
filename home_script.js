$(function() {
    $("input[type=text]").click(function() {
        $(".placeholder").css("display", "none");
    })
    if ($("input[type=text]").blur == true && $input.value == false){
        $("input[type=text]").blur(function() {
            $(".placeholder").css("display", "block");
        })
    }

    $("input[type=email]").click(function() {
        $(".placeholder-email").css("display", "none");
    })
    $("input[type=email]").blur(function() {
        $(".placeholder-email").css("display", "block");
    })
});