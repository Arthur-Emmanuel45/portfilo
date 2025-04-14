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
    if ($("input[type=email]").blur == true && $input.value == false){
        $("input[type=email]").blur(function() {
            $(".placeholder").css("display", "block");
        })
    }
});

let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName("slide");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 15000);
}

showSlides();
