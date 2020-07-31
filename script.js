const createTime = () => {
    let today = new Date();
    let hours24 = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let tod = 'AM';
    let hours12 = hours24 % 12 || 12;
    if (seconds < 10){
        seconds = '0' + seconds;
    }
    if (hours24 >= 12){
        tod = 'PM'
    } 
    if (hours24 == 0) {
        hours12 = 12;
    }
    if (minutes < 10){
        minutes = '0' + minutes
    }
    let time = {"hours12": hours12, "minutes": minutes, "seconds": seconds, "tod": tod, "hours24":hours24};
    return time;
    
}

const makingArray = () =>{
    let emptyArray = [];
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

const addTimeToDom = () =>{
    const time = createTime();
    const fullTime = time.hours12 + ':' + time.minutes + ':' + time.seconds + ' ' + time.tod;
    const timeTag = document.getElementById('time');
    timeTag.innerHTML = fullTime;
    setInterval(addTimeToDom, 1000)
}

const createButtons = (array) => {
    array.forEach(element => addButtonsToDOM(element));
}

const checkForValue = () =>{
    let time = createTime();
    let timeSelected = 1;
    let chosenTime = document.getElementById('options');
    chosenTime.addEventListener('change', changeTimeSelected);
            console.log(timeSelected)
    }

const changeTimeSelected = () =>{
    timeSelected = `${event.target.value}` 
    if(timeSelected = time.hours24){
        alert('Time')};}

createButtons(makingArray());
addTimeToDom();
checkForValue();








//timeSelected

//select.addEventListener("change", testScript);

//Making the selection event listner
// let oneSecond = 1000;
// setInterval(testScript,oneSecond);
// makeDropDown();
// makeTime();

// const refreshTime = () =>{
//     let oneSecond = 1000;
//     setInterval(addTimeToDom,oneSecond)
// }
