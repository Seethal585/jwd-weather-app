//API key generated
// const appId = '9548b67bc2f02d4b6eda7880afdac810'
require("dotenv").config();
const appId = process.env.API_KEY

const goButton = document.querySelector('#go-button')
const weatherDisplay = document.querySelector('#weather-display')
const city = document.querySelector('#city')
// fetching data from API
const getDataForCity = city => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=metric`)
  .then(response => response.json());
  console.log(JSON)
  const createCardHtml = (country, name, emoji, temp, feelsLike, description) =>
{   console.log('inside createCardHTML')
    const html = 
    `
  <div class="card">
    <div class="row no-gutters align-items-center">    
      <div class="col-2 h2 pl-1 pt-1 text-center">                
        ${emoji}
      </div>
      <div class="col-10">
        <div class="card-body">
          <div class="row card-title justify-content-between align-items-center mr-3 mb-1">
            <h4>${name}</h4>
            <h4>${country}</h4>
            <h6>${temp}c, feels like ${feelsLike}c</h6>
          </div>
          <div class="row">
            <h5 class="card-subtitle text-muted">${description}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
return html;
}
// emojis object used to find the right emoji from the icon code sent from the api
const emojis = {
  '01d': '☀️',
  '02d': '⛅️',
  '03d': '☁️',
  '04d': '☁️',
  '09d': '🌧',
  '10d': '🌦',
  '11d': '⛈',
  '13d': '❄️',
  '50d': '💨',
  '01n': '☀️',
  '02n': '⛅️',
  '03n': '☁️',
  '04n': '☁️',
  '09n': '🌧',
  '10n': '🌦',
  '11n': '⛈',
  '13n': '❄️',
  '50n': '💨',
}

goButton.addEventListener('click',() =>
{
    console.log('inside goButton')
    let cityValue = city.value
    console.log(cityValue)
    getDataForCity(cityValue) .then(data => {
     
        console.log('inside getdataForCity')
     const country = data.sys.country;
     console.log(country)
      const name = data.name;
      console.log(name)
      const emoji = emojis[data.weather[0].icon];
      const temp = data.main.temp;
      const feelsLike = data.main.feels_like;
      const description = data.weather[0].main;
      console.log(description)
    const cardHtml = createCardHtml(country, name, emoji, temp, feelsLike, description);
    weatherDisplay.innerHTML = cardHtml
    })
})
// goButton.addEventListener('click', async () =>
// {
//     console.log('inside click')
//     const cityValue = city.value
//     console.log(city)
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${appId}&units=metric`)
//     console.log(response)
//     const data = await response.json()
//     console.log(data)
//     const country = data.sys.country;
//      console.log(country)
//       const name = data.name;
//       console.log(name)
//       const emoji = emojis[data.weather[0].icon];
//       const temp = data.main.temp;
//       const feelsLike = data.main.feels_like;
//       const description = data.weather[0].main;
//       console.log(description)
//     const cardHtml = createCardHtml(country, name, emoji, temp, feelsLike, description);
//     weatherDisplay.innerHTML = cardHtml

// })