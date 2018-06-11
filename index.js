
const request = require('request');
const beep = require('beeper');

const MATCHES = require('./matches');
const CATEGORIES = require('./categories');
const CONFIG = require('./config');
const telegram = require('./telegram');

const URL = 'https://tickets.fifa.com/API/WCachedL1/en/Availability/GetAvailability';
const MONITOR_TICKETS_INTERVAL = 3000;

let LAST_CACHE = null;
let LAST_DATA = null;
let CACHE = {};

const getTickets = () => new Promise((resolve, reject) => {

	const url = URL;

	request({
		uri: url,
		json: true,
		method: 'GET'
	  }, (err, response, body) => {
		if (err) return reject(err);

		if (response.statusCode !== 200) {
			return reject(`Invalid status code received from url ${url}: ${response.statusCode}`);  
		}

		resolve(body);

	});

});

const handleData = (data) => {

	console.log('New data available');

	const msgs = [];
	for (let m of data) {

		let match = MATCHES[m.p] || m.p;
		let category = CATEGORIES[m.c];

		let cacheKey = match + '-' + category;

		if (!category) {
			continue;
		}

		if (m.a !== 0 && CONFIG.monitor[m.p]) {

			if (CACHE[cacheKey] === m.a) {
				continue;
			}

			
			let msg = `Tickets for match ${match}, cat. ${category} are available!`;
			msgs.push(msg);

			console.log(msg);
			beep(1);
		}

		CACHE[cacheKey] = m.a;
	}

	if (msgs.length > 0) {
		telegram.broadcast(msgs.join('\n'));
	}

};

const monitorTickets = () => {

	console.log(`${new Date()} checking for new tickets...`);

	getTickets()
		.then((d) => {

			if (LAST_CACHE && d.CachedOn === LAST_CACHE) {
				return;
			}

			LAST_CACHE = d.CachedOn;

			handleData(d.Data);

		})
		.catch(console.log)
		.then(() => setTimeout(monitorTickets, MONITOR_TICKETS_INTERVAL));

};

(function main() {

	monitorTickets();

})();
