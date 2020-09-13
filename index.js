// Code to make the navbar sticky starts
// When the user scrolls the page, execute myFunction
window.onscroll = function() {sticky()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function sticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// Code to make the navbar sticky ends
