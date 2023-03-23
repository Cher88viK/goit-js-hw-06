var slider = document.getElementById("font-size-control");
var adjText = document.getElementById("text");

slider.addEventListener("input", (event) => {
    adjText.style.fontSize = event.currentTarget.value + "px"
});