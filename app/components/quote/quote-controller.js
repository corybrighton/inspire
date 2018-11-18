import QuoteService from "./quote-service.js";

let qs = new QuoteService()


export default class QuoteController {
	constructor() {
		this.getQuote()
	}

	getQuote() {
		qs.getQuote(function (quote) {
			document.getElementById("quote").innerHTML = `
			<span>"${quote.quote.body}"  
			<em>author</em>- ${quote.quote.author}</span>`
		})
	}
}
