function init() {
	var colors = { 
		'road.highway' : '#322F2F',
		'road.arterial' : '#858585',
		'road.local' : '#ACDDFF',
		'water' : '#BE0000',
		'road.highway' : '#FFFFFF',
		'administrative.locality' : '#919191',
		'transit.line' : '#6EBCFF',
}
	  var baseStyles =[{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];


	var mapOptions = {
		center: new google.maps.LatLng(55.9412083,-3.2053387),
		maptypeId: google.maps.MapTypeId.ROADMAP, 
		zoom: 13,

		panControl : false,
		zoomControl : false,
		mapTypeControl : false, 
		scaleControl : false, 
		streetViewControl : false,
		scrollwheel : false, 
	};

	var venueMap;
	venueMap = new google.maps.Map( document.getElementById('map'), mapOptions );

	var styledMapOpts = {
		name : 'base'
	};

	var baseMap = new google.maps.StyledMapType( baseStyles, styledMapOpts );

	venueMap.mapTypes.set( 'base', baseMap );
	venueMap.setMapTypeId( 'base' );


}

var api_key = 'AIzaSyBti91LS6TouiqU2LHYYXl3DQG7AwZokiE';
var gm_url = 'https://maps.googleapis.com/maps/api/js?key='+ api_key+'&callback=init'

function loadScript() {
	var script = document.createElement( 'script' );
    //script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
	script.src = gm_url;
	document.body.appendChild(script);
}

window.onload = loadScript;