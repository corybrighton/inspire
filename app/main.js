import WeatherController from "./components/weather/weather-controller.js";
import ImageController from "./components/image/image-controller.js";
import TodoController from "./components/todo/todo-controller.js";
import QuoteController from "./components/quote/quote-controller.js";

// HEY WHERE ARE ALL OF YOUR CONTROLLERS??
class app {
  constructor() {
    this.controllers = {
      weatherCtrl: new WeatherController(),
      imageCtrl: new ImageController(),
      todoCtrl: new TodoController(),
      quoteCtrl: new QuoteController()
    }
  }
}

window.app = new app()  