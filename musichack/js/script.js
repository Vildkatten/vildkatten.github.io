
// function geoFindMe() {
//   var output = document.getElementById("out");

//   if (!navigator.geolocation) {
//     output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
//     return;
//   }

//   function success(position) {
//     var latitude  = position.coords.latitude;
//     var longitude = position.coords.longitude;

//     output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

//     var img = new Image();
//     img.src = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

//     output.appendChild(img);


//   };

//   function error() {
//     output.innerHTML = "Unable to retrieve your location";
//   };

//   output.innerHTML = "<p>Locating…</p>";

//   navigator.geolocation.getCurrentPosition(success, error);
// }
function handle_geo(position){
                // Initialize the map with default UI.
                    var gMap = new google.maps.Map(document.getElementById("map"), {
                    center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                    zoom: 15,
                    mapTypeId: 'roadmap'
                });
      // Create one InfoWindow to open when a marker is clicked.
       gInfoWindow = new google.maps.InfoWindow;
        google.maps.event.addListener(gInfoWindow, 'closeclick', function() {
        unselectMarkers();
      });

      // Initialize the local searcher
      gLocalSearch = new GlocalSearch();
      gLocalSearch.setSearchCompleteCallback(null, OnLocalSearch);

      var markerOpt = {
        map : googleMap,
        position : googlePos,
        title : 'Hi , I am here',
        animation : google.maps.Animation.DROP
        };
    var googleMarker = new google.maps.Marker(markerOpt);

SC.initialize({
  client_id: 'def3f0f8392950d7a6cc4ec114ff799d',
  redirect_uri: 'http://automagiska.se/musichack/callback.html'
});

// permalink to a track
var track_url = 'http://soundcloud.com/forss/voca-nomen-tuum';

// initiate auth popup
SC.connect(function() {
  SC.get('/tracks', { genres: 'punk', bpm: { from: 120 } }, function(tracks) {


console.log(tracks);
SC.get('/resolve', { url: track_url },
  function(track) {
  SC.get('/tracks/' + track.id + '/comments',
    function(comments) {
    for (var i = 0; i < comments.length; i++) {

        $('.info').html('Someone said: ' + comments[i].body);

    }
  });
});

  });
});






