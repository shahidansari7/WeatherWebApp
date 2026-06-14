const apiKey = "a2322ea0f0881ddad0e69dcad8693ea3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const icon = document.getElementById("mainImg");

const btn = document.querySelector(".input button");
const search = document.querySelector(".input input");
const searchForm = document.querySelector(".input");


async function find(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.getElementById("city").innerHTML = data.name;
    document.getElementById("temp").innerHTML = Math.round(data.main.temp)+`°C`;
    document.querySelector(".humidity p").innerHTML = data.main.humidity + `%`;
    document.querySelector(".wind p").innerHTML = data.wind.speed + `km/h`;

    if(data.weather[0].main==='Clear'){
       icon.src = "image/clear.jpg";
    }
    else if(data.weather[0].main==='Clouds'){
       icon.src = "image/cloud.jpg";
    }
    else if(data.weather[0].main==='Rain'){
       icon.src = "image/rain.jpg";
    }
    else if(data.weather[0].main==='Mist'){
       icon.src = "image/mist.jpg";
    }
    else{
        icon.src = "image/cloud.jpg";
    }
}


searchForm.addEventListener("submit", (e)=>{
   e.preventDefault();
    console.log("button clicked");
    if(search.value.trim()===""){
      alert("Enter the city name");
    }
    else{
    find(search.value.trim());
    search.value= "";
    }
});

