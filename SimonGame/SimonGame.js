
/*

Welcome to the Simon Game by Michael Akindolie
Click the start button to begin
After clicking, the game will begin in 3 seconds
To show that the game is going, the start light underneath the start button will light up green
If it is red then the game is not running
The goal is to repeat the pattern that the computer plays, exactly as it is played
If you take more than 5 seconds to click a button or that button is correct,
then its a game over and all four buttons will flash simultaneously 5 times to 
indicate that.
Your all time highest score is displayed on the left,
and your previous games score is displayed on the right
The game goes on forever, until you lose  
Goodluck Player!

*/


// Variable initialisations
// We are initialising variables to use 
/*
I use let for variables I might change later 
and const for variables that I do not intend to change at any stage
*/ 
let computerOrder = []; // Store the computer order
let playerOrder = []; // Store the player order
let gameOver = false; // Keep track if the game is over 
let powerOn = false; //Keep track if the power is off
let turn; // The turn number
let intervalId; // Used for interval timing
let colours = ["red", "blue", "yellow", "green"]; // An array for the computer to choose from
let flash = 0; // The number of flashes
let computerTurn; // Kepp track of whether its the computers turn
let interval = 800; // A delay that gets shorter as the game progresses.
// The delay between button presses
let playerTurn = false; // Whether or not the power is off
let intervalC; // An interval for the buttons to flash 5 times consecutively
let counter = 1; // A counter for again the buttons to flash 5 times consecutively (function)
let highestScore = 0; // The highest score yet
let score = 0; // The current score
let time; // Timer for the 5 second gameover rule

// These variables are linked to my html elements by their id's
let red = document.getElementById("red");
let blue = document.getElementById("blue");
let green = document.getElementById("green");
let yellow = document.getElementById("yellow");
let startButton = document.getElementById("startButton");
let startLight = document.getElementById("startLight");
let score1 = document.getElementById("previousScore");
let score2 = document.getElementById("highestScore");


//////// Event Listeners
// When the start button is pushed and the games off then we start the game
// Else if the game is on then we turn it off
startButton.addEventListener("click", function() {
    
    if(!powerOn){
      powerOn = true;
      gameOver = false;
      startLightOn();
      
setTimeout(() => {
  play();
}, 3000);
     
    } 
    else {
      clearColor();
      powerOn = false;
      gameOver = true;
      
      clearInterval(intervalId);
      startLightOff();
      
    }
    
      });
/*
 When the red button is clicked it lights up and "red" is pushed to the
 player order array. A timer is started to see if the player takes more than 5 seconds
 If the player takes more than 5 seconds or the button they clicked is
 incorrect, then the game ends
*/
red.addEventListener('click', function(){

if(!computerTurn && playerTurn){
playerOrder.push("red");
check();
console.log("Timer Cleared");
clearTimeout(time);
console.log("Timer Started");
time = setTimeout(function(){ 
          gameOver = true;
          check();           
        }, 5000);
redOn();
setTimeout(() => {
clearColor();
}, 250);
}

})

/*
 When the blue button is clicked it lights up and "blue" is pushed to the
 player order array. A timer is started to see if the player takes more than 5 seconds
 If the player takes more than 5 seconds or the button they clicked is
 incorrect, then the game ends
*/
blue.addEventListener('click', function(){

if(!computerTurn && playerTurn){
playerOrder.push("blue");
check();
console.log("Timer Cleared");
clearTimeout(time);
console.log("Timer Started");
time = setTimeout(function(){ 
  gameOver = true;
          check();  
          }, 5000);
blueOn();
setTimeout(() => {
clearColor();
}, 250);
}
})
/*
 When the green button is clicked it lights up and "green" is pushed to the
 player order array. A timer is started to see if the player takes more than 5 seconds
 If the player takes more than 5 seconds or the button they clicked is
 incorrect, then the game ends
*/
green.addEventListener('click', function(){

if(!computerTurn && playerTurn){
playerOrder.push("green");
check();
console.log("Timer Cleared");
clearTimeout(time);
console.log("Timer Started");
time = setTimeout(function(){ 
  gameOver = true;
          check(); 
          }, 5000);
greenOn();
setTimeout(() => {
clearColor();
}, 250);
}
})
/*
 When the yellow button is clicked it lights up and "yellow" is pushed to the
 player order array. A timer is started to see if the player takes more than 5 seconds
 If the player takes more than 5 seconds or the button they clicked is
 incorrect, then the game ends
*/
yellow.addEventListener('click', function(){

if(!computerTurn && playerTurn){
playerOrder.push("yellow");
check();
console.log("Timer Cleared");
clearTimeout(time);
console.log("Timer Started");
time = setTimeout(function(){ 
          gameOver = true;
          check(); 
          }, 5000);
yellowOn();
setTimeout(() => {
clearColor();
}, 250);
}
})






// Functions

// Function turns on the startLight for the game. (Light goes green)
function startLightOn(){
startLight.style.backgroundColor = "lightgreen";

setTimeout(() => {
}, 3000);

}

// Function turns off the startLight for the game. (Light goes red)

function startLightOff(){

startLight.style.backgroundColor = "tomato";

}

// Turns the red button on (to a light red)
  function redOn(){

  console.log("redOn");
  red.style.backgroundColor = "tomato";
}
// Turns the blue button on (to a light blue)

function blueOn(){

  console.log("blueOn");
  blue.style.backgroundColor = "dodgerblue";

}
// Turns the green button on (to a light green)

function greenOn(){

  console.log("greenOn");
  green.style.backgroundColor = "lightgreen";

}
// Turns the yellow button on (to a light yellow)

function yellowOn(){

  console.log("yellowOn");
  yellow.style.backgroundColor = "yellow";

}
/*
 Clears all colors on the buttons and reverts them to the original 
 darkened colors
*/
function clearColor(){

  red.style.backgroundColor = "darkred";
  blue.style.backgroundColor = "darkblue";
  green.style.backgroundColor = "darkgreen";
  yellow.style.backgroundColor = "darkgoldenrod";

}

/*
 This function ensures all variables are reset then runs the game function
 On an interval timer continuously until the player gets a game over
 */
function play(){


computerOrder = [];
playerOrder = [];
gameOver = false;
turn = 1;
flash = 0;
interval = 800;
intervalId = 0;
intervalC = 0;
score = 0;


computerTurn = true;

intervalId = setInterval(game, interval);

}

// This is the main function that runs the game
// It also alternates between the players turn and computers turn
function game(){
  console.log("Timer Cleared");
  clearTimeout(time);

// If its the players turn then let them click the buttons
      
// If its the players turn then the computer stops flashing buttons
// Which gives the player time to click the buttons
if(flash == turn){
      
        clearInterval(intervalId);
        computerTurn = false;
         clearColor();
         playerTurn = true;
         console.log("Timer Started");
         clearTimeout(time);
         time = setTimeout(function(){ 
          gameOver = true;
          check(); 
          }, 5000);

        }
        // Computer is choosing a random color and then is gonna flash it
      let random = Math.floor(Math.random() * 4);
      computerOrder.push(colours[random]);
      if(computerTurn){
      clearColor();
      setTimeout(() => {
    
      switch(computerOrder[flash]){
      
        case "red":
        redOn();
        flash++; 
        break;
        
        case "blue":
        blueOn();
        flash++;
        break;
        
        case "green":
        greenOn();
        flash++;
        break;
        
        case "yellow":
        yellowOn();
        flash++;
        break;
      }
      }, 200);
      }
      }

/*
This function flashes all buttons 5 times when its a 
gameover and a player has lost
*/
function allButtonsOn(){

if(counter <= 5){
counter++;
redOn();
blueOn();
greenOn();
yellowOn();
setTimeout(() => {
clearColor();
}, 300);

} else{
  clearInterval(intervalC);
}
}

/*
This function updates the previous game score and the all
time highs score
*/
function updateScores(){
score1.innerHTML = score;
if(score > highestScore){
  highestScore = score;
  score2.innerHTML = score;

}

}
// This function checks to see if the player is correct or not
function check(){
// Check if the arrays are the same or if  its a gameover
if(playerOrder[playerOrder.length-1] !== computerOrder[playerOrder.length-1] || gameOver){
  clearTimeout(time);
  clearColor();
  console.log("GameOver");
  playerTurn = false;
  gameOver = true;
  startLightOff();
  updateScores();
  intervalId = setInterval(allButtonsOn, 700);
  powerOn = false;
  turn = 1;





}
// If its not a game over continue on and add 1 to the turn number
if(turn == playerOrder.length && !gameOver){

  turn++;
  playerOrder = [];
  score+=1;  
  computerTurn = true;
  flash = 0;
  // speed up the game at turn 5, 9, and 13
if(turn == 5){
interval -= 200;
} else if(turn == 9){
interval -= 130;
} else if(turn == 13){
interval -= 100;
}
  
  intervalId = setInterval(game, interval);
}
}

