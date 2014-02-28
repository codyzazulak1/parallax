function initialize() {
  var theirLatLng = new google.maps.LatLng(49.264184, -123.024240);
  var newLatLng = new google.maps.LatLng(49.267559, -123.145486);
  var newestLatLng = new google.maps.LatLng(49.315876, -123.099030);
  var centerLatLng = new google.maps.LatLng(49.293612, -123.091853);
  var mapOptions = {
    zoom: 13,
    center: centerLatLng,
    zoomControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    panControl: false,
    scaleControlOptions: false,
    scrollwheel: false
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  //firstLocation
  var contentString1 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h4 id="firstHeading" class="firstHeading">Brian Jessel BMW</h4>'+
      '<div id="bodyContent">'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString1
  });

  var theirMarker = new google.maps.Marker({
      position: theirLatLng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: 'Starbucks'
  });
  google.maps.event.addListener(theirMarker, 'click', function() {
    infowindow.open(map,theirMarker);
  });

  //secondLocation
  var contentString2 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h4 id="firstHeading" class="firstHeading">The BMW Store</h4>'+
      '<div id="bodyContent">'+
      '</div>'+
      '</div>';

  var infowindow2 = new google.maps.InfoWindow({
      content: contentString2
  });

  var newMarker = new google.maps.Marker({
      position: newLatLng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: 'Meat & Bread'
  });
  google.maps.event.addListener(newMarker, 'click', function() {
    infowindow2.open(map,newMarker);
  });

  //lastLocation
  var contentString3 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h4 id="firstHeading" class="firstHeading">Park Shore BMW</h4>'+
      '<div id="bodyContent">'+
      '</div>'+
      '</div>';

  var infowindow3 = new google.maps.InfoWindow({
      content: contentString3
  });

  var newestMarker = new google.maps.Marker({
      position: newestLatLng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: 'Water St. Cafe'
  });
  google.maps.event.addListener(newestMarker, 'click', function() {
    infowindow3.open(map,newestMarker);
  });

  infowindow.open(map,theirMarker);
  infowindow2.open(map,newMarker);
  infowindow3.open(map,newestMarker);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'Your Location',
      });

      map.setCenter(centerLatLng);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
      // Browser doesn't support Geolocation
      handleNoGeolocation(false);
    }
  }

  function handleNoGeolocation(errorFlag) {
    if (errorFlag) {
      var content = 'Error: The Geolocation service failed.';
    } else {
      var content = 'Error: Your browser doesn\'t support geolocation.';
    }

    var options = {
      map: map,
      position: new google.maps.LatLng(60, 105),
      content: content
    };

    var infowindow = new google.maps.InfoWindow(options);
    map.setCenter(options.position);
}
google.maps.event.addDomListener(window, 'load', initialize);