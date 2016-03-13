  // Initialize the platform object:
  var platform = new H.service.Platform({
    'app_id': 'tqdpL2rGDZclXliu8H8p',
    'app_code': 'fU3vlhaOhYNi-jM-uSjMtA'
  });

  // Retrieve the target element for the map:
  var targetElement = document.getElementById('mapContainer');

  // Get the default map types from the Platform object:
  var defaultLayers = platform.createDefaultLayers();

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
        var xcoord = H.util.EventTarget.viewportX;
        var ycoord = H.util.EventTarget.viewportY;
        console.log(xcoord);
        console.log(ycoord);
      }
    }));
  }

  // Create the parameters for the reverse geocoding request:
  var reverseGeocodingParameters = {
    prox: '37.79202,-122.39972',
    mode: 'retrieveAddresses',
    maxresults: 1
  };

  // Define a callback function to process the response:
  function onSuccess(result) {
    var location = result.Response.View[0].Result[0];

    // Create an InfoBubble at the returned location with
    // the address as its contents:
    ui.addBubble(new H.ui.InfoBubble({
      lat: location.Location.DisplayPosition.Latitude,
      lng: location.Location.DisplayPosition.Longitude
    }, {
      content: location.Location.Address.Label
    }));
  };

  // Get an instance of the geocoding service:
  var geocoder = platform.getGeocodingService();

  // Call the geocode method with the geocoding parameters,
  // the callback and an error callback function (called if a
  // communication error occurs):
  geocoder.reverseGeocode(
    reverseGeocodingParameters,
    onSuccess,
    function(e) {
      alert(e);
    });
