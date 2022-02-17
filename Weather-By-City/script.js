const key = "e91416c34bf1e0a7320b291941659b7c"
var city=null;
var cityName = document.getElementsByTagName("h2")[0];
var description = document.getElementsByTagName("h3")[0];
var span = document.getElementsByTagName("span");
var hum = document.getElementsByTagName("h5")[0];
const button = document.getElementsByTagName("button")[0]

window.addEventListener('load',()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((data)=>{
            var latitude = data.coords.latitude;
            var longitude = data.coords.longitude;
            const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`
            fetch(url2).then(data=>{
                return(data.json())
            }).then((content)=>{
                console.log(content);
                var {main, weather,name}= content;
                cityName.textContent = name;
                description.textContent = weather[0].main
                span[0].textContent = "Max: " + (parseFloat(main.temp_max)-273.15).toPrecision(4)+" °C"
                span[1].textContent = "Min: " + (parseFloat(main.temp_min)-273.15).toPrecision(4)+" °C"
                hum.textContent = "Humidity: " + main.humidity+"%"
            })  
        })
    }}
)


button.addEventListener('click',()=>{
    city = document.getElementsByTagName("input")[0].value;
    document.getElementsByTagName("input")[0].value= '';
    const url = (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
    fetch(url)
    .then((response)=>{
        if(response.status>=200 && response.status<300)
        return response.json()
        else return "Invalid Data"
    })
    .then(data => {
        try{
            var {main, weather}= data;
            cityName.textContent = city;
            description.textContent = weather[0].main
            span[0].textContent = "Max: " + (parseFloat(main.temp_max)-273.15).toPrecision(4)+" °C"
            span[1].textContent = "Min: " + (parseFloat(main.temp_min)-273.15).toPrecision(4)+" °C"
            hum.textContent = "Humidity: " + main.humidity+"%"
        }
        catch{
            cityName.textContent = "Invalid Input";
            description.textContent = ''
            span[0].textContent = ''
            span[1].textContent = ''
            hum.textContent = ''
        }
    })
})