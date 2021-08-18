const daysElm = document.querySelector("#days")
const hoursElm = document.querySelector("#hours")
const minuteElm = document.querySelector("#minutes")
const secondsElm = document.querySelector("#seconds")

let endTime = new Date("August 25, 2021 11:00:00 PDT");
let endTimeParse = (Date.parse(endTime)) / 1000;
const timer = () => {
    let now = new Date();
    let nowParse = (Date.parse(now) / 1000);
    let timeLeft = endTimeParse - nowParse;
    let days = Math.floor(timeLeft / 86400); 
    let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }
    daysElm.innerHTML = days + "<span>Days</span>"
    hoursElm.innerHTML = hours + "<span>Hours</span>"
    minuteElm.innerHTML = minutes + "<span>Minutes</span>"
    secondsElm.innerHTML = seconds + "<span>Seconds</span>"
}

setInterval(() => { 
    timer();
}, 1000);