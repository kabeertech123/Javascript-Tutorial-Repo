
function checker(){
    let userInput = document.querySelector('.input-box-js').value;

    let userInputLower = userInput.toLowerCase();

    console.log(userInputLower);
    

    for(let i = 0; i < userInputLower.length; i++){
        for(let j = 0; j < userInputLower.length; j++){
            if((userInputLower[i] === userInputLower[j]) && (i != j)) {
                console.log('This is not a isogram');
                break; 
            }
            
        }
    }



}
