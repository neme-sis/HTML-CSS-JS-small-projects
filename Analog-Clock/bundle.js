var hr = document.getElementsByClassName("hr")[0];
var min = document.getElementsByClassName("min")[0];
var sec= document.getElementsByClassName("sec")[0];

setInterval(()=>{
    var date = new Date()
    var hour = date.getHours()%12;
    var minute = date.getMinutes()
    var second = date.getSeconds()
    // console.log((hour));

    hr.style.transform = `rotate(calc(${hour} * 30deg))`
    min.style.transform = `rotate(calc(${minute} * 6deg))`
    sec.style.transform = `rotate(calc(${second} * 6deg))`
})