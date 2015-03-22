    $(function(){
    	$('.carousel').carousel({
    interval: 4000,
    });

    	$("#up").click(function(event) {
    	$(window).scrollTo( 0, 500);
});

    	function startDate(){
    		var time = new Date();
    		var month = time.getMonth() + 1;
	    	var day = time.getDate();
	    	var year = time.getFullYear();
	    	month = addZero(month);
    		day = addZero(day);

    		document.getElementById('date').innerHTML = year + "-" + month + "-" + day;
    	}

    	 	startDate();

	    function startTime(){
	    	var time = new Date();
	    	var hour = time.getHours();
    		var minutes = time.getMinutes();
    		var seconds = time.getSeconds();
    		minutes = addZero(minutes);
    		seconds = addZero(seconds);
    		hour = addZero(hour);

    		document.getElementById('time').innerHTML = hour + ":" + minutes + ":" + seconds;

    		var t = setTimeout(function(){
    			startTime();
    		},500);

	    }

	    	startTime();


    	function addZero(i) {
    		if (i < 10){
    			i = "0" + i;
    			return i;
    		}else{
    			i = i;
    			return i;
    		}
    	}

    });
