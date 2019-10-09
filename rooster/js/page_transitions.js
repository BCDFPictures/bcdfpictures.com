


function galleryIn(e, newURL) {
	e.preventDefault();
	
	$('.copy_block div').fadeOut(200);
	$('.right.content').fadeOut(200);
	$('.middle.content').fadeOut(200);
	$('.left.content').animate({'width': "1000px"}, 1000, 'easeOutCubic', function(){redirectPage(newURL)});	
}

function galleryToProject(e, newURL) {
	e.preventDefault();
	
	$('.gallery div').fadeOut(200, function(e) {redirectPage(newURL)});
	$('.white_bg').fadeOut(200);		
}

function trailerIn(e, newURL) {
	e.preventDefault();
	
	$('.copy_block div').fadeOut(200);
	$('.right.content').fadeOut(200);
	$('.middle.content').fadeOut(200);
	$('.left.content').animate({'width': "1000px"}, 1000, 'easeOutCubic', function(){redirectPage(newURL)});	
}

function genericOut(e, newURL) {
	e.preventDefault();
	$('.left.content').animate({'opacity':0}, function(){redirectPage(newURL)});
	$('.right.content').animate({'opacity':0});	
}

function genericIn() {
	$('.left.content').not('.gallery').not('.trailers').not('.projects').not('.facilities').animate({'opacity':1});	
}

function redirectPage(newURL) {
	window.location = newURL;	
}