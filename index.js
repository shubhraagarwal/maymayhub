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

// Animating the navbar buttons
// const buttons = document.querySelectorAll('button');
//
// buttons.forEach(btn => {
//   btn.addEventListener('mouseenter',function(e){
//     let x = e.clientX - e.target.offsetLeft;
//     ley y = e.clientY - e.target.offsetTop;
//     let ripples = document.createElement('span');
//     ripples.style.left = x + 'px';
//     ripples.style.top = y + 'px';
//     this.appendChild(ripples);
//     setTimeout(() => {
//       ripples.remove();
//
//     }, 1000);
//   }) ;
// });
