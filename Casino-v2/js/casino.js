const generate = document.getElementById("limit");
const limitInput = generate.querySelector("input");
const guess = document.querySelector("#guessNumber");
const guessInput = document.querySelector("#guessNumber input");
const result = document.querySelector("#result");
const userResult = document.querySelector("#result span:first-child");
const machineResult = document.querySelector("#result span:last-child"); 
const outcom = document.querySelector("#outcom");
const outcomResult = document.querySelector("#outcom span:first-child");
const winnerResult = document.querySelector("#outcom span:last-child");
const greeting = document.querySelector("#winnerZone span:first-child");

//도전 횟수랑 최소 도전 횟수까지 같이 관리해보기

const WINNER_KEY = "winnerNum"
const HIDDEN_CLASSNAME = "hidden";
const RESULT_CLASSNAME = "resultBox";
const OUTCOM_CLASSNAME = "outcomeBox";

let tryNum = 0;
let winnerNum = localStorage.getItem(WINNER_KEY);


function generateRandomNum(event){
    event.preventDefault();
    result.classList.remove(HIDDEN_CLASSNAME);
    result.classList.add(RESULT_CLASSNAME);
    const limitNum = parseInt(limitInput.value);
    if(limitNum < 0){
        alert("Please enter a natural number greater than or equal to zero.");
    } else{
        tryNum += 1;
        const guessNum = parseInt(guessInput.value);
        const randomNum = Math.floor(Math.random() * limitNum);
        if(guessNum === randomNum){
            outcom.classList.remove(HIDDEN_CLASSNAME);
            outcom.classList.add(OUTCOM_CLASSNAME);
            userResult.innerText = `You chose: ${guessNum} ,`;
            machineResult.innerText = `the machine chose: ${randomNum}`;
            if(winnerNum === null){
                localStorage.setItem(WINNER_KEY, tryNum);
                outcomResult.innerText = `You won! The number of attempts: ${tryNum}`;
            }else{
                winnerNum = parseInt(winnerNum);
                if(winnerNum > tryNum){
                    outcomResult.innerText = `You won! And you are current champion! The number of attempts: ${tryNum}`;
                    localStorage.setItem(WINNER_KEY, tryNum);
                } else{
                    outcomResult.innerText = `You won! The number of attempts: ${tryNum}`;
                }
            }
        } else{
            outcom.classList.remove(HIDDEN_CLASSNAME);
            outcom.classList.add(OUTCOM_CLASSNAME);
            userResult.innerText = `You chose: ${guessNum} ,`;
            machineResult.innerText = `the machine chose: ${randomNum}`;
            outcomResult.innerText = `You lost!`;
        }
    }

}

if(winnerNum === null){
    greeting.innerText = `You are first challenger!`;
} else{
    greeting.innerText = `The current champion's number of attmpts is ${winnerNum}`;
}

guess.addEventListener("submit", generateRandomNum);