import WeatherService from "./weather-service.js";

var ws = new WeatherService()
function convert(temp) {
	return Math.round(temp * (9 / 5) - 459.67)
}

export default class WeatherController {

	constructor() {
		this.getWeather()
	}

	getWeather() {
		ws.getWeather(weather => {
			console.log(weather);
			document.getElementById('weather').innerHTML = `
			<div class="weather-text">${weather.weather[0].description}</div>
			<div class="weather-text">${convert(weather.main.temp)}</div>
			<div class="weather-text">High:${convert(weather.main.temp_max)}</div>
			<div class="weather-text">Low:${convert(weather.main.temp_min)}</div>
			<div class="weather-text">${weather.name}</div>
			`
		})
	}
}
