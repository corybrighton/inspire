import ImageService from "./image-service.js";

function drawBackground(image) {
  document.body.style.backgroundImage = `url('${image.url}')`
}

let _is = new ImageService()
export default class ImageController {
  constructor() {
    _is.getImage(drawBackground)
  }


}

