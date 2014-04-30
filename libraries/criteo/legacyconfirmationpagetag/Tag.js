//:include tagsdk-current.js
var version = "";
var classPath = "criteo.legacyconfirmationpagetag" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Legacy - Confirmation Page Tag",
		async: true,
		description: "This is a mandatory tag and must be executed on the confirmation page after user made payment.",
		html: "<!--@SRC@-->",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Criteo.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: true,
		parameters: [{
			name: "Criteo wi parameter",
			description: "Criteo wi parameter value",
			token: "wi",
			uv: ""
		}, {
			name: "Criteo call parameter value",
			description: "Criteo call parameter value",
			token: "call_parameter",
			uv: ""
		}, {
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "Product IDs",
			description: "",
			token: "product_ids",
			uv: "universal_variable.transaction.line_items[#].product.id"
		}, {
			name: "Product Unit Sale Prices",
			description: "",
			token: "product_unit_prices",
			uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
		}, {
			name: "Quantities",
			description: "",
			token: "quantities",
			uv: "universal_variable.transaction.line_items[#].quantity"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		(function() {
			var src = [
				"https://", "sslwidget.criteo.com", "/", "" + this.valueForToken(
					"call_parameter") + "", "/", "display.js?", "p1="
			];
			var params = [
				"v=2",
				"&s=1",
				"&wi=", "" + this.valueForToken("wi") + "",
				"&t=", "" + this.valueForToken("order_id") + ""
			];

			for (var i = 0; i < this.valueForToken("product_ids").length; i++) {
				var index = i + 1;
				params.push("&i" + index + "=" + this.valueForToken("product_ids")[i]);
				params.push("&p" + index + "=" + this.valueForToken("product_unit_prices")[
					i]);
				params.push("&q" + index + "=" + this.valueForToken("quantities")[i])
			}
			src.push(escape(params.join("")));
			src.push("&t1=transaction&resptype=gif");
			var img = document.createElement("img");
			img.setAttribute("src", src.join(""));
			img.setAttribute("height", "1");
			img.setAttribute("width", "1");
			document.body.appendChild(img);
		})();
		/*~SCRIPT*/
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