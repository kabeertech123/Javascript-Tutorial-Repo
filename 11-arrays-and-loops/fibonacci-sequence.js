const arr = [0,1];


function generateNumbers(){
    let lastNumPos = arr.length - 1;
    let secondLastNumPos = lastNumPos - 1;
   
    arr.push(arr[lastNumPos] + arr[secondLastNumPos]);

    displayNumbers()

}

function displayNumbers(){

    let textHTML = '';

    for(let i = 0; i < arr.length; i++){
        const num = arr[i];
        const html = `<p>${num}</p>`;
        textHTML += html;
    }

    console.log(textHTML)

    document.querySelector('.js-display-div').innerHTML = textHTML


}