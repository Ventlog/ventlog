  // Initialize the platform object:
  var platform = new H.service.Platform({
    'app_id': 'tqdpL2rGDZclXliu8H8p',
    'app_code': 'fU3vlhaOhYNi-jM-uSjMtA'
  });

  // Obtain the default map types from the platform object
  var maptypes = platform.createDefaultLayers();

  // Instantiate (and display) a map object:
  var map = new H.Map(
    document.getElementById('mapContainer'),
    maptypes.normal.map, {
      zoom: 16,
      center: {
        lng: -122.4015567,
        lat: 37.792085
      }
    });

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

  // Create a marker:
  marker = new H.map.Marker(map.getCenter());

  // Add the marker to the group (which causes
  // it to be displayed on the map)
  group.addObject(marker);
