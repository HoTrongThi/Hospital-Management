(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "../jquery.validate"], factory );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

$.extend($.validator.methods, {
	date: function(value, element) {
		return this.optional(element) || /^\d\d?\-\d\d?\-\d\d\d?\d?$/.test(value);
	},
	number: function(value, element) {
		return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/.test(value);
	}
});

}));