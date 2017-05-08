
dogsArray = ["labrador", "husky", "rotweiler", "pitbull", "pug", "beagle", 
"collie", "shepherd", "yorkie", "samoyed", "newfoundland", "maltese"];
imagesArray =["assets/images/hangman10.bmp", "assets/images/hangman9.bmp", "assets/images/hangman8.bmp", 
"assets/images/hangman7.bmp", "assets/images/hangman6.bmp","assets/images/hangman5.bmp",
"assets/images/hangman4.bmp", "assets/images/hangman3.bmp", "assets/images/hangman2.bmp", 
"assets/images/hangman1.bmp", "assets/images/hangman0.bmp"];

var randomDog = "";
var hiddenDog;
var wrongletters = [];
var wins = 0;
var turnsleft = 10;

document.getElementById("wins").innerHTML = " " + wins;
document.getElementById("turnsleft").innerHTML = " " + turnsleft;

document.onkeyup = function(event) {
	document.getElementById("genword").innerHTML = "";

	var keyPress = event.key;
	
	if (randomDog === "") {
		//pre-game 
		if (keyPress === "1") {
			initRound();
			
		}

		else {

		document.getElementById("genword").innerHTML = "Press 1 to Generate a New Word!!!";

		}
 	
	}
	else {
	
		if (keyPress >= 'a' && keyPress <= 'z') {
			var match = false;
			for (var j = 0; j < randomDog.length; j++) {
				if (keyPress === randomDog[j]) {
					hiddenDog[j] = keyPress;
					match = true;
				}
				
			}
			document.getElementById("wordtoguess").innerHTML = " " + hiddenDog.join(" ");

			if (match === false) {

				if (wrongletters.includes(keyPress)){
					document.getElementById("genword").innerHTML = "Already Guessed - Select a New Letter";
				}
				else { 
					wrongletters.push(keyPress); 
					document.getElementById("guessed").innerHTML = " " + wrongletters.join(" ");
					turnsleft--;
					document.getElementById("turnsleft").innerHTML = " " + turnsleft;
					document.getElementById("hangimages").src = imagesArray[turnsleft];
					if (turnsleft === 0) {
						document.getElementById("guesstheword").innerHTML = "EPIC FAIL! The word you were trying to guess is:"
						document.getElementById("genword").innerHTML = "Press 1 to Generate a New Word";
						document.getElementById("wordtoguess").innerHTML = " " + randomDog;
						randomDog = "";
					}	
				}

			}
			if (hiddenDog.join("") == randomDog) {
				wins++;
				document.getElementById("wins").innerHTML = " " + wins;
				randomDog = "";
				document.getElementById("genword").innerHTML = "Press 1 to Generate a New Word";

			}
		}
		else {
			document.getElementById("genword").innerHTML = "Press any letter key to make a guess"; 
		}	
	}
};

function initRound(){
	document.getElementById("guesstheword").innerHTML = "Guess the Word by Pressing Letters:";
	randomDog = dogsArray[Math.floor(Math.random() * dogsArray.length)];
	hiddenDog = new Array(randomDog.length);
	wrongletters = [];
	turnsleft = 10;
	for (var i = 0; i < hiddenDog.length; i++){
		hiddenDog[i] = "_";

	}

	document.getElementById("wordtoguess").innerHTML = " " + hiddenDog.join(" ");
	document.getElementById("guessed").innerHTML = " " + wrongletters.join(" ");
	document.getElementById("turnsleft").innerHTML = " " + turnsleft;
	document.getElementById("hangimages").src = imagesArray[turnsleft];
	

};

		






