requirejs.config({
	baseUrl: '/js/libs/',
	paths: {
		"jquery": 'jquery.min',
    "mousewheel": 'jquery.mousewheel.min',
    "vimeo": 'vimeo-api',
    "mapbox":'mapbox-2.0.1'
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
require(['mapbox','/js/app/app.js']);