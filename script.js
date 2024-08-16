let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

document.addEventListener("DOMContentLoaded", function () {
  // Your script code here
  let slideIndex = 1;
  showSlides(slideIndex);
  // ...
});

function buttonClick(pageUrl) {
  window.location.href = pageUrl;
}

/*add journeys*/
function buttonClick() {
  // 원하는 웹사이트 URL로 이동
  window.location.href =
    "https://www.google.com/maps/place/84017+Positano,+Salerno,+Italien/@40.6295856,14.4032806,12z/data=!4m15!1m8!3m7!1s0x133b9768a710d21b:0x8cde0b2863cede31!2s84017+Positano,+Salerno,+Italien!3b1!8m2!3d40.6280528!4d14.4849812!16zL20vMDF5Ymo5!3m5!1s0x133b9768a710d21b:0x8cde0b2863cede31!8m2!3d40.6280528!4d14.4849812!16zL20vMDF5Ymo5?entry=ttu"; // 원하는 링크 주소로 변경
}
