var back = document.getElementById("canvas");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("h4");
var button = document.querySelector("button");
var line = document.querySelector("h4");


// Prima Varianta!

function gradientBackground() {
	back.style.background = 
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+")";

	css.textContent = back.style.background + ";";
}

// function * getRandomColor() {
		
//     var letters = '0123456789ABCDEF';
//     while(true) {
//       var color = '#';
//       for (var i = 0; i < 6; i++ ) {
//           color += letters[Math.floor(Math.random() * 16)];
//       }
//       yield color;
      
//     }

// }


// var generator = getRandomColor();
// var generator1 = generator.next().value;
// var generator2 = generator.next().value;

// Sfarsitul primei variante

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

// functie de copiere in clipboard a textului 
function copyText(element) {
  	var range, selection, worked;

  	if (document.body.createTextRange) {
    	range = document.body.createTextRange();
    	range.moveToElementText(element);
    	range.select();
  	} else if (window.getSelection) {
    	selection = window.getSelection();        
    	range = document.createRange();
    	range.selectNodeContents(element);
    	selection.removeAllRanges();
    	selection.addRange(range);
    }  
    try {
    	document.execCommand('copy');
    	alert('The CSS code copied to clipboard!');
    }
  	catch (err) {
     	alert('Nnable to copy text!');
  	}
}

// sfarsitul functiei de copiere in clipboard a textului

color1.addEventListener("input", gradientBackground);

color2.addEventListener("input", gradientBackground);

// button.addEventListener("click", gradientBackgroundRandom); pentru prima varianta

button.addEventListener("click", generateColor);







