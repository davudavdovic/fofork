function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

let slideIndex = 1;
let autoSlideInterval;

showSlides(slideIndex);
startAutoSlide();

// Automatsko listanje slika na svake 2 sekunde
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
  }, 5000);
}

// Ručno listanje napred/nazad
function plusSlides(n) {
  clearInterval(autoSlideInterval); // zaustavi automatsko prebacivanje
  showSlides((slideIndex += n));
  startAutoSlide(); // ponovo pokreni automatsko
}

// Ručno biranje slike klikom na tačkice
function currentSlide(n) {
  clearInterval(autoSlideInterval);
  showSlides((slideIndex = n));
  startAutoSlide();
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

let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;

    if (endValue === 100) {
      valueDisplay.textContent = startValue + "%";
    } else {
      valueDisplay.textContent = startValue;
    }

    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
