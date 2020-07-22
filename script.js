let today = new Date();
let hours24 = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();
let tod = 'AM';
let hours12 = hours24;

if (hours24 >= 12){
    hours12 = hours24 - 12;
    tod = 'PM'
} 
if (hours24 == 0) {
    hours12 = 12;
}


let emptyArray = [];

const makingArray = () =>{
    for (let i = 0; i <= 23; i++) {
        emptyArray.push(i);
        
    }
    return emptyArray;
}




const addButtonsToDOM = (element) =>{
    TOD = 'AM'
    const select = document.getElementById('options');
    const option = document.createElement('OPTION')
    option.setAttribute('value',element)
    if (element >= 12){
        element = element - 12
        TOD = 'PM'
        }
    if (element == 0){
        element = 12
    }
    option.innerHTML = element + ' ' + TOD
    select.appendChild(option)

}


const createButtons = (array) =>{
    array.forEach(element => addButtonsToDOM(element));
}

createButtons(makingArray());







let select = document.getElementById('options');



const testScript = () =>{
    if (`${event.target.value}` == hours24){
        alert('holy crap batman we did it!');
    }

}


select.addEventListener("change", testScript);

// let oneSecond = 1000;
// setInterval(testScript,oneSecond);










//
// const addTimeToDom = () =>{

// }

// makeDropDown();
// makeTime();