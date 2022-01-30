setInterval(() => {
    var date = new Date();
    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var ampm = " AM"
    var dateAndTime = date.getDate();
    var month= date.getMonth();
    var year = date.getFullYear();
    var day = date.getDay();

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', "May", 'June', 'July',
                    'August', 'September', 'October', 'November', 'december'];

    if(hr>12){
        hr-=12;
        ampm= " PM"
    }

    if(hr<10)
    hr = '0'+hr;

    if(min<10)
    min = '0'+min;

    if(sec<10)
    sec = '0'+sec;

    document.getElementsByClassName('date')[0].textContent = `${days[day]},
     ${dateAndTime} ${months[month]}, ${year}`;
    document.getElementsByClassName('time')[0].textContent = `${hr}:${min}:${sec+ampm}`;
})
