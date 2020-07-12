const makeDropDown = () => {
    for (i = 0; i <= 11; i++){
        console.log (1+i);
    }
}

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






let select = document.getElementById('options');



const testScript = () =>{
    if (`${event.target.value}` == hours12){
        alert('holy crap batman we did it!');
    }

}

select.addEventListener("change", testScript);










//
// const addTimeToDom = () =>{

// }

// makeDropDown();
// makeTime();