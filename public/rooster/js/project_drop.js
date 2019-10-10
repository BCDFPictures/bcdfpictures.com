var counter = 1;

		var t=setTimeout("projectDropDown()", 180);

		function projectDropDown(){
				
				$('.image_container.' + counter).not('.static').animate({"top": "0"}, 1000, 'easeOutCubic', function(){
				});

				counter++;
				if(counter <= 7){setTimeout("projectDropDown()", 180);}
				else{var z = setTimeout("projetNavButton()", 800);}
			}

		function projetNavButton(){
			$('.image_container.nav').css({"top":"0"});
			$('.content .thumbs').css({"overflow": "visible"});
			$('.image_container.nav').stop().animate({"left": "46px"}, 800);
		}
		
