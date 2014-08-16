requirejs.config({
	baseUrl: '/js/libs/',
	paths: {
		"jquery": 'jquery.min',
    "mousewheel": 'jquery.mousewheel.min',
    "vimeo": 'vimeo-api'
	},
  shim: {
    "mousewheel":{
      deps: ["jquery"]
    },
    "vimeo":{
      deps: ["jquery"]
    }
  }
});
require(['/js/app/app.js']);