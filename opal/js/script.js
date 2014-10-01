function initialize() {
//menu
  var selector = '.menu li';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});


$( '.link' ).on('click', function(event) {
    event.preventDefault();
    var target = "#" + $(this).data('target');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 500);
});


  var myLatlng = new google.maps.LatLng(59.3359683, 18.0732766);
        var mapCanvas = document.getElementById('map_canvas');
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          scrollwheel: false,
          navigationControl: false,
          mapTypeControl: false,
          scaleControl: false,
          draggable: false,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)

        var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: 'Opalsmart'

  });

   function toggleBounce() {

  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}


      google.maps.event.addListener(marker, 'click', toggleBounce);
      }


      google.maps.event.addDomListener(window, 'load', initialize);

