debugger;
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears = "1 Jan 2021";

function callDate() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds  % 60);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const days = Math.floor(totalSeconds / 3600 / 24);

daysEl.innerHTML = days;
hoursEl.innerHTML = formatWrongToCorrect(hours);
minutesEl.innerHTML = formatWrongToCorrect(minutes);
secondsEl.innerHTML = formatWrongToCorrect(seconds);
}

function formatWrongToCorrect(time) {
    return time < 10 ? `0${time}` : time; 
}

//initial startup
setInterval(callDate, 1000);
callDate();
                              
                             
