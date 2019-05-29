var back = document.getElementById("canvas");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("h4");
var button = document.querySelector("button");


function gradientBackground() {
	back.style.background = 
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+")";

	css.textContent = back.style.background + ";";
}

function * getRandomColor() {
		
    var letters = '0123456789ABCDEF';
    while(true) {
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      yield color;
      
    }

}


// function gradientBackgroundRandom() {
// 	color1.value = generator1;
// 	color2.value = generator2;
// 	back.style.background = 
// 	"linear-gradient(to right, "
// 	+ color1.value
// 	+ ", "
// 	+ color2.value
// 	+")";

// 	css.textContent = back.style.background + ";";
// }

// var generator = getRandomColor();
// var generator1 = generator.next().value;
// var generator2 = generator.next().value;

function getRandomColor(){
    return '#' + (Math.random().toString(16) + "000000").substring(2,8);
}

function generateColor(){
    color1.value = getRandomColor();
    color2.value = getRandomColor();

//     while(color1.value === color2.value){
//         color2.value = getRandomColor();
//     }
    gradientBackground();
}

function setGradient() {
	body.style.background = `linear-gradient(to ${direction.value}, ${color1.value}, ${color2.value})`;

	 css.textContent = body.style.background + ";";
}



color1.addEventListener("input", gradientBackground);

color2.addEventListener("input", gradientBackground);

// button.addEventListener("click", gradientBackgroundRandom);

button.addEventListener("click", generateColor);







