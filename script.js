var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ", " 
	+ color3.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

color3.addEventListener("input", setGradient);

//Randomize colour

function getRandomColor() {
	return '#' + (Math.random().toString(16) + "000000").substring(2,8);
}

button.addEventListener("click", function() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	color3.value = getRandomColor();

	setGradient();
})

