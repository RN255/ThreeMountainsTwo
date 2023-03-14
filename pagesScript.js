// javascript for menu

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

// weather API

// Declaring the variables
let lon;
let lat;
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");
const kelvin = 273;

window.addEventListener("load", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      lon = position.coords.longitude;
      lat = position.coords.latitude;

      // API ID
      const api = "23d87b1d4de10f8bbd9992355ca9a59a";

      // API URL
      const base = `http://api.openweathermap.org/data/2.5/weather?id=1835224&appid=23d87b1d4de10f8bbd9992355ca9a59a`;

      // Calling the API
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          temperature.textContent = Math.floor(data.main.temp - kelvin) + "°C";
          summary.textContent = data.weather[0].description;
          loc.textContent = data.name + "," + data.sys.country;
          let icon1 = data.weather[0].icon;
          icon.innerHTML = `<img src=http://openweathermap.org/img/wn/${icon1}@2x.png>`;
          console.log("${icon1}");
        });
    });
  }
});
