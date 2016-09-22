var 	request = require('request');
	xml2js = require('xml2js');

	/*request('http://prodengi.kz/sitemap.xml', function (error, response, data) {
		var parser = new xml2js.Parser();
		parser.parseString(data, function (err, result) {
			console.dir(result.sitemapindex.sitemap);
			result.sitemapindex.sitemap.forEach(function (item){
				console.log(item.loc[0]);
			});
			console.log('Done');
		});
	});*/

	request('http://prodengi.kz/static_xml/sitemap/news.xml', function (error, response, data) {
		var parserXml = new xml2js.Parser();
		parserXml.parseString(data, function (err, result) {
			//console.log(result.urlset.url);
			result.urlset.url.forEach(function (item){
				//console.log(item.loc[0] + " SCANING");
				request(item.loc[0], function (error, response, body) {
					//console.log(item.loc[0]);
					if(error && response.statusCode != 200){
						console.log(item.loc[0] + ' - STATUS: ' + response.statusCode) // Show the HTML for the Google homepage.
					}
				});
			});
			console.log("Done");
		});
	});
