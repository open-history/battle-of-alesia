
import Chillax from "chillax"
import WebpHero from "webp-hero"
import PromisePolyfill from "promise-polyfill"

for (const init of [

	function initPromisePolyfill() {
		if (!window["Promise"]) window["Promise"] = PromisePolyfill
	},

	function initWebpPolyfill() {
		const webpHero = window["webpHero"] = new WebpHero()
		webpHero.polyfill()
	},

	function initSpecialEffects() {
		const chillax = window["chillax"] = new Chillax()
	}

]) {
	try { init() }
	catch (error) { console.error(`init error`, error) }
}
