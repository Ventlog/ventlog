// Initialize the platform object:
var platform = new H.service.Platform({
  'app_id': 'tqdpL2rGDZclXliu8H8p',
  'app_code': 'fU3vlhaOhYNi-jM-uSjMtA'
});

// Obtain the default map types from the platform object
var defaultLayers = platform.createDefaultLayers();
// Get the Geocoding Service
var gc = platform.getGeocodingService();

// Instantiate (and display) a map object:
var map = new H.Map(
  document.getElementById('mapContainer'),
  defaultLayers.normal.map, {
    zoom: 16,
    center: {
      lng: -122.3992447,
      lat: 37.7921209
    },
  }
);

// Initializing the basic events and behavior we will be using
var mapEvents = new H.mapevents.MapEvents(map);
var behavior = new H.mapevents.Behavior(mapEvents);

// Create the default UI:
var ui = H.ui.UI.createDefault(map, defaultLayers, 'en-US');
ui.addControl('zoomRectangle', new H.ui.ZoomRectangle());
var zoomRectangle = ui.getControl('zoomRectangle');
zoomRectangle.setAlignment('right-middle');

// Add window resize listener to adjust the map dimensions.
window.addEventListener('resize', function() {
  map.getViewPort().resize();
});

// Add map context menu event listener contextmenu
map.addEventListener('contextmenu', function(e) {
  var coord = map.screenToGeo(e.viewportX, e.viewportY);
  var rgcParams = {
    prox: coord.lat + ", " + coord.lng,
    mode: 'retrieveAddresses',
    maxresults: 1
  };
  // Send the RGC request over.
  gc.reverseGeocode(rgcParams, function(result) {
    onRGCResult(result, e);
  }, function(error) {
    console.log(error);
  });
  // Reverse geocoder response + context menu item with address.
  function onRGCResult(result, e) {
    var addressLabel = result.Response.View[0].Result[0];
    e.items.push(new H.util.ContextItem({
      label: addressLabel.Location.Address.Label
    }));
    e.currentTarget.dispatchEvent(e);
    e.stopPropagation(e);
  }
});
