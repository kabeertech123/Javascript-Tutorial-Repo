let userInput = "";
let cuChoice = "";
let randomNum = 0;
let gameLoop = true;
let win = 0;
let draw = 0;
let loss = 0;

randomNum = Math.floor(Math.random() * 3)

let cuChoiceArray = ["🪨", "🧻", "✂️"];


const buttons = document.querySelectorAll(".player-input-btn"); // Get all buttons with the class "player-input-btn"




buttons.forEach(function(btn, index) { // Loop through every button in the NodeList once
    btn.addEventListener("click", function getBtnInfo(){
        handleUserChoice(btn.textContent);
        handleCuChoice(cuChoiceArray[randomNum]);
        gameLoopFunction(userInput, cuChoice);
        

    //  Attach a click listener to the current button

    // This listener stays attached after the loop finishes
    })
})

const resetBtn = document.querySelector(".reset-score-btn");

resetBtn.addEventListener("click", function resetScore(){
    document.querySelector(".win-loss-tie-counter").textContent = "";
     win = 0;
    draw = 0;
     loss = 0;

})



function handleUserChoice(choice){
    
    userInput = choice;
    console.log(userInput);
    
}

function handleCuChoice(choice){
    cuChoice = choice;
    console.log(cuChoice)
}

function gameLoopFunction(userInput, cuChoice){

    switch (userInput){

        case "🪨":
            if (userInput == cuChoice){
                document.querySelector(".result").textContent = "Draw!";
                 document.querySelector(".playerscore-and-computerscore").textContent = `You: ${userInput} Cu: ${cuChoice}`;
                 draw +=1;
                document.querySelector(".win-loss-tie-counter").textContent = `win: ${win} | loss: ${loss} | draw:${draw}`; 
                randomNum = Math.floor(Math.random() * 3)
                break;
            }

            else if (cuChoice == "✂️"){
                document.querySelector(".result").textContent = "You win!";
                win+=1;
                document.querySelector(".playerscore-and-computerscore").textContent = `You: ${userInput} Cu: ${cuChoice}`;
                document.querySelector(".win-loss-tie-counter").textContent = `win: ${win} | loss: ${loss} | draw:${draw}`; 
                randomNum = Math.floor(Math.random() * 3)
                break;
            }

            else if (cuChoice == "🧻"){
                document.querySelector(".result").textContent = "You Lose!";
                loss += 1;
                 document.querySelector(".playerscore-and-computerscore").textContent = `You: ${userInput} Cu: ${cuChoice}`;
                 document.querySelector(".win-loss-tie-counter").textContent = `win: ${win} | loss: ${loss} | draw:${draw}`; 
                randomNum = Math.floor(Math.random() * 3)
                break;
            }

        case "✂️":
             if (userInput == cuChoice){
                document.querySelector(".result").textContent = "Draw!";
                draw +=1;
                document.querySelector(".playerscore-and-computerscore").textContent = `You: ${userInput} Cu: ${cuChoice}`;
                document.querySelector(".win-loss-tie-counter").textContent = `win: ${win} | loss: ${loss} | draw:${draw}`; 
                randomNum = Math.floor(Math.random() * 3)
                break;
            }

            else if (cuChoice == "🪨"){
                document.querySelector(".result").textContent = "You Lose!";
                loss += 1;
                 document.querySelector(".playerscore-and-computerscore").textContent = `You: ${userInput} Cu: ${cuChoice}`;
                 document.querySelector(".win-loss-tie-counter").textContent = `win: ${win} | loss: ${loss} | draw:${draw}`; 
                randomNum = Math.floor(Math.random() * 3)
                break;
            }

            else if (cuChoice == "🧻"){
                document.querySelector(".result").textContent = "You Win!";
                win+=1;
                 document.querySelector(".playerscore-and-computerscore").textContent = `You: ${userInput} Cu: ${cuChoice}`;
                 document.querySelector(".win-loss-tie-counter").textContent = `win: ${win} | loss: ${loss} | draw:${draw}`; 
                randomNum = Math.floor(Math.random() * 3)
                break;
            }

        case "🧻":
             if (userInput == cuChoice){
                document.querySelector(".result").textContent = "Draw!";
                draw += 1;
                 document.querySelector(".playerscore-and-computerscore").textContent = `You: ${userInput} Cu: ${cuChoice}`;
                 document.querySelector(".win-loss-tie-counter").textContent = `win: ${win} | loss: ${loss} | draw:${draw}`; 
                randomNum = Math.floor(Math.random() * 3)
                break;
            }

            else if (cuChoice == "🪨"){
                document.querySelector(".result").textContent = "You Win!";
                win += 1
                 document.querySelector(".playerscore-and-computerscore").textContent = `You: ${userInput} Cu: ${cuChoice}`;
                 document.querySelector(".win-loss-tie-counter").textContent = `win: ${win} | loss: ${loss} | draw:${draw}`; 
                randomNum = Math.floor(Math.random() * 3)
                break;
            }

            else if (cuChoice == "✂️"){
                document.querySelector(".result").textContent = "You lose!";
                loss += 1;
                 document.querySelector(".playerscore-and-computerscore").textContent = `You: ${userInput} Cu: ${cuChoice}`;
                 document.querySelector(".win-loss-tie-counter").textContent = `win: ${win} | loss: ${loss} | draw:${draw}`; 
            
                randomNum = Math.floor(Math.random() * 3)
                break;
            }


    }

    
   

    

}





/* 






rock.addEventListener("click", function playerInputRock(){

    userInput = "rock";

console.log(userInput);
})

paper.addEventListener("click", function playerInputPaper(){

    userInput = "paper";

console.log(userInput);
})

scissors.addEventListener("click", function playerInputScissors(){

    userInput = "scissors";

console.log(userInput);
})





Game loop

Get user input and save in a var

Generate a random number between 1-3

if it is 1, then it is rock
and so on

compare userInput with CuInput

Display the resutlt in h2

Display the userInput and the Computer input

Keep track of each win and lose 

*/