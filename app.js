// GAME RULES
// Player must select a number between a min and a max
// Player gets a certain number of guesses
// Notify player of guesses remaining
// Notify the player if the answer is correct and if he loses
// Let the player choose to play again


// VARIABLES
const minNum = 1,maxNum = 6;

// Add min and max numbers
document.querySelector('.minNum').textContent = minNum;
document.querySelector('.maxNum').textContent = maxNum;
// genNum is the generated random number
let genNum = 1+ Math.floor(Math.random()*6), tryNo = 3;
let guessBtn = document.getElementById('playBtn');




const userNum = document.getElementById("userInput"),
      
      resultMsg= document.querySelector('.result');
      corr = "is correct";
      incorr = "is not correct";


// FUNCTIONS
//GAMEOVER
function gOver(){
  if (tryNo <= 1){
    guessBtn.value = "PLAY AGAIN";
    document.getElementById('userInput').disabled = true;

  }else{
   return tryNo; 
  }
}
// NAN INCORRECT
function nanInc(){
  setTimeout((document.getElementById('roll').style.display = "block"),1000);
  gOver();
  
  return tryNo-=1;
}

// PLAY AGAIN WIN
function pAgain(){
  setTimeout((document.getElementById('party').style.display = "block"),4000);
  guessBtn.value = "PLAY AGAIN";
  
}

// DISPLAY
function display(){
  resultMsg.textContent = "Game Over. You lost, the correct number was "+genNum;
}

document.getElementById('roll').style.display = "none"
document.getElementById('party').style.display = "none"
// Add a listerener
guessBtn.addEventListener("mousedown", compare);

function compare(e){
  let guess = parseInt(userNum.value);

  if (guessBtn.value === "PLAY AGAIN"){
    display();
    location.reload();
  }
  else if (isNaN(guess)){
    document.getElementById('roll').style.display = "none"
      nanInc();
      resultMsg.textContent = guess +" "+ incorr+". You have "+tryNo+" chances left" ;
    }else if(guess === genNum){
      resultMsg.style.color = 'green';
      resultMsg.textContent = "You're correct";
      pAgain();
      document.getElementById('roll').style.display = "none"
    }else{
      nanInc();
      resultMsg.style.color = 'red';
      resultMsg.textContent = guess +" "+ incorr+". You have "+tryNo+" chances left" ;
    }
}
