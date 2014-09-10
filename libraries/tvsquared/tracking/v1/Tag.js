//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("tvsquared.tracking.v1.Tag", {
	config: {
		/*DATA*/
		name: "Tracking Tag",
		async: true,
		description: "The basic hit tracker should be fired on all pages of the site. Our service is territory specific, so clients should be able to setup rules to ensure that the tag only fires on the US (or UK, or French) site, if their website is global. ",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [{
			name: "TVSquared Client ID",
			description: "Will be supplied by TVSquared, and specifies the clients individual ID",
			token: "clientID",
			uv: ""
		}, {
			name: "TVSquared Brand ID",
			description: "Will be supplied by TVSquared, and specifies the brand within the client (separate countries, websites etc.)",
			token: "brandID",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		var _paq = _paq || [];
    	(function () {
	    	var u = (("https:" == document.location.protocol) ? "https://collector-${clientID}.tvsquared.com/piwik/" : "http://collector-${clientID}.tvsquared.com/piwik/");
        	_paq.push(['setSiteId', "${brandID}"]);
    	    _paq.push(['setTrackerUrl', u + 'piwik.php']);
	        _paq.push(['trackPageView']);
        	var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0]; g.type = 'text/javascript'; g.defer = true; g.async = true; g.src = u + 'piwik.js';
    	    s.parentNode.insertBefore(g, s);
	    })();
	},
	pre: function() {
	/*PRE*/
	/*~PRE*/
	},
	post: function() {
	/*POST*/
	/*~POST*/
	}
});
