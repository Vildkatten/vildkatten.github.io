$(function() {

	//globala variabler som kan hämtas av alla funktioner
	var list = $('#showText'), tasks = '', form = $('#tasks-form'), buttonClear = $('#itemClear');
	//hämtar items i localStorage med nyckeln tasks
	list.append(localStorage.getItem('tasks'));

	$('#myButton').on('click', function(event) {
		$("#myButton").submit();

		//hämtar text från textfält
		var myText = $('#input').val();

		//gor om text från input till li-element
		var newItem = $('<li>' + myText + '</li>');

		//lägger till nya items
		list.append(newItem);
		tasks = list.html();

		//lägger till items i localStorage
		localStorage.setItem('tasks', tasks);

		//radera textfält
		$('#input').val('');
		return false;

	});

	//radera item
	$('#showText').on('click', 'li', function(event) {

		$(this).remove();
		tasks = list.html();

		localStorage.setItem('tasks', tasks);

	});

	//radera localStorage
	$('#itemClear').on('click', function(event) {
		localStorage.clear();
		list.html('');
		event.preventDefault();

	});

	//länk till rss och hjälplänk från google
	// var rssURL = 'http://www.arla.se/RSS/RSS.aspx?id=10717';
	// var url = 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + rssURL;

	// $.getJSON(url, function(response) {
	// 	//kollar respons av rss-feed och initierar
	// 	data = response;
	// 	var posts = response.responseData.feed.entries;
	// 	for (var i = 0; i < posts.length; i++) {
	// 		var post = posts[i];

	// 		//variabler för rss-egenskaper, styling
	// 		var listItem = $('<li></li>');
	// 		var titleItem = $('<h2></h2>');

	// 		var snippetItem = $('<div></div>');
	// 		var linkElement = $('<a>Läs mer</a>');

	// 		linkElement.attr("href", post.link);

	// 		//rss-teaser
	// 		snippetItem.html(post.contentSnippet);
	// 		//rubrik
	// 		titleItem.html(post.title);

	// 		//lägger till rss
	// 		listItem.append(titleItem);

	// 		listItem.append(snippetItem);
	// 		listItem.append(linkElement);

	// 		//längd på rss-feed
	// 		$('.rss').append(listItem);
	// 		if (i == 4) {
	// 			i = posts.length;
	// 		}

	// 	}

	// });

	var colorBlack = $('#black');
	/*ändrar backgrundsfärg och textfärg till svart/vitt*/

	colorBlack.click(function(event) {

		$('body').css('background', 'black');
		$('body').css('color', 'white');
		$('#showText a').css('color', 'white');

		event.preventDefault();
		return false;

	});

	var colorWhite = $('#white');
	/*ändrar tillbaka till vitt*/

	colorWhite.click(function(event) {
		$('body').css('background', 'white');
		$('body').css('color', 'black');
		event.preventDefault();
		return false;
	});

});
