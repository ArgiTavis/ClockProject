const makeDropDown = () => {
    for (i = 0; i <= 11; i++){
        console.log (1+i);
    }
}

const makeTime = () => {
    let today = new Date();
    let hours = today.getHours() % 12 || 12;
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    console.log(hours + ':' + minutes + ':' + seconds);
}

const addTimeToDom = () =>{

}

makeDropDown();
makeTime();