    $(function(){
    	$('.carousel').carousel({
    interval: 4000,
    });

    	$("#up").click(function(event) {
    	$(window).scrollTo( 0, 500);
});

    	var currentDate = new Date();
    	var month = currentDate.getMonth() + 1;
    	var day = currentDate.getDate();
    	var year = currentDate.getFullYear();

    	if (month < 10){
    		month = "0" + month;
    	}

    	document.getElementById('date').innerHTML = year + "-" + month + "-" + day;



    });
