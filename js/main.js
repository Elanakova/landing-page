//DOM elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

//Show time
function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    //output time
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
    setTimeout(showTime, 1000);
}

//add zero 
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//set background and greeting
function setBackground() {
    let today = new Date();
    let hour = today.getHours();
    if(hour < 12) {
        //morning
        document.body.style.backgroundImage = "url('./img/morning.jpg')";
        document.body.style.backgroundSize = '100%';
        greeting.textContent = 'Good Morning';
    } else if(hour < 18) {
        //afternoon
        document.body.style.backgroundImage = "url('./img/afternoon.jpg')";
        greeting.textContent = "Good Afternoon";
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = '100%';

        
    } else {
        //evening
        document.body.style.backgroundImage = "url('./img/evening.jpg')";
        greeting.textContent = "Good Evening";
        document.body.style.color = 'white';
    }
}

//Get name
function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

//Set name
function setName(event) {
    if(event.type === 'keypress') {
        //Make sure enter is pressed
        if(event.which === 13 || event.keyCode === 13) {
            localStorage.setItem('name', event.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', event.target.innerText);
    }
}

//Get focus
function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter focus]';
    }  else {
        focus.textContent = localStorage.getItem('focus');
    }
}

//Set name
function setFocus(event) {
    if(event.type === 'keypress') {
        //Make sure enter is pressed
        if(event.which === 13 || event.keyCode === 13) {
            localStorage.setItem('focus', event.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', event.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

showTime();
setBackground();
getName();
getFocus();