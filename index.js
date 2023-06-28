

setInterval(() => {
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("mins");
    let seconds = document.getElementById("secs");
    let amPm = document.getElementById("am-pm");
    
    let hrs = new Date().getHours();
    let mins = new Date().getMinutes();
    let secs = new Date().getSeconds();

    let hh = document.getElementById("hh");
    let mm= document.getElementById("mm");
    let ss = document.getElementById("ss");

    let hr_dot = document.querySelector(".hr-dot");
    let min_dot = document.querySelector(".min-dot");
    let sec_dot = document.querySelector(".sec-dot");


    
    
    if (hrs < 12) {
        amPm.innerHTML = "AM";
        hours.innerHTML = hrs;
    
    } else {
        amPm.innerHTML = "PM"
        hrs = hrs - 12;
        hours.innerHTML = hrs;
    
    }
    if (hrs < 10 || mins < 10 || secs < 10) {
        hrs = hrs.toString().padStart(2, "0");
        mins = mins.toString().padStart(2, "0");
       secs =  secs.toString().padStart(2, "0");
    }
    
    hours.innerHTML = hrs + "<br><span>Hours</span></br>";
    minutes.innerHTML = mins + "<br><span>Minutes</span></br>";
    seconds.innerHTML = secs + "<br><span>Seconds</span></br>";
// for ticking effect
    hh.style.strokeDashoffset = 440 - (440 * hrs) / 12;
    mm.style.strokeDashoffset = 440 - (440 * mins) / 60;
    ss.style.strokeDashoffset = 440 - (440 * secs) / 60;
// to put dot to right position
hr_dot.style.transform =  `rotate(${hrs * 30}deg)`;
min_dot.style.transform =  `rotate(${mins * 6}deg)`;
sec_dot.style.transform =  `rotate(${secs * 6}deg)`;

})



