// jshint unused: false
requirejs.config({
	paths: {
		// jQuery dependencies
		'jquery': 'assets/js/jquery/jquery',

		// Angular dependencies
		'angular': 'assets/js/angular/angular',
		'angular-bootstrap': 'assets/js/angular-bootstrap/ui-bootstrap-tpls',
		'angular-ui-router': 'assets/js/angular-ui-router/angular-ui-router',

		// Require
		'domReady': 'assets/js/requirejs-domready/requirejs-domready',

		// Bootstrap dependencies
		'bootstrap': 'assets/js/bootstrap/bootstrap'
	},

	shim: {
		// Angular dependencies
		'angular': {
			'exports': 'angular', deps: ['jquery']
		},
		'angular-bootstrap': ['angular', 'bootstrap'],
		'angular-ui-router': ['angular'],

		// Bootstrap dependencies
		'bootstrap': ['jquery']
	},

	priority: [
		'jquery',
		'bootstrap',
		'angular'
	]
});