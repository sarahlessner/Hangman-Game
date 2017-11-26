
dogsArray = ["labrador", "husky", "rottweiler", "pitbull", "pug", "beagle",
"collie", "shepherd", "yorkie", "samoyed", "mastiff"];

imagesArray =["assets/images/hangman10.bmp", "assets/images/hangman9.bmp", "assets/images/hangman8.bmp",
"assets/images/hangman7.bmp", "assets/images/hangman6.bmp","assets/images/hangman5.bmp",
"assets/images/hangman4.bmp", "assets/images/hangman3.bmp", "assets/images/hangman2.bmp",
"assets/images/hangman1.bmp", "assets/images/hangman0.bmp"];

dogImgArray = ["assets/images/puppy0.jpg", "assets/images/puppy01.jpg", "assets/images/puppy02.jpg",
"assets/images/puppy03.jpg","assets/images/puppy04.jpg","assets/images/puppy05.jpg","assets/images/puppy06.jpg",
"assets/images/puppy07.jpg","assets/images/puppy08.jpg","assets/images/puppy09.jpg","assets/images/puppy11.jpg",];

var randomIdx = "";
var randomDog = "";
var hiddenDog;
var wrongletters = [];
var wins = 0;
var turnsleft = 10;

document.getElementById("wins").innerHTML = " " + wins;
document.getElementById("turnsleft").innerHTML = " " + turnsleft;
document.getElementById("guesstheword").innerHTML = "Press 1 to Guess a Breed:";
document.getElementById("wordtoguess").innerHTML = "? ? ? ? ? ? ?";

document.onkeyup = function(event) {
	document.getElementById("genword").innerHTML = "";

	var keyPress = event.key;

	keyPress = keyPress.toLowerCase();


	if (randomDog === "") {

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
						document.getElementById("guesstheword").innerHTML = "YOU LOSE! The dog you were trying to guess was:"
						document.getElementById("genword").innerHTML = "Press 1 to Generate a New Word";
						document.getElementById("wordtoguess").innerHTML = " " + randomDog;
						randomDog = "";
					}
				}
			}
				if (hiddenDog.join("") == randomDog) {
					wins++;
					document.getElementById("wins").innerHTML = " " + wins;
					document.getElementById("guesstheword").innerHTML = "Who's a good boy? "
					document.getElementById("puppypic").src = dogImgArray[randomIdx];
					randomDog = "";
					document.getElementById("genword").innerHTML = "Press 1 to Generate a New Dog to Guess";
				}
			}
			else {
					document.getElementById("genword").innerHTML = "Press any letter key to make a guess";
				}
	}
};

function initRound(){
	randomIdx = Math.floor(Math.random() * dogsArray.length);
	randomDog = dogsArray[randomIdx];
	hiddenDog = new Array(randomDog.length);
	wrongletters = [];
	turnsleft = 10;

	for (var i = 0; i < hiddenDog.length; i++){
		hiddenDog[i] = "_";
	}

	document.getElementById("guesstheword").innerHTML = "Guess the Dog Breed by Pressing Letters:";
	document.getElementById("wordtoguess").innerHTML = " " + hiddenDog.join(" ");
	document.getElementById("guessed").innerHTML = " " + wrongletters.join(" ");
	document.getElementById("turnsleft").innerHTML = " " + turnsleft;
	document.getElementById("hangimages").src = imagesArray[turnsleft];
	document.getElementById("puppypic").src = "";
};
