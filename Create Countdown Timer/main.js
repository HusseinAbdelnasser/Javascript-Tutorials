
let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

let counter = setInterval(() => {
    
let dateNow = new Date().getTime();

let dateDiff = countDownDate - dateNow;

let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);

let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

let minutes = Math.floor((dateDiff % (1000 * 60 * 60 )) / (1000 * 60 ));

let seconds = Math.floor((dateDiff % (1000 * 60  )) / 1000);



document.querySelector(".info .time .unit .days").innerHTML = days < 10 ? `0${days}`: days;
document.querySelector(".info .time .unit .hours").innerHTML = hours < 10 ? `0${hours}`: hours;
document.querySelector(".info .time .unit .minutes").innerHTML = minutes < 10 ? `0${minutes}`: minutes;
document.querySelector(".info .time .unit .seconds").innerHTML = seconds < 10 ? `0${seconds}`: seconds;

if(dateDiff < 0){
    clearInterval();
}

},1000);


/*
function countdown(duration) {
   
    let minutes, seconds;
    countdownInterval = setInterval(function () {
        minutes = parseInt(duration / 60);
        seconds = parseInt(duration % 60);
  
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;
  
        document.querySelector(".count").innerHTML = `${minutes}:${seconds}`;
  
        if (--duration < 0) {
          clearInterval(countdownInterval);
        }
    }, 1000);
}

countdown(120);
*/


/*
function count (time){
   
    setInterval(() => {

        let min = parseInt(time / 60);
        let sec = parseInt (time % 60)

        min = min < 10 ? `0${min}` : min;
        sec = sec < 10 ? `0${sec}` : sec;
  
        document.querySelector(".min").innerHTML = `${min}:${sec}`;

        if (--time < 0) {
            clearInterval();
        }
        
    }, 1000);
}

count(400);
*/



let myDate = new Date("Sep 07, 1998").getTime();
let dateNow = new Date().getTime();
let myBirthDay = dateNow - myDate;
console.log(Math.floor(myBirthDay / 1000 /60 / 60 / 24 / 30 / 12)); // 25
console.log(Math.floor((myBirthDay % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)));
console.log(Math.floor((myBirthDay % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 )))

