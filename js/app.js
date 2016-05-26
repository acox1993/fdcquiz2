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
		$('.questions').show();
		go();
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

		// 0-Catwoman
	var Catwoman = {
		"questionID": "Question 1",
		"questionNumber": "1/6",
		"picture": "images/catwoman.jpg" ,
		"name": "name", //how do i establish input box that right
		"alignment": ["Heroine","Villian"] ,
		"appearance": ["Batman: The Animated Series", "Batman Issue #173", "The Cat Issue #1", "Batman Issue #1", "None Are Correct"]
	}

		// 1-Vixen
	var Vixen = {
		"questionID": "Question 2",
		"questionNumber": "2/6",
		"picture": "images/vixen2.jpg" ,
		"name": "name",
		"alignment": ["Heroine","Villian"] ,
		"appearance": ["Black Panther Issue #92", "Action Comics Issue #521", "African Amazon Issue #1", "None Are Correct", "N"]
	}

		// 2-Hawkgirl
	var Hawkgirl = {
		"questionID": "Question 3",
		"questionNumber": "3/6",
		"picture": "images/Hawkgirl1.jpg" ,
		"name": "name",
		"alignment": ["Heroine","Villian"] ,
		"appearance": ["None are Correct", "B", "C", "D", "Flash Comics Issue #1"]
	}

		// 3-Harley
	var Harley = {
		"questionID": "Question 4",
		"questionNumber": "4/6",
		"picture": "images/Harley1.png" ,
		"name": "name",
		"alignment": ["Heroine","Villian"] ,
		"appearance": ["Batman Issue #83", "Batman: The Animated Series", "Batman Issue #173", "Batman: The Dark Knight Returns", "Detective Comics #27"]
	}

		// 4-Black Canary
	var BlackCanary = {
		"questionID": "Question 5",
		"questionNumber": "5/6",
		"picture": "images/Black-Canary.jpg" ,
		"name": "name",
		"alignment": ["Heroine","Villian"] ,
		"appearance": ["Bat", "None Are Correct", "B", "Flash Comic Issue #86", "D"]
	}	

		// 5-Katana
	var Katana = {
		"questionID": "Question 6",
		"questionNumber": "6/6",
		"picture": "images/Katana_1.jpg" ,
		"name": "name", 
		"alignment": ["Heroine","Villian"] ,
		"appearance": ["The Brave and the Bold #200", "A", "None Are Correct", "D", "E"]
	}

	var questions = [Catwoman, Vixen, Hawkgirl, Harley, BlackCanary, Katana];
		// 0-Catwoman
		// 1-Vixen
		// 2-Hawkgirl
		// 3-Harley
		// 4-Black Canary
		// 5-Katana

	var right = 0;
	var total = 0;
	var score = right/total * 100;


function go() {
	$('.questions').append("<h3>" + Catwoman.questionID+"</h3>");
	$('.questions').append("<img class='character' src='" + Catwoman.picture + "'>");
	$('.questions').append("<div class='Qinside'></div>");
	$('.Qinside').append("<p> <span class='title'>Name:</span> </p>");
	$('.Qinside p:first-child').append("<input class='textName' type='text' name='name'>");
	$('.Qinside').append("<p> <span class='title'>Alignment: </span> </p>");
	$('.Qinside p:nth-child(2)').append("<input type='radio' class='alignment' name='alignment' value='heroine'> " + Catwoman.alignment[0] + " ");
	$('.Qinside p:nth-child(2)').append("<input type='radio' class='alignment aVill' name='alignment' value='villain'> " + Catwoman.alignment[1] + "");
	$('.Qinside').append("<p > <span class='title'>First appearance:</span> </p>");
	$('.Qinside p:nth-child(3)').append("<br><input type='radio' class='firstAppearance' name='firstAppearance' value='batmanIssue83'> "+ Catwoman.appearance[0] +"");
	$('.Qinside p:nth-child(3)').append("<br><input type='radio' class='firstAppearance' name='firstAppearance' value='batmanAnimated'> "+ Catwoman.appearance[1] +"");
	$('.Qinside p:nth-child(3)').append("<br> <input type='radio' class='firstAppearance' name='firstAppearance' value='batmanReturns'> "+ Catwoman.appearance[2] +"");
	$('.Qinside p:nth-child(3)').append("<br> <input type='radio' class='firstAppearance' name='firstAppearance' value='batmanIssue173'>"+ Catwoman.appearance[3] +"");
	$('.Qinside p:nth-child(3)').append("<br><input type='radio' class='firstAppearance' name='firstAppearance' value='detectiveComics27'> "+ Catwoman.appearance[4] +"");
	$('.questions').append("<div class='submit' ></div>");
	$('.questions .submit').append("<button> Submit </button>");
	$('.questions .submit').append("<p><b>Question:</b> " + Catwoman.questionNumber + "</p>");
	$('.questions .submit').append("<p><b>Score:</b> " + score + "%</p>");
	$('.questions').append("<img class='logo' src='images/New-DC.png'>");
};

		// 1-Vixen
		// 2-Hawkgirl
		// 3-Harley
		// 4-Black Canary
		// 5-Katana

});