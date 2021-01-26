var request = require('request');
var prompt = require('prompt');
var pb = require('pushbullet');
var cheerio = require('cheerio');

// Variables
var asin, price, pb_token;
var amzn_url = 'https://www.amazon.in/dp/';
var span_id = '#priceblock_ourprice';
var check_interval = 10000;

var schema = {
	properties: {
		asin: {
			description: 'Enter the product ASIN',
			type: 'string',
			required: true
		},
		price: {
			description: 'Enter the desired price (USD)',
			type: 'number',
			required: true
		},
		pb_token: {
			description: 'Enter your PushBullet token',
			type: 'string',
			required: true,
			hidden: true
		}
	}
};

prompt.start();

prompt.get(schema, function (error, result) {
	if (!error) {
		asin = result.asin;
		price = result.price;
		pb_token = result.pb_token;

		amzn_url += asin;

		checkPrice();
	}
});

function checkPrice() {
	request(amzn_url, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var $ = cheerio.load(body);

			var list_price = $(span_id).text();
			var stripped_price = list_price.replace('$', '').replace(',', '');

			let scraped_price = stripped_price.substring(2,stripped_price.length-3);
			scraped_price = parseInt(scraped_price);

			if (scraped_price <= price) {
				sendPush();
				console.log("Kharid le bhsdk!!!!!!!!!!!!!!!!");
			} else {
				console.log("Price zyadda hai!!","Stripped price:"+stripped_price," Scraped Price:"+scraped_price, "Expected price:"+price);
			}
		}
		else {
			console.log("Uh oh. There was an error.");
		}
	});

	setTimeout(checkPrice, check_interval);
}

function sendPush() {
	var pusher = new pb(pb_token);

	pusher.note(null, "Amazon Price Watch", "A product you are watching has dropped in price: " + amzn_url, function(error, response) {
		if (!error) {
			process.exit();
		}
	});
}