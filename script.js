let alarmTime = -1;

const createTime = () => {
    const today = new Date();
    const hours24 = today.getHours();
    const hours12 = formatTime12(hours24);
    const timeOfDay = getTimeOfDay(hours24);
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    if (minutes < 10){
        minutes = '0' + minutes;
    }
    if (seconds < 10){
        seconds = '0' + seconds;
    }

    const time = {
        "hours24":hours24,
        "hours12": hours12, 
        "timeOfDay": timeOfDay, 
        "minutes": minutes, 
        "seconds": seconds
    };

    return time;
};

const createNumberArray = (startValue, endValue) => {
    let numberArray = [];
    for (let i = startValue; i <= endValue; i++) {
        numberArray.push(i);
    }

    return numberArray;
};

const createDropdown = (timeOptions) => {
    const optionsArray = timeOptions.map(getOptionElement);
    optionsArray.forEach(addOptionsToDropdown);
};

const getOptionElement = (timeValue) => {
    const timeOfDay = getTimeOfDay(hours24);
    const formattedTime = formatTime12(timeValue);

    const option = document.createElement('OPTION');
    option.setAttribute('value', formattedTime);
    option.innerHTML = `${formattedTime} ${timeOfDay}`;

    return option;
};

const addOptionsToDropdown = (optionElement) => {
    const dropDown = document.getElementById('options');

    dropDown.appendChild(optionElement);
    dropDown.addEventListener('change', changeTimeSelected);
};

const updateTime = () => {
    const timeElement = document.getElementById('time');
    const time = createTime();
    const fullTime = `${time.hours12}:${time.minutes}:${time.seconds} ${time.timeOfDay}`;

    timeElement.innerHTML = fullTime;

    if (alarmTime === time.hours24)  {
        alert(`ALARM: ${fullTime}`);
    }   

    setInterval(updateTime, 1000);
};

const changeTimeSelected = (event) => {
    timeSelected = event.target.value;
    alarmTime = timeSelected;
};

const getTimeOfDay = (time) => (time >= 12) ? 'AM' : 'PM';
const formatTime12 = (time) => time % 12 || 12;

(() => {
    createDropdown(createArray(0, 23));
    updateTime();
})();








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