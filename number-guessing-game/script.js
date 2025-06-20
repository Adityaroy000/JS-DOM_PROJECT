let randomNumber = parseInt(Math.random()*100 + 1);

const form = document.querySelector('.form');
const userInput = document.querySelector('#guessfield');
const submitBtn = document.querySelector('button');
const prevGuessArray = document.querySelector('.guesses');
const remainSlot  = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const resultParas = document.querySelector('.resultParas');

let prevGuess = [];
// let guessNum = 1;
let remainingGuess = 5;
let playGame = true;

const newPara = document.createElement('p');

if(playGame){
    submitBtn.addEventListener('click',(e)=>{
        e.preventDefault();

        const value = parseInt(userInput.value);
        validateUserInput(value);
    })
}
userInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        submitBtn.click();
    }
});

function validateUserInput(value){
    if(isNaN(value)){
        alert("Please enter a valid number.");
    }else if(value<1){
        alert("Please enter number greater than 0");
    }else if(value>100){
        alert("Please enter number smaller than 100");
    }
    else{
        prevGuess.push(value);
        if(remainingGuess == 1){
            updateInfo(value);
            displayMessage(`Game Over! Number was: ${randomNumber}`)
            endGame();
        }else{
            updateInfo(value);
            checkGuess(value);
        }
    }
}

function updateInfo(value){
    remainingGuess--;
    prevGuessArray.innerHTML = prevGuess.join(', ');
    remainSlot.innerHTML = `${remainingGuess}`;
}

function checkGuess(value){
    if (value === randomNumber) {
        displayMessage(`<h3>Congratulations! YOU Guessed it Right</h3>`);
        endGame();
    } else if (value < randomNumber) {
        displayMessage(`Number is TOO low`);
    } else if (value > randomNumber) {
        displayMessage(`Number is TOO High`);
    }
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    submitBtn.setAttribute('disabled','');
    
    newPara.classList.add('button');

    newPara.innerHTML = `<h2 id="newGame" style="cursor:pointer;">Start New Game</h2>`;
    document.getElementById("newGameContainer").appendChild(newPara);

    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');

    newGameButton.addEventListener('click',()=>{
        randomNumber = parseInt(Math.random()*100 + 1);
        prevGuess = [];
        remainingGuess = 5;
        prevGuessArray.innerHTML = '';
        remainSlot.innerHTML = `${remainingGuess}`;
        lowOrHi.innerHTML = '';
        userInput.removeAttribute('disabled');
        submitBtn.removeAttribute('disabled');
        document.getElementById("newGameContainer").removeChild(newPara);


        playGame = true;
    })
}