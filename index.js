	// Player name
	var player1 = "player1";
	var player2 = "player2";

	// Function to change the player name
	function editNames() {
		player1 = prompt("Change Player1 name");
		player2 = prompt("Change player2 name");

		document.querySelector("p.Player1").innerHTML = player1;
		document.querySelector("p.Player2").innerHTML = player2;
	}
	// Function to roll the dice
	function rollTheDice() {
		setTimeout(function () {
			var randomNumber1 = Math.floor(Math.random() * 6) + 1;
			var randomNumber2 = Math.floor(Math.random() * 6) + 1;
       // error may by 48 to 52 in between | error is when click on rollTheDice the images gone
			document.querySelectorAll("img")[0].setAttribute("src",
				"images/dice" + randomNumber1 + ".png");

			document.querySelectorAll("img")[1].setAttribute("src",
				"images/dice" + randomNumber2 + ".png");

       // if or else condiction
			if (randomNumber1 === randomNumber2) {
				document.querySelector("h1").innerHTML = "Draw!";
			}

			else if (randomNumber1 < randomNumber2) {
				document.querySelector("h1").innerHTML
								= (player2 + " WINS! 🚩");
			}

			else {
				document.querySelector("h1").innerHTML
								= (player1 + " WINS! 🚩");
			}
		},100);
	}
