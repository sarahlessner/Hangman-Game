
dogsArray = ["labrador", "husky", "rotweiler", "pitbull", "pug", "beagle", "collie", "shepherd", "yorkie", "samoyed", "newfoundland", "maltese"];

//user presses a key to begin game which generates a word from dogsArray

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
			if (match === false) {

				if (wrongletters.includes(keyPress)){
					document.getElementById("genword").innerHTML = "Already Guessed - Select a New Letter";
				}
				else { 
					wrongletters.push(keyPress); 
					document.getElementById("guessed").innerHTML = " " + wrongletters.join(" ");
					turnsleft--;
					document.getElementById("turnsleft").innerHTML = " " + turnsleft;
					if (turnsleft === 0) {
						initRound();
					}	
				}

			}
			document.getElementById("wordtoguess").innerHTML = " " + hiddenDog.join(" ");
			if (hiddenDog.join("") == randomDog) {
				wins++;
				document.getElementById("wins").innerHTML = " " + wins;
				randomDog = "";
				document.getElementById("genword").innerHTML = "Press 1 to Generate a New Word";

			}
			
		}
	}
};

function initRound(){
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

};

		

	








// conceal "randomDog" wordtoguess in HTML so user sees only _ _ _ _ _ ...






