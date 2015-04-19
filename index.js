var http = require('https');

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


var all = function(id) {

	var allYouthumbs = {}

	for (quality in config.quality) {
		allYouthumbs[quality] = config.base + id +'/'+ config.quality[quality] + ".jpg"
	}

	return allYouthumbs
}

var get = function(id, quality) {

	var imageQuality

	if (quality in config.quality) {
		imageQuality = config.quality[quality];
	} else if (typeof quality == 'number' && quality in [0,1,2,3]) {
		imageQuality = quality;
	} else {
		imageQuality = config.quality.default;
	}

	return config.base + id +'/'+ imageQuality + ".jpg"
}

module.exports.all = all;
module.exports.get = get;