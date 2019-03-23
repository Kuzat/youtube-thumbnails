var https = require('https');

var config = {
	base: "https://i.ytimg.com/vi/",
	quality: {
		default: 'default',
		medium: 'mqdefault',
		high: 'hqdefault',
		standard: 'sddefault',
		maxres: 'maxresdefault'
	}
};

function valid(id, proxy, callback) {
	https.get(proxy + config.base + id +'/'+ config.quality.maxres + ".jpg", function(response) {
		if (response.statusCode == 200)
			callback({maxres: true, standard: true});
		else {
			https.get(proxy + config.base + id +'/'+ config.quality.standard + ".jpg", function(response) {
				if (response.statusCode == 200)
					callback({maxres: false, standard: true});
				else
					callback({maxres: false, standard: false});
			});
		}
	});
} 

var all = function(id, proxy = '', callback) {

	var allYouthumbs = {};

	valid(id, proxy, function(exist) {
		if (exist.maxres) {

			for (quality in config.quality) {
				allYouthumbs[quality] = config.base + id +'/'+ config.quality[quality] + ".jpg";
			}

		}
		else if (exist.standard) {

			for (quality in config.quality) {
				if (quality == 'maxres')
					continue
				allYouthumbs[quality] = config.base + id +'/'+ config.quality[quality] + ".jpg";
			}

		}
		else {

			for (quality in config.quality) {
				if (quality == 'maxres' || quality =='standard')
					continue
				allYouthumbs[quality] = config.base + id +'/'+ config.quality[quality] + ".jpg";
			}

		}

		callback(allYouthumbs);
	});
}

var get = function(id, proxy = '', quality, callback) {

	var imageQuality;

	if (quality in config.quality) {
		imageQuality = config.quality[quality];
	} else if (typeof quality == 'number' && quality in [0,1,2,3]) {
		imageQuality = quality;
	} else {
		imageQuality = config.quality.default;
	}

	if (imageQuality == 'maxresdefault' || imageQuality == 'sddefault') {
		valid(id, proxy, function(exist) {

			if (imageQuality == 'maxresdefault' && exist.maxres) {
				callback(null, config.base + id +'/'+ imageQuality + ".jpg");
			}

			else if (imageQuality == 'sddefault' && exist.standard) {
				callback(null, config.base + id +'/'+ imageQuality + ".jpg");
			}

			else {
				callback('Error: The thumbnail you where looking for don\'t  exist.');
			}
		});
	}

	else {
		callback(null, config.base + id +'/'+ imageQuality + ".jpg");
	}
}

module.exports.all = all;
module.exports.get = get;
