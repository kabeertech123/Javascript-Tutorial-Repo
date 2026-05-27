let userInput = "";
let cuChoice = "";
let randomNum = 0;

randomNum = Math.floor(Math.random() * 3)

let cuChoiceArray = ["🪨", "🧻", "✂️"];

handleCuChoice(cuChoiceArray[randomNum]);




const buttons = document.querySelectorAll(".player-input-btn"); // Get all buttons with the class "player-input-btn"




buttons.forEach(function(btn, index) { // Loop through every button in the NodeList once
    btn.addEventListener("click", function getBtnInfo(){
        handleUserChoice(btn.textContent);

    //  Attach a click listener to the current button

    // This listener stays attached after the loop finishes
    })
})

function handleUserChoice(choice){
    
    userInput = choice;
    console.log(userInput);
    
}

function handleCuChoice(choice){
    cuChoice = choice;
    console.log(cuChoice)
}

function gameLoop(userInput, cuInput){

    let win;

    
   

    

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