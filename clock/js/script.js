
window.onload = function () {
	var keycode;
	$(document).on("keydown", processKeyBack);
	
	$('a').on('click', function(e){
		
		window.NetCastBack();
	
	});
	
	function processKeyBack(e) {
		
	    
	    if(window.event) { 
	        keycode = e.keyCode;
	    } else if(e.which) { 
	        keycode = e.which;
	    } 
	    
	    switch(keycode)
	    {
	        case VK_BACK: 
	        	window.NetCastBack();
	        break;
	        case VK_0:
	        	$('body').css({'background-color': 'black' });
	        break;
	        
	        case VK_1:
	        	$('body').css({'background-color': '#white' });
	        break;
	        
	        case VK_2:
	        	$('body').css({'background-color': '#283977' });
	        break;
	        
	        case VK_3:
	        	$('body').css({'background-color': '#2A4D7E' });
	        break;
	        case VK_4:
	        	$('body').css({'background-color': '#374BA4' });
	        break;
	        case VK_5:
	        	$('body').css({'background-color': '#6E72CF' });
	        break;
	        case VK_6:
	        	$('body').css({'background-color': '#7589D1' });
	        break;
	        case VK_7:
	        	$('body').css({'background-color': '#90C0DA' });
	        break;
	        case VK_8:
	        	$('body').css({'background-color': '#283977' });
	        break;
	        case VK_9:
	        	$('body').css({'background-color': '#EBF2D9' });
	        break;
	        
	    }
	}

	
    var r = Raphael("holder", 600, 600),
        R = 200,
        init = true,
        param = {stroke: "#fff", "stroke-width": 30},
        hash = document.location.hash,
        marksAttr = {fill: hash || "#444", stroke: "none"},
        html = [
            document.getElementById("h"),
            document.getElementById("m"),
            document.getElementById("s"),
            document.getElementById("d"),
            document.getElementById("mnth"),
            document.getElementById("ampm")
        ];
    // Custom Attribute
    r.customAttributes.arc = function (value, total, R) {
        var alpha = 360 / total * value,
            a = (90 - alpha) * Math.PI / 180,
            x = 300 + R * Math.cos(a),
            y = 300 - R * Math.sin(a),
            color = "hsb(".concat(Math.round(R) / 200, ",", value / total, ", .75)"),
            path;
        if (total == value) {
            path = [["M", 300, 300 - R], ["A", R, R, 0, 1, 1, 299.99, 300 - R]];
        } else {
            path = [["M", 300, 300 - R], ["A", R, R, 0, +(alpha > 180), 1, x, y]];
        }
        return {path: path, stroke: color};
    };

    drawMarks(R, 60);
    var sec = r.path().attr(param).attr({arc: [0, 60, R]});
    R -= 40;
    drawMarks(R, 60);
    var min = r.path().attr(param).attr({arc: [0, 60, R]});
    R -= 40;
    drawMarks(R, 12);
    var hor = r.path().attr(param).attr({arc: [0, 12, R]});
    R -= 40;
    drawMarks(R, 31);
    var day = r.path().attr(param).attr({arc: [0, 31, R]});
    R -= 40;
    drawMarks(R, 12);
    var mon = r.path().attr(param).attr({arc: [0, 12, R]});
    
    html[5].style.color = Raphael.hsb2rgb(15 / 200, 1, .75).hex;

    function updateVal(value, total, R, hand, id) {
        if (total == 31) { // month
            var d = new Date;
            d.setDate(1);
            d.setMonth(d.getMonth() + 1);
            d.setDate(-1);
            total = d.getDate();
        }
        var color = "hsb(".concat(Math.round(R) / 200, ",", value / total, ", .75)");
        if (init) {
            hand.animate({arc: [value, total, R]}, 900, ">");
        } else {
            if (!value || value == total) {
                value = total;
                hand.animate({arc: [value, total, R]}, 750, "linear", function () {
                    hand.attr({arc: [0, total, R]});
                });
            } else {
                hand.animate({arc: [value, total, R]}, 1000, "linear");
            }
        }
        html[id].innerHTML = (value < 10 ? "0" : "") + value;
        html[id].style.color = Raphael.getRGB(color).hex;
    }

    function drawMarks(R, total) {
        if (total == 31) { // month
            var d = new Date;
            d.setDate(1);
            d.setMonth(d.getMonth() + 1);
            d.setDate(-1);
            total = d.getDate();
        }
        var color = "hsb(".concat(Math.round(R) / 200, ", 1, .75)"),
            out = r.set();
        for (var value = 0; value < total; value++) {
            var alpha = 360 / total * value,
                a = (90 - alpha) * Math.PI / 180,
                x = 300 + R * Math.cos(a),
                y = 300 - R * Math.sin(a);
                //dotted markers
            
        }
        return out;
    }

    (function () {
        var d = new Date,
            
            h = d.getHours();
        updateVal(d.getSeconds(), 60, 200, sec, 2);
        updateVal(d.getMinutes(), 60, 160, min, 1);
        updateVal(h, 24, 120, hor, 0);
        updateVal(d.getDate(), 31, 80, day, 3);
        updateVal(d.getMonth() + 1, 12, 40, mon, 4);
        
       
        setTimeout(arguments.callee, 1000);
        init = false;
    })();
};


