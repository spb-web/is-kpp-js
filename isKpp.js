( function( ) {
	var regExpKppCode = /^\d{4}\w{2}\d{3}$/;
	var isKpp = function( kpp ) {
		return (
			( typeof kpp === "string" && regExpKppCode.test( kpp ) === true ) ||
			( typeof kpp === "number" && kpp >= 10e9 && kpp < 10e10 )
		);
	}
	/* 
	 * Экспортируем модуль
	 */
	if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
		module.exports = isKpp;
	} else {
		if ( typeof define === "function" && define.amd ) {
			define( [ ], function() {
				return isKpp;
			} );
		} else {
			window.isKpp = isKpp;
		}
	}
} )( );