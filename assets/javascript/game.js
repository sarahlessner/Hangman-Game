
dogsArray = ["labrador", "husky", "rotweiler", "pitbull", "pug", "beagle", "collie", "shepherd", "yorkie", "samoyed", "newfoundland", "maltese"];

//user presses a key to begin game which generates a word from dogsArray

document.onkeyup = function(event) {

var startPress = event.key;
var randomDog = dogsArray[Math.floor(Math.random() * dogsArray.length)];

if (startPress === "1") {
	document.getElementById("wordtoguess").innerHTML = " " + randomDog;
}	
	else {
	console.log("press 1 to play")
	}

};




