

$(document).ready(function(e) {
	var expandWidth = $('.expand_box').width();
    $('.image_container').parent('a').click(function(e) {
        e.preventDefault();
		
    });
	
	$('.image_container').not('.static').not('.facilities').click(function(e) {
		var newURL = $(this).parent('a').attr('href');
		var currentID = $(this).attr('id');
		
		$('.image_container').not('.facilities').each(function(index, element) {
			$(this).css({'opacity':0});	
		});
		
		$('.left.content.projects.front').css({'width':'302px'});
		
		$('.copy_block.collapsed').css({'display':'none'});
		$('.copy_block.expanded#'+ currentID).css({'display':'block', 'opacity':0});
		
		$('.expand_box#'+currentID).css({'display':'block', 'opacity':0});
		
		$('.expand_box#'+currentID).animate({'opacity':1}, 1200);
		$('.copy_block.expanded#'+ currentID).animate({'opacity':1}, 1000);
		
		
		
		$('.right.content.projects').animate({'right':'306px', 'opacity':1}, 700, 'easeInOutQuad',function(e){
			
			var len = $('.image_container').not('.facilities').length;
			
			$('.image_container').not('.facilities').each(function(index, element) {
                var current = $(this);
				setTimeout(function(e) {
					current.animate({'opacity':1, 'left':'323px'}, 700, 'easeInOutQuad', function(e){
						checkForRedirect(index, len, newURL);	
					});	
				}, 200*index);
				
				
            });
		});
		
		$('.image_container').each(function(index, element) {
            $(this).addClass('static');
        });
	
    });
	
	
	$('.image_container.static').click(function(e) {
        var newURL = $(this).parent('a').attr('href');
		redirectPage(newURL);
    });
});

function checkForRedirect(i, l, newURL) {
	if(i == l - 1) {
		redirectPage(newURL);
	}	
}

