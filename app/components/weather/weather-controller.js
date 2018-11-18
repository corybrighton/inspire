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
			document.getElementById('weather').innerHTML = `
			<div class="weather-text">
			<img src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png">
			${convert(weather.main.temp)}</div>
			<div class="weather-text">High:${convert(weather.main.temp_max)}</div>
			<div class="weather-text">${weather.name}</div>
			`
		})
	}
}
