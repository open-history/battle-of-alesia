
import Chillax from "chillax"
import {WebpMachine} from "webp-hero"
import PromisePolyfill from "promise-polyfill"

for (const init of [

	function initPromisePolyfill() {
		if (!window["Promise"]) window["Promise"] = PromisePolyfill
	},

	function initWebpPolyfill() {
		const webpSupport = location.search.includes("force")
			? Promise.resolve(false)
			: undefined
		const webpMachine = new WebpMachine({webpSupport})
		webpMachine.polyfillDocument()
	},

	function initSpecialEffects() {
		const chillax = window["chillax"] = new Chillax()
	}

]) {
	try { init() }
	catch (error) { console.error(`init error`, error) }
}
