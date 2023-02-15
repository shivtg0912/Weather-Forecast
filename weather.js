
var input = document.querySelector('.input_text');
var lat=document.querySelector('.lat')
var lon=document.querySelector('.lon')
var main = document.querySelector('#name');
var temp_min = document.querySelector('.temp_min');
var temp_max = document.querySelector('.temp_max');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var humid=document.querySelector('.humid');
var button= document.querySelector('.submit');
var imageWeather = document.querySelector('.imageWeather');
button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
// {/* <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon"> */}
.then(response=>response.json())
.then(data=>{
var mintempValue = data['main']['temp_min'];
var maxtempValue = data['main']['temp_max'];
var tempValue = data['main']['temp'];
var humidValue = data['main']['humidity'];
var nameValue = data['name'];
var descValue = data['weather'][0]['description'];
  main.innerHTML = nameValue;
  humid.innerHTML="Humidity-"+humidValue;
  desc.innerHTML = "Description - "+descValue;
  temp.innerHTML = `Temperature-${parseInt(tempValue)-273}\u00B0C`;
  temp_min.innerHTML = `Min.-${parseInt(mintempValue)-273}\u00B0C`;
  temp_max.innerHTML = `Max.-${parseInt(maxtempValue)-273}\u00B0C`;
  input.value ="";
  // <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon"></img>
})
.catch(err=>alert("Doesn't exist."));
})