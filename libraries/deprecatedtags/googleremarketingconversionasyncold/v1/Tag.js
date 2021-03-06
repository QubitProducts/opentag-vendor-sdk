//:import CurrentSDK

qubit.opentag.LibraryTag.define(
	"deprecatedtags.googleremarketingconversionasyncold.v1.Tag", {
		getDefaultConfig: function () {
      return {
			/*config*/
			name: "Google Remarketing Conversion Async - old",
			async: true,
			description: "Conversion tracking is a tool to help you measure conversions, and ultimately help you identify how effective your Ad Exchange ads are for you.",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "www.googleadservices.com/pagead/conversion_async.js",
			usesDocWrite: true,
			upgradeable: true,
			parameters: [{
				name: "Google Conversion ID",
				description: "Your Google id provided in the script",
				token: "conversion_id",
				uv: ""
			}, {
				name: "Google Conversion Label",
				description: "A alphanumeric label of your conversion tracking",
				token: "label",
				uv: ""
			}, {
				name: "Google Conversion Value",
				description: "The value of the conversion. This should be a number, or 0 if there is no value to the conversion",
				token: "value",
				uv: ""
			}],
		categories:[
			"Re-Targeting"
		]

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
			window.google_trackConversion({
				google_conversion_id: "" + this.valueForToken("conversion_id"),
				google_conversion_label: "" + this.valueForToken("label"),
				google_custom_params: {}
			});
			/*~post*/
		}
	});
