seajs.config({
	// 别名配置
	alias: {
		'jquery': 'jquery/1.10/jquery'
	},
	map: [
		function(uri) {
			if (!/\-debug\.(js|css)+/g.test(uri)) {
				uri = uri.replace(/\/(.*)\.(js|css)/g, "/$1-debug.$2");
			}
			return uri;
		}
	]
});