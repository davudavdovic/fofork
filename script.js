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

  // Brojači
  let valueDisplays = document.querySelectorAll(".num");
  let interval = 8000; // trajanje animacije u ms (sporije)

  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let parentContainer = valueDisplay.closest(".container");

    if (valueDisplay.classList.contains("views")) {
      // Pregledi - od 0k do 999k, pa 1M
      let viewsEnd = 999;
      let viewsDuration = Math.floor(interval / viewsEnd);
      let counter = setInterval(function () {
        startValue += 1;
        if (startValue <= viewsEnd) {
          valueDisplay.textContent = startValue + "k";
        }
        if (startValue === viewsEnd) {
          clearInterval(counter);
          setTimeout(() => {
            valueDisplay.textContent = "1M";
            parentContainer.classList.add("flash");
            setTimeout(() => {
              parentContainer.classList.remove("flash");
            }, 1000);
          }, 150); // brži prelaz na 1M
        }
      }, viewsDuration);
    } else {
      // Ostali brojevi
      let counter = setInterval(function () {
        startValue += 1;
        if (endValue === 100) {
          // Procenat
          valueDisplay.textContent = startValue + "%";
        } else {
          valueDisplay.textContent = startValue;
        }
        if (startValue === endValue) {
          clearInterval(counter);
          parentContainer.classList.add("flash");
          setTimeout(() => {
            parentContainer.classList.remove("flash");
          }, 1000);
        }
      }, duration);
    }
  });

  // Accordion
  const headers = document.querySelectorAll(".accordion-header");
  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const activeHeader = document.querySelector(".accordion-header.active");
      if (activeHeader && activeHeader !== header) {
        activeHeader.classList.remove("active");
        const activeContent = activeHeader.nextElementSibling;
        activeContent.style.maxHeight = null;
        activeContent.classList.remove("open");
      }

      header.classList.toggle("active");
      const content = header.nextElementSibling;
      if (header.classList.contains("active")) {
        content.classList.add("open");
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.classList.remove("open");
        content.style.maxHeight = null;
      }
    });
  });
});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}
