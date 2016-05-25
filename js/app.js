$(document).ready(function(){
	// fade in start page
	$('.start').delay(900).fadeIn(3000);
	//how to open
	$('.what').click(function(){
		$('').hide();
		$('.howTo').fadeIn(1000);
	});
	$('.buttonS').click(function(){
		$('.howTo').fadeIn(1000);
		$('.start').hide();
	});

	//how to close
	$('.fa-times').click(function(){
		$('.howTo').fadeOut(1000);
	});

	// how to highlighting
	 // Picture to Name
	 $('.fa-arrow-circle-right' ).click(function(){
	 		$('img.instructions').removeClass('highlighted');
	 		$('.HTinside p:first-child').addClass('highlighted');
	 		$('.popup').css('margin-left', '37em');
	 		$('.popup').css('margin-top', '2em');
	 		$('.popup p').html("<p> Please fill in the pictured superheroine's or supervillian's super identity here. </p> <div class='ifa'> <i class='fa fa-arrow-circle-right B' aria-hidden='true'></i></div>");
	 		$('.A').hide();
	 		$('.ifa2').show();

	 
	 		
	 		// Name to alignment
	 	$('.B').click(function(){
	 		$('.HTinside p:first-child').removeClass('highlighted');
	 		$('.HTinside p:nth-child(2)').addClass('highlighted');
	 		$('.popup').css('margin-left', '18em');
	 		$('.popup').css('margin-top', '9em');
	 		$('.popup p').html("<p> Please select the alignment of the superheroine or supervillian pictured. </p> <div class='ifa'> <i class='fa fa-arrow-circle-right C' aria-hidden='true'></i></div>");


	 			// alignment to appearance
	 		$('.C').click(function(){
	 			$('.HTinside p:nth-child(2)').removeClass('highlighted');
	 			$('.HTinside p:nth-child(3)').addClass('highlighted');
	 			$('.popup').css('height', '6em');
	 			$('.popup').css('margin-left', '35em');
	 			$('.popup').css('margin-top', '27em');
	 			$('.popup p').html("<p> Please select the medium, released to the general public, that the superheroine or supervillian pictured first appeared in. </p> <div class='ifa'> <i class='fa fa-arrow-circle-right D' aria-hidden='true'></i></div>");


	 				// appearance to submit
	 			$('.D').click(function(){
	 				$('.HTinside p:nth-child(3)').removeClass('highlighted');
	 				$('div.submit').addClass('highlighted');
	 				$('.popup').css('height', '7em');
	 				$('.popup').css('margin-left', '18em');
	 				$('.popup').css('margin-top', '22em');
	 				$('.popup p').html("<p> When you are confident with your answers, please select the submit button. Below the submit button, you can also see which question you are on and what your score is. </p> <div class='ifa'> <i class='fa fa-arrow-circle-right E' aria-hidden='true'></i></div>");
	 				// submit to enjoy
	 				$('.E').click(function(){
	 					$('div.submit').removeClass('highlighted');
	 					$('.popup').css('height', '7em');
	 					$('.popup').css('margin-left', '18em');
	 					$('.popup').css('margin-top', '11em');
	 					$('.popup').css('height', '10em');
	 					$('.popup').css('width', '20em');
	 					$('.popup p').html("<h3>Please enjoy my DC Comic trivia.</h3>");
	 				});
	 			});
	 		});
	 	});
	 });
	 	// back to start
	 	$('.fa-arrow-circle-left').click(function(){
	 		$('.HTinside p:first-child').removeClass('highlighted');
	 		$('.HTinside p:nth-child(2)').removeClass('highlighted');
	 		$('.HTinside p:nth-child(3)').removeClass('highlighted');
	 		$('div.submit').removeClass('highlighted');
	 		$('img.instructions').addClass('highlighted');
	 		$('.popup').css('height', '5em');
	 		$('.popup').css('margin-left', '0em');
	 		$('.popup').css('margin-top', '-2em');
	 		$('.popup p').html("The Image to the left is the character the questions revolve around.");
	 		$('.A').show();
	 		$('.ifa2').hide();

	 	});


});