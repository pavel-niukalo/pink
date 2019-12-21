var header = document.querySelector(".page-header");
var nav = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

header.classList.add("page-header--closed");
nav.classList.remove("main-nav--nojs");
nav.classList.add("main-nav--closed");

navToggle.addEventListener("click", function() {
  if (nav.classList.contains("main-nav--closed")) {
    header.classList.remove("page-header--closed");
    header.classList.add("page-header--opened");
    nav.classList.remove("main-nav--closed");
    nav.classList.add("main-nav--opened");
  } else {
    header.classList.remove("page-header--opened");
    header.classList.add("page-header--closed");
    nav.classList.remove("main-nav--opened");
    nav.classList.add("main-nav--closed");

  }
});
