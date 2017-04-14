//setting map and initial co-ords
var mymap = L.map('mapid').setView([20, 0], 3);

var southWest = L.latLng(40.712, -74.227),
northEast = L.latLng(40.774, -74.125),
mybounds = L.latLngBounds(southWest, northEast);

//title layer
var OpenStreetMap_BlackAndWhite = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
  minZoom: 3,
	maxZoom: 20,
  maxWidth: 10,
  noWrap: true,

	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});





//adding title layer to map
OpenStreetMap_BlackAndWhite.addTo(mymap);
