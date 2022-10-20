let day = document.getElementById("day"),
hour = document.getElementById("hour"),
minute = document.getElementById("minute"),
second = document.getElementById("second");

setInterval(() => {
    // my own time for reminder 
    let reminder = new Date("Oct 20 2030 05:40:20").getTime();
// time of the system 
let currentTime = new Date().getTime();
let finalTime = reminder - currentTime;
// console.log(finalDate);
let days = Math.floor(finalTime/(1000*24*60*60));
// console.log(days)

let hours = Math.floor((finalTime % (1000*60*24*60))/(1000*60*60));
// console.log(hours);

let minutes = Math.floor((finalTime % (1000*60*60))/(1000*60));
// console.log(minutes)


let seconds = Math.floor((finalTime % (1000*60))/1000);
// console.log(seconds)

document.getElementById("day").innerHTML = days + " : ";
document.getElementById("hour").innerHTML = hours + " : ";
document.getElementById("minute").innerHTML = minutes + " : ";
document.getElementById("second").innerHTML = seconds;
}, 1000);

