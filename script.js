var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";
  openbutton.style.opacity = "0";
}

function hideMenu() {
  navLinks.style.right = "-200px";
  openbutton.style.opacity = "1";
}

// reveal certain elements on scroll

window.addEventListener("scroll", reveal);

function reveal() {
  var itemsToReveal = document.querySelectorAll(".reveal");

  for (var i = 0; i < itemsToReveal.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = itemsToReveal[i].getBoundingClientRect().top;
    var revealpoint = 200;

    if (
      revealtop < windowheight - revealpoint &&
      itemsToReveal[i].classList.contains("revealBelow")
    ) {
      itemsToReveal[i].classList.add("activeBelow");
    } else if (
      revealtop < windowheight - revealpoint &&
      itemsToReveal[i].classList.contains("revealRightSide")
    ) {
      itemsToReveal[i].classList.add("activeRightSide");
    } else if (
      revealtop < windowheight - revealpoint &&
      itemsToReveal[i].classList.contains("growFromRight")
    ) {
      itemsToReveal[i].classList.add("activeGrowFromRight");
    } else if (
      revealtop < windowheight - revealpoint &&
      itemsToReveal[i].classList.contains("growFromLeft")
    ) {
      itemsToReveal[i].classList.add("activeGrowFromLeft");
    } else if (
      revealtop < windowheight - revealpoint &&
      itemsToReveal[i].classList.contains("fadeIn")
    ) {
      itemsToReveal[i].classList.add("activeFadeIn");
    }
  }
}
