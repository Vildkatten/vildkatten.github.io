// Firefox optimized men bättre bild och flyt i Chrome
// Hela projektet finns på http://mobail.se
$(function(){
	


	var widgetIframe = document.getElementById('sc-widget'),
        widget       = SC.Widget(widgetIframe),
        newWidgetUrl = 'http://w.soundcloud.com/player/?url=api.soundcloud.com%2Ftracks%2F51075672',
        trip = $('.trip').get(0);
        //globala variabler

   
    widget.bind(SC.Widget.Events.READY, function() {
      // load new soundcloud widget
      widget.bind(SC.Widget.Events.FINISH, function() {
      	trip.pause();
        
    });
      });

    //Toggle Play/pause-knapp
	$('#toggle-play').on('click', function(){
		if(trip.paused){
			trip.play();
			trip.muted=true;
			widget.play();
			$(this).html('||');
		}
		else{
			trip.pause();
			$(this).html('►');
			widget.pause();
			trip.attr('loop', true);
		}
	});

	$('.trip').on('timeupdate', function(){
		if (trip.currentTime < 1){

		$(this).css('opacity', 0.3);
		$('body').css('background', 'orange');

		}
		if (trip.currentTime >1){
			$(this).css('opacity', 1);
			$('body').css('background', 'black');

		}
		if (trip.currentTime > 13){

		$(this).css('opacity', 0.3);
		$('body').css('background', 'white');

		}
		if (trip.currentTime >14){
			$(this).css('opacity', 1);
			$('body').css('background', 'black');

		}
		if (trip.currentTime > 17){

		$(this).css('opacity', 0.3);
		$('body').css('background', 'white');

		}
		if (trip.currentTime >18){
			$(this).css('opacity', 1);
			$('body').css('background', 'black');
		}
		if (trip.currentTime >20){
			$(this).css('opacity', 0.3);
			$('body').css('background', 'red');
			$('.trip').css('transform', 'rotateX(360deg)');
		}
		if (trip.currentTime >22){
			$(this).css('opacity', 1);
			$('body').css('background', 'black');
			
		}
		if (trip.currentTime > 27){

		$(this).css('opacity', 0.3);
		$('body').css('background', 'white');

		}
		if (trip.currentTime >28){
			$(this).css('opacity', 1);
			$('body').css('background', 'black');	
		}

		if (trip.currentTime > 31){

		$('.trip').css('transform', 'rotateY(180deg)');
		}
		
		if (trip.currentTime > 41){

		$(this).css('opacity', 0.3);
		$('body').css('background', 'white');


		}
		if (trip.currentTime >43){
			$(this).css('opacity', 1);

			$('body').css('background', 'black');	
		}
		if (trip.currentTime > 51){

		$(this).css('opacity', 0.3);
		$('body').css('background', 'white');

		}
		if (trip.currentTime >57){
			$(this).css('opacity', 1);
			$('body').css('background', 'black');	
		}

		if (trip.currentTime > 77){
		$('.trip').css('transform', 'rotateY(-360deg)');
		}

		if (trip.currentTime > 82){

		$(this).css('opacity', 0.3);
		$('body').css('background', 'red');

		}
		if (trip.currentTime >83){
			$(this).css('opacity', 1);
			$('body').css('background', 'black');	
		}
		if (trip.currentTime > 85){

		$(this).css('opacity', 0.3);
		$('body').css('background', 'white');

		}
		if (trip.currentTime >86){
			$(this).css('opacity', 1);
			$('body').css('background', 'black');	
		}		
	});
 

});