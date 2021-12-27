var msg1 = document.getElementById("message1");

var msg2 = document.getElementById("message2");

var answer = Math.floor(Math.random()*100) + 1;

var guessed_nums = [];

function play(){
	var player_guess = document.getElementById("guess").value;
	
		if(player_guess < 1 || player_guess > 100){
			alert("Please enter a number between 1 and 100.");
		}else{guessed_nums.push(player_guess);

		if(player_guess < answer){
			msg1.textContent = "Your guess is too low.";
			msg2.textContent = "Guessed numbers are: " + guessed_nums;
		}
		else if(player_guess > answer){
			msg1.textContent = "Your guess is too high.";
			msg2.textContent = "Guessed numbers are: " + guessed_nums;
		}
		else if(player_guess == answer){
			msg1.textContent = "You Got it!!";
			msg2.textContent = "The number was: " + answer;
			document.getElementById("butt").disabled = true;
		}
	}
}