
//Global Variables
var hiddenLetter = generateRandomLetter();
var wins = 0;
var losses = 0;
var remainingGuesses = 9;


//This Function is ran whenever the user presses a key
document.onkeyup = function(event) {
    //LowerCase user entry
    var userInput = event.key.toLowerCase();
    console.log(userInput);
    checkUserinput(userInput);
    
}





function checkUserinput(userInput) {
    if (userInput === hiddenLetter) {
        wins++;
        newComputerLetter();
        remainingGuesses = 9;
        updateScore();
    } else {
        remainingGuesses--;
        if(remainingGuesses < 1) {
            losses++;
            remainingGuesses = 9;
            newComputerLetter();
            updateScore();
        }
    }

    updateScore();
}

function newComputerLetter() {
    hiddenLetter = generateRandomLetter();
}

function updateScore() {
    document.getElementById("Wins").innerHTML = "Wins: " + wins.toString();
    document.getElementById("Losses").innerHTML = "Losses: " + losses.toString();
    document.getElementById("Guesses Left").innerHTML = "Guesses Left: " + remainingGuesses.toString();
    document.getElementById("Guesses").innerHTML = "Your Guesses so far: ";
}


function generateRandomLetter() {
    var randomLetter = "";
    var randomNumber = Math.floor(Math.random() * 27);
    
    switch (randomNumber) {
        case 0:
        randomLetter = "a"
        break;
        case 1:
        randomLetter = "b"
        break;
        case 2:
        randomLetter = "c"
        break;
        case 3:
        randomLetter = "d"
        break;
        case 4:
        randomLetter = "e"
        break;
        case 5:
        randomLetter = "f"
        break;
        case 6:
        randomLetter = "g"
        break;
        case 7:
        randomLetter = "h"
        break;
        case 8:
        randomLetter = "i"
        break;
        case 9:
        randomLetter = "j"
        break;
        case 10:
        randomLetter = "k"
        break;
        case 11:
        randomLetter = "l"
        break;
        case 12:
        randomLetter = "m"
        break;
        case 13:
        randomLetter = "n"
        break;
        case 14:
        randomLetter = "o"
        break;
        case 15:
        randomLetter = "p"
        break;
        case 16:
        randomLetter = "q"
        break;
        case 17:
        randomLetter = "r"
        break;
        case 18:
        randomLetter = "s"
        break;
        case 19:
        randomLetter = "s"
        break;
        case 20:
        randomLetter = "t"
        break;
        case 21:
        randomLetter = "u"
        break;
        case 22:
        randomLetter = "v"
        break;
        case 23:
        randomLetter = "w"
        break;
        case 24:
        randomLetter = "x"
        break;
        case 25:
        randomLetter = "y"
        break;
        case 26:
        randomLetter = "z"
        break;
    }
        console.log("Computer Chose " + randomLetter);
    return randomLetter;
    
}