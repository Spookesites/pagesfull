
const okButton = document.querySelector("#ok-button");
const overlay = document.querySelector("#overlay");
const darkText = document.querySelector(".dark-text");

overlay.style.pointerEvents = "initial";


okButton.addEventListener("click", function(){
  overlay.style.display = "none";
  darkText.classList.remove("dark-text");

  document.querySelectorAll("img").forEach(function(element) {
    element.style.filter = "brightness(100%)";
  });


document.querySelectorAll("*").forEach(function(element) {
    element.style.pointerEvents = "initial";
});


 document.body.style.userSelect = "text";
  document.querySelectorAll("h1, p").forEach(function(element) {
    element.style.userSelect = "text";
  });
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("message-box").style.display = "block";
});

document.getElementById("ok-button").addEventListener("click", function() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("message-box").style.display = "none";
});

document.querySelectorAll("img").forEach(function(element) {
  element.style.filter = "brightness(25%)";
});


document.body.style.userSelect = "none";
document.querySelectorAll("h1, p").forEach(function(element) {
  element.style.userSelect = "none";
});

//Añadir: 
document.querySelectorAll("img").forEach(function(element) {
  if (element.style.cursor === "pointer") {
    console.log("La imagen tenía el cursor del puntero antes de cambiarlo");
}
   // element.style.cursor = "default";

});

document.querySelectorAll("*:not(#ok-button)").forEach(function(element) {
    element.style.pointerEvents = "none";
});

