// Otvaranje/zatvaranje menija sa animacijom (koristi CSS klasu 'show')
function myFunction() {
  const x = document.getElementById("myLinks");
  if (x) {
    x.classList.toggle("show");
  }
}

// Automatsko zatvaranje menija kada se klikne na link (zatvara se sa animacijom)
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("#myLinks a");
  const menu = document.getElementById("myLinks");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Ukloni klasu 'show' da se meni zatvori sa animacijom
      menu.classList.remove("show");
    });
  });
});

// Brojači
let valueDisplays = document.querySelectorAll(".num");
let interval = 8000; // trajanje animacije u ms (sporije)

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let parentContainer = valueDisplay.closest(".container");

  let counter = setInterval(function () {
    startValue += 1;

    if (valueDisplay.classList.contains("views")) {
      // Pregledi - dodaje "k"
      valueDisplay.textContent = startValue + "k";
    } else if (endValue === 100) {
      // Procenat
      valueDisplay.textContent = startValue + "%";
    } else {
      // Ostali brojevi
      valueDisplay.textContent = startValue;
    }

    if (startValue === endValue) {
      clearInterval(counter);

      // Flash efekat kada završi
      parentContainer.classList.add("flash");
      setTimeout(() => {
        parentContainer.classList.remove("flash");
      }, 1000);
    }
  }, duration);
});
