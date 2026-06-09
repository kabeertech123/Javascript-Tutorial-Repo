let userInput = 9;
let run = true;
let politenessTotal = 0
let counter = 0;

politenessAlgor(9, 0);



function politenessAlgor(userInput, politenessTotal){

    for(let startValue = 1; startValue < userInput+1; userInput++){
        
        for (let current = startValue; current < userInput+1; current++){
            
            counter += current;

            if(counter == userInput){
                politenessTotal += 1;
                console.log(politenessTotal);
            }
        }
    }

}