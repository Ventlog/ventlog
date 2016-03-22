// Initialize the platform object:
var platform = new H.service.Platform({
  'app_id': 'tqdpL2rGDZclXliu8H8p',
  'app_code': 'fU3vlhaOhYNi-jM-uSjMtA'
});

// Retrieve the target element for the map:
var targetElement = document.getElementById('mapContainer');

// Get the default map types from the Platform object:
var defaultLayers = platform.createDefaultLayers();

var gc = platform.getGeocodingService();

// Instantiate the map:
var map = new H.Map(
  document.getElementById('mapContainer'),
  defaultLayers.normal.map, {
    zoom: 16,
    center: {
      lng: -122.39972,
      lat: 37.79202
    }
  });

// Add window resize listener to adjust the map dimensions.
window.addEventListener('resize', function() {
  map.getViewPort().resize();
});

// Create the default UI:
var ui = H.ui.UI.createDefault(map, defaultLayers, 'en-US');
ui.addControl('zoomRectangle', new H.ui.ZoomRectangle());
var zoomRectangle = ui.getControl('zoomRectangle');
zoomRectangle.setAlignment('right-middle');

// Enable the event system on the map instance:
var mapEvents = new H.mapevents.MapEvents(map);

// Add event listener:
map.addEventListener('tap', function(evt) {
  // Log 'tap' and 'mouse' events:
  console.log(evt.type, evt.currentPointer.type);

});

// Instantiate the default behavior, providing the mapEvents object:
var behavior = new H.mapevents.Behavior(mapEvents);

// Create a group that can hold map objects:
group = new H.map.Group();

// Add the group to the map object (created earlier):
map.addObject(group);

// Add map context menu event listener.
map.addEventListener('contextmenu', onContextMenuRequested);

window.addEventListener('coords', function() {
  map.getViewPort().interaction();
});

function onContextMenuRequested(e) {
  e.items.push(new H.util.ContextItem({
    label: 'Hello Holberton School!',
    callback: function() {
      map.setZoom(map.getZoom() + 1);
    }
  }));

  var coord = map.screenToGeo(e.viewportX, e.viewportY);
  console.log('Clicked at ' + Math.abs(coord.lat.toFixed(4)) +
    ((coord.lat > 0) ? 'N' : 'S') +
    ' ' + Math.abs(coord.lng.toFixed(4)) +
    ((coord.lng > 0) ? 'E' : 'W'));

  var rgcParams = {
    prox: 'coord.lat,coord.lng,100'
      // mode: 'retrieveAddresses'
      // maxresults: '1'
  }

  // Send the RGC request over.
  gc.reverseGeocode(rgcParams, function(result) {
    onRGCResult(result, contextMenuEvent);
  }, function(error) {
    console.log(error);
  });
}
// Processes reverse geocoder response and adds a context menu item showing the associated address.
function onRGCResult(result, e) {
  var addressLabel = result.Response.View[0].Result[0];
  e.items.push(new H.util.ContextItem({
    label: addressLabel.Location.Address.Label
  }));
  e.currentTarget.dispatchEvent(e);
  e.stopPropagation(e);
}
