var hr = document.getElementsByClassName("hr")[0];
var min = document.getElementsByClassName("min")[0];
var sec= document.getElementsByClassName("sec")[0];

function dayNight(){
    var hrr = new Date().getHours()
    if(hrr>=6 && hrr<=18)
    document.getElementsByTagName("body")[0].style.backgroundColor = '#fff';
    else
    document.getElementsByTagName("body")[0].style.backgroundColor = '#1f1f1f'
}

setInterval(()=>{
    var date = new Date()
    var hour = date.getHours()%12;
    var minute = date.getMinutes()
    var second = date.getSeconds()
    // console.log((hour));
    hour = hour*30+minute*0.5;

    
    dayNight()

    hr.style.transform = `rotate(${hour}deg)`
    min.style.transform = `rotate(calc(${minute} * 6deg))`
    sec.style.transform = `rotate(calc(${second} * 6deg))`
})