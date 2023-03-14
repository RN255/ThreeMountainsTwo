var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";
  openbutton.style.opacity = "0";
}

function hideMenu() {
  navLinks.style.right = "-200px";
  openbutton.style.opacity = "1";
}

// reveal scroll up button when scrolling away from top
window.onscroll = function () {
  revealUpButton();
};

function revealUpButton() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("returnToTopButton").style["display"] = "block";
  } else {
    document.getElementById("returnToTopButton").style["display"] = "none";
  }
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
    } else if (
      revealtop < windowheight - revealpoint &&
      itemsToReveal[i].classList.contains("imgGrowFromLeft")
    ) {
      itemsToReveal[i].classList.add("activeImgGrowFromLeft");
    }
  }
}

// the carousel
// the first carousel will not be used but will be stored here

// // Select all slides
// const slides = document.querySelectorAll(".slide");

// // loop through slides and set each slides translateX property to index * 100%
// slides.forEach((slide, indx) => {
//   slide.style.transform = `translateX(${indx * 100}%)`;
// });

// // select next slide button
// const nextSlide = document.querySelector(".btn-next");

// // current slide counter
// let curSlide = 0;
// // maximum number of slides
// let maxSlide = slides.length - 1;

// // add event listener and navigation functionality
// nextSlide.addEventListener("click", function () {
//   // check if current slide is the last and reset current slide
//   if (curSlide === maxSlide) {
//     curSlide = 0;
//   } else {
//     curSlide++;
//   }

//   //   move slide by -100%
//   slides.forEach((slide, indx) => {
//     slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
//   });
// });

// // select prev slide button
// const prevSlide = document.querySelector(".btn-prev");

// // add event listener and navigation functionality
// prevSlide.addEventListener("click", function () {
//   // check if current slide is the first and reset current slide to last
//   if (curSlide === 0) {
//     curSlide = maxSlide;
//   } else {
//     curSlide--;
//   }

//   //   move slide by 100%
//   slides.forEach((slide, indx) => {
//     slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
//   });
// });

// the second carousel
// the second carousel will not be used but will be stored here

// let currentSlideTwo = 0;
// let totalSlides = 2;
// let maxSlidesTwoIndex = totalSlides - 1;
// let imgSecond = document.getElementById("imgSecond");
// // add event listener and navigation functionality
// nextSlide.addEventListener("click", function () {
//   imgSecond.style.opacity = "0";
//   // check if current slide is the last and reset current slide
//   if (currentSlideTwo === maxSlidesTwoIndex) {
//     currentSlideTwo = 0;
//   } else {
//     currentSlideTwo++;
//   }

//   setTimeout(change, 500);

//   function change() {
//     if (currentSlideTwo == 0) {
//       imgSecond.src = "images/20160521_050635.jpg";
//       imgSecond.style.opacity = "1";
//     } else if (currentSlideTwo == 1) {
//       imgSecond.src = "images/20190623_164553.jpg";
//       imgSecond.style.opacity = "1";
//     }
//   }
// });

// the third carousel

let currentSlideThree = 0;
let totalSlidesThree = 3;
let maxSlidesThreeIndex = totalSlidesThree - 1;

// get iamges
let carouselImgOne = document.getElementById("carouselImgOne");
let carouselImgTwo = document.getElementById("carouselImgTwo");
let carouselImgThree = document.getElementById("carouselImgThree");

// get markers
let markerOne = document.getElementById("markerOne");
let markerTwo = document.getElementById("markerTwo");
let markerThree = document.getElementById("markerThree");

// // select next slide button
const nextSlide = document.querySelector(".btn-next");
const prevSlide = document.querySelector(".btn-prev");

// change to next slide
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (currentSlideThree === maxSlidesThreeIndex) {
    currentSlideThree = 0;
  } else {
    currentSlideThree++;
  }

  setTimeout(change, 0);
});

// change to prev slide
prevSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (currentSlideThree === 0) {
    currentSlideThree = maxSlidesThreeIndex;
  } else {
    currentSlideThree--;
  }

  setTimeout(change, 0);
});

// change the slide
function change() {
  if (currentSlideThree == 0) {
    // change iamge opacity
    carouselImgOne.style.opacity = "1";
    carouselImgTwo.style.opacity = "0";
    carouselImgThree.style.opacity = "0";
    // change marker color
    markerOne.style.backgroundColor = "white";
    markerTwo.style.backgroundColor = "transparent";
    markerThree.style.backgroundColor = "transparent";
  } else if (currentSlideThree == 1) {
    // change iamge opacity
    carouselImgOne.style.opacity = "0";
    carouselImgTwo.style.opacity = "1";
    carouselImgThree.style.opacity = "0";
    // change marker color
    markerOne.style.backgroundColor = "transparent";
    markerTwo.style.backgroundColor = "white";
    markerThree.style.backgroundColor = "transparent";
  } else if (currentSlideThree == 2) {
    // change iamge opacity
    carouselImgOne.style.opacity = "0";
    carouselImgTwo.style.opacity = "0";
    carouselImgThree.style.opacity = "1";
    // change marker color
    markerOne.style.backgroundColor = "transparent";
    markerTwo.style.backgroundColor = "transparent";
    markerThree.style.backgroundColor = "white";
  }
}
