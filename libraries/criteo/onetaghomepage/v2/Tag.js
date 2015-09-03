//:import sdk.releases.Current

qubit.opentag.LibraryTag.define("criteo.onetaghomepage.v2.Tag", {
	getDefaultConfig: function () {
      return {
		/*config*/
		name: "OneTag - Home Page",
		async: true,
		description: "The home page tag has to be integrated on the home page of the advertiser website.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "static.criteo.net/js/ld/ld.js",
		usesDocWrite: false,
		upgradeable: false,
		parameters: [{
			name: "Criteo Partner ID",
			description: "The ID assigned to you by Criteo",
			token: "partner_id",
			uv: ""
		}, {
			name: "Customer ID",
			description: "This MUST NOT include any personally-identifiable information. Send \"\" if there is no anonymous ID.",
			token: "customer_id",
			uv: "universal_variable.user.user_id"
		}, {
			name: "Site Type",
			description: "\"m\" for mobile or \"t\" for tablet or \"d\" for  desktop",
			token: "site_type",
			uv: ""
		}, {
			name: "Hashed E-mail",
			description: "Pass hashed e-mail to this parameter for X-Device",
			token: "hashed_email",
			uv: ""
		},
          {
			name: "E-mail",
			description: "Pass plain text e-mail to this parameter for X-Device. We will hash it.",
			token: "email",
			uv: "universal_variable.user.email"
		}]
		/*~config*/
		};
	},
	script: function() {
		/*script*/
		/*~script*/
	},
	pre: function() {
		/*pre*/
		/*~pre*/
	},
	post: function() {
		/*post*/
		var user_id = "" + this.valueForToken("customer_id");
		//Remove email if present.
		if (user_id.indexOf("@") > -1) {
			user_id = "";
		}
        
        if (this.valueForToken("email")!='') {
            var passedemail = {event: "setEmail", email: [this.valueForToken("email")]};
        } else {
            var passedemail = {event: "setHashedEmail", email: [this.valueForToken("hashed_email")]};
        }

		window.criteo_q = window.criteo_q || [];
		window.criteo_q.push({
			event: "setAccount",
			account: this.valueForToken("partner_id")
		}, {
			event: "setCustomerId",
			id: user_id
		}, {
			event: "setSiteType",
			type: "" + this.valueForToken("site_type")
		}, {
			event: "viewHome"
		}, passedemail);
		/*~post*/
	}
});
