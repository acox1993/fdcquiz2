$(document).ready(function(){
	rightC = 0;
  	rightV = 0;
	rightH = 0;
	rightHQ = 0;
	rightB = 0;
	rightK = 0;
	rightO = rightC + rightV + rightH + rightHQ + rightB + rightK;
	total = 0;
	score = Number((rightO)/(total)*100);
	if (rightO == 0 && total == 0) {score = 0};

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
		go(Catwoman);
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
		"id": "cat" ,
		"picture": "images/catwoman.jpg" ,
		"name": "name", //how do i establish input box that right
		"alignment": ["Heroine","Villian"] ,
		"appearance": ["Batman: The Animated Series", "Batman Issue #173", "The Cat Issue #1", "Batman Issue #1", "None Are Correct"] ,
		"appearanceText": ["animated" , "173" , "cat1" , "bat1" , "none1" ]
	}

		// 1-Vixen
	var Vixen = {
		"questionID": "Question 2",
		"questionNumber": "2/6",
		"id": "vix" ,
		"picture": "images/vixen2.jpg" ,
		"name": "name",
		"alignment": ["Heroine","Villian"] ,
		"appearance": ["Black Panther Issue #92", "Action Comics Issue #521", "African Amazon Issue #1", "None Are Correct", "Suicide Squad Issue #66"] ,
		"appearanceText": ["panther2" , "action2" , "african2" , "none2" , "n1" ]
	}

		// 2-Hawkgirl
	var Hawkgirl = {
		"questionID": "Question 3",
		"questionNumber": "3/6",
		"id": "haw" ,
		"picture": "images/Hawkgirl1.jpg" ,
		"name": "name",
		"alignment": ["Heroine","Villian"] ,
		"appearance": ["None are Correct", "Justice League #10", "Action Comics Issue #200", "Flashpoint Issue #2", "Flash Comics Issue #1"] ,
		"appearanceText": ["none3" , "B3" , "C3" , "D3" , "flash1" ]
	}

		// 3-Harley
	var Harley = {
		"questionID": "Question 4",
		"questionNumber": "4/6",
		"id": "har" ,
		"picture": "images/Harley1.png" ,
		"name": "name",
		"alignment": ["Heroine","Villian"] ,
		"appearance": ["Batman Issue #83", "Batman: The Animated Series", "Batman Issue #173", "Batman: The Dark Knight Returns", "Detective Comics #27"] ,
		"appearanceText": ["bat83" , "animated2" , "bat173" , "dark" , "detective" ]
	}

		// 4-Black Canary
	var BlackCanary = {
		"questionID": "Question 5",
		"questionNumber": "5/6",
		"id": "bla" ,
		"picture": "images/Black-Canary.jpg" ,
		"name": "name",
		"alignment": ["Heroine","Villian"] ,
		"appearance": ["Green Arrow Issue #100", "None Are Correct", "Flashpoint Issue #2", "Flash Comic Issue #86", "The Arrow Issue #7"] ,
		"appearanceText": ["A5" , "none5" , "b5" , "flash86" , "d5" ]
	}	

		// 5-Katana
	var Katana = {
		"questionID": "Question 6",
		"questionNumber": "6/6",
		"id": "kat" ,
		"picture": "images/Katana_1.jpg" ,
		"name": "name", 
		"alignment": ["Heroine","Villian"] ,
		"appearance": ["The Brave and the Bold #200", "Batman Issue #173", "None Are Correct", "Action Comics Issue #25", "Suicide Squad Issue #39"] ,
		"appearanceText": ["brave200" , "a6" , "none6" , "d6" , "e6" ]
	}



function go(char) {
	$('.questions').append("<h3>" + char.questionID+"</h3>");
	$('.questions').append("<img class='character' src='" + char.picture + "'>");
	$('.questions').append("<div class='Qinside'></div>");
	$('.Qinside').append("<p> <span class='title'>Name:</span> </p>");
	$('.Qinside p:first-child').append("<input class='textName "+ char.id +"' id='"+ char.id +"' type='text' name='name'>");
	$('.Qinside').append("<p> <span class='title titleAlign'>Alignment: </span> </p>");
	$('.Qinside p:nth-child(2)').append("<input type='radio' class='alignment "+ char.id +"' name='alignment' value='heroine'> " + char.alignment[0] + " ");
	$('.Qinside p:nth-child(2)').append("<input type='radio' class='alignment "+ char.id + " aVill' name='alignment' value='villain'> " + char.alignment[1] + "");
	$('.Qinside').append("<p > <span class='title titleAppear'>First appearance:</span> </p>");
	$('.Qinside p:nth-child(3)').append("<br><input type='radio' class='firstAppearance "+ char.id + "' name='firstAppearance' value='"+ char.appearanceText[0] + "'> "+ char.appearance[0] +"");
	$('.Qinside p:nth-child(3)').append("<br><input type='radio' class='firstAppearance "+ char.id + "' name='firstAppearance' value='"+ char.appearanceText[1] + "'> "+ char.appearance[1] +"");
	$('.Qinside p:nth-child(3)').append("<br> <input type='radio' class='firstAppearance "+ char.id + "' name='firstAppearance' value='"+ char.appearanceText[2] + "'> "+ char.appearance[2] +"");
	$('.Qinside p:nth-child(3)').append("<br> <input type='radio' class='firstAppearance "+ char.id + "' name='firstAppearance' value='"+ char.appearanceText[3] + "'>"+ char.appearance[3] +"");
	$('.Qinside p:nth-child(3)').append("<br><input type='radio' class='firstAppearance "+ char.id + "' name='firstAppearance' value='"+ char.appearanceText[4] + "'> "+ char.appearance[4] +"");
	$('.questions').append("<div class='submit' ></div>");
	$('.questions .submit').append("<button class= '"+ char.id +"''> Submit </button>");
	$('.questions .submit').append("<p><b>Question:</b> " + char.questionNumber + "</p>");
	$('.questions .submit').append("<p><b>Score:</b> " + score + "%</p>");
	$('.questions').append("<img class='logo' src='images/New-DC.png'>");

$('.submit button.cat').click(function(){
		catwomanAnswer();
});
$('.submit button.vix').click(function(){
		vixenAnswer();
});
$('.submit button.haw').click(function(){
		hawkAnswer();
});
$('.submit button.har').click(function(){
		harleyAnswer();
});
$('.submit button.bla').click(function(){
		blackAnswer();
});
$('.submit button.kat').click(function(){
		katanaAnswer();
});
	var catwomanAnswer = function() {
		var nameAnswer = $('input.textName.cat').val().toLowerCase();
		var alignmentAnswer = $('input.alignment.cat:checked').val();
		var appearanceAnswer = $('input.firstAppearance.cat:checked').val();
		

				// validation
		if (nameAnswer == "") {
			$('input.textName').focus();
			$("<p class='validation'> Please enter a value</p>").insertAfter($('input.textName'));
			return;
		};
		if (alignmentAnswer !== "villain" && alignmentAnswer !== "heroine") {

			$("<p class='validation validation2'> Please select a value</p>").insertBefore($('.titleAppear'));
			return;
		};
		if (appearanceAnswer !== Catwoman.appearanceText[0] &&  appearanceAnswer !== Catwoman.appearanceText[1] && appearanceAnswer !== Catwoman.appearanceText[2] && appearanceAnswer !== Catwoman.appearanceText[3] && appearanceAnswer !== Catwoman.appearanceText[4]) {

			$("<p class='validation validation2'> Please select a value</p>").appendTo($('.Qinside'));
			return;
		};
		
			// check answers
		if (nameAnswer == "catwoman") {
			rightC++;
			total++;

		}
		else {
			total++;
		};
		if (alignmentAnswer == "villain") {
			rightC++;
			total++;

		}
		else {
			total++;
		};
		if (appearanceAnswer == "bat1") {
			rightC++;
			total++;

		}
		else {
			total++;
		};

		rightO = rightC + rightV + rightH + rightHQ + rightB + rightK;
		score = Math.round((rightO)/(total)*100);

		if (rightC <= 1) {
			$('.questions').hide().html("");
			$('.answers').show();
			$('.Score1').append(""+ score +"%");
			$('.One').show().append("<button class='backOne'> Try Again</button>");
			$('.backOne').click(function(){
				$('.answers').hide();
				$('.One').hide();
				$('.One').html("<h3 class='Oheader'>Sorry maybe you want to try this one again. Your current score is <span class='Score Score1'></span>.</h3>");
				$('.backOne').remove();
				$('.nextOne').remove();
				$('.questions').show();
				go(Catwoman);

			});
			$('.One').show().append("<button class='nextOne'> Next question</button>");
			$('.nextOne').click(function(){
				$('.answers').hide();
				$('.One').hide().html("<h3 class='Oheader'>Sorry maybe you want to try this one again. Your current score is <span class='Score Score1'></span>.</h3>");
				$('.questions').show();
				go(Vixen);

			});

		}
		else if (rightC == 2) {
			$('.questions').hide().html("");
			$('.answers').show();
			$('.Score2').append(""+ score +"%");
			$('.Two').show().append("<img class='leftA' src='images/Catwoman2.jpg'><img class='rightA' src='images/catwoman08.jpg'><p class='story'>Catwoman aka Selina Kyle was created to be the love-interest of Batman. She was first seen in Batman issue #1 in 1940. Batman and Catwoman's interactions were a regular game of cat and mouse, filled with strategy and sexual tension. Catwoman is different than other villains in Gotham because she doesn't kill and she isn't outright evil. She is simply an opportunistic, intelligent thief. In fact Batman reforms Catwoman for a long period of time until she returns to crime and disappears from the comic for awhile. Her disappearance is contributed to the development of rules for female character portrayals by the Comics Code Authority.</p><button class='nextOne'> Next question</button>");
			$('.nextOne').click(function(){
				$('.answers').hide();
				$('.Two').hide().html("<h3 class='Theader'>Congratulations you got two out of the three correct your current score is <span class='Score Score2'></span>.</h3>");
				$('.questions').show();
				go(Vixen);

			});

		}
		else if (rightC >= 3) {
			$('.questions').hide().html("");
			$('.answers').show();
			$('.ScoreA').append(""+ score +"%");
			$('.All').show().append("<img class='leftA' src='images/Catwoman2.jpg'><img class='rightA' src='images/catwoman08.jpg'><p class='story'>Catwoman aka Selina Kyle was created to be the love-interest of Batman. She was first seen in Batman issue #1 in 1940. Batman and Catwoman's interactions were a regular game of cat and mouse, filled with strategy and sexual tension. Catwoman is different than other villains in Gotham because she doesn't kill and she isn't outright evil. She is simply an opportunistic, intelligent thief. In fact Batman reforms Catwoman for a long period of time until she returns to crime and disappears from the comic for awhile. Her disappearance is contributed to the development of rules for female character portrayals by the Comics Code Authority. </p><button class='nextOne'> Next question</button>");
			$('.nextOne').click(function(){
				$('.answers').hide();

				$('.All').hide().html("<h3 class='Aheader'>Congratulations you got them all your current score is <span class='Score ScoreA'></span>.</h3>");

				$('.questions').show();
				go(Vixen);

			});

		};
	}; //end cat var

	var vixenAnswer = function(){
		var nameAnswer = $('input.textName.vix').val().toLowerCase();
		var alignmentAnswer = $('input.alignment.vix:checked').val();
		var appearanceAnswer = $('input.firstAppearance.vix:checked').val();
		

				// validation
		if (nameAnswer == "") {
			$('input.textName').focus();
			$("<p class='validation'> Please enter a value</p>").insertAfter($('input.textName'));
			return;
		};
		if (alignmentAnswer !== "villain" && alignmentAnswer !== "heroine") {

			$("<p class='validation validation2'> Please select a value</p>").insertBefore($('.titleAppear'));
			return;
		};
		if (appearanceAnswer !== Vixen.appearanceText[0] &&  appearanceAnswer !== Vixen.appearanceText[1] && appearanceAnswer !== Vixen.appearanceText[2] && appearanceAnswer !== Vixen.appearanceText[3] && appearanceAnswer !== Vixen.appearanceText[4]) {

			$("<p class='validation validation2'> Please select a value</p>").appendTo($('.Qinside'));
			return;
		};
		
			// check answers
		if (nameAnswer == "vixen") {
			rightV++;
			total++;

		}
		else {
			total++;
		};
		if (alignmentAnswer == "heroine") {
			rightV++;
			total++;

		}
		else {
			total++;
		};
		if (appearanceAnswer == "action2") {
			rightV++;
			total++;

		}
		else {
			total++;
		};

		rightO = rightC + rightV + rightH + rightHQ + rightB + rightK;
		score = Math.round((rightO)/(total)*100);

		if (rightV <= 1) {
			$('.questions').hide().html("");
			$('.answers').show();
			$('.Score1').append(""+ score +"%");
			$('.One').show().append("<button class='backOne'> Try Again</button>");
			$('.backOne').click(function(){
				$('.answers').hide();
				$('.One').hide();
				$('.One').html("<h3 class='Oheader'>Sorry maybe you want to try this one again. Your current score is <span class='Score Score1'></span>.</h3>");
				$('.backOne').remove();
				$('.nextOne').remove();
				$('.questions').show();
				go(Vixen);

			});
			$('.One').show().append("<button class='nextOne'> Next question</button>");
			$('.nextOne').click(function(){
				$('.answers').hide();
				$('.One').hide().html("<h3 class='Oheader'>Sorry maybe you want to try this one again. Your current score is <span class='Score Score1'></span>.</h3>");
				$('.questions').show();
				go(Hawkgirl);

			});

		}
		else if (rightV == 2) {
			$('.questions').hide().html("");
			$('.answers').show();
			$('.Score2').append(""+ score +"%");
			$('.Two').show().append("<img class='leftA' src='images/Vixen1.jpg'><img class='rightA' src='images/vixen4.jpg'><p class='story'>Vixen grew up in a small fictional African village. After her mother was murdered by poachers  she lived for a time with her father who was murdered by his brother for the family heirloom. The totem stolen gives the wearer all the powers of the animal kingdom, and would later be the source of Vixen’s power. After the murder of both her parents Vixen moved to America and established the identity Mari McCabe. She began modeling in New York City, and eventually used her new found wealth to travel the world. On a trip back to Africa, Mari finds her uncle and takes back the Tantu Totem.</p><p class='story'> Vixen was intended to be the first African female DC Superhero to star in her own series but unfortunately it was cancelled in 1978 without being released. So her first appearance was delayed to 1981 in Action Comics issue #521.</p><button class='nextOne'> Next question</button>");
			$('.nextOne').click(function(){
				$('.answers').hide();
				$('.Two').hide().html("<h3 class='Theader'>Congratulations you got two out of the three correct your current score is <span class='Score Score2'></span>.</h3>");
				$('.questions').show();
				go(Hawkgirl);

			});

		}
		else if (rightV >= 3) {
			$('.questions').hide().html("");
			$('.answers').show();
			$('.ScoreA').append(""+ score +"%");
			$('.All').show().append("<img class='leftA' src='images/Vixen1.jpg'><img class='rightA' src='images/vixen4.jpg'><p class='story'>Vixen grew up in a small fictional African village. After her mother was murdered by poachers  she lived for a time with her father who was murdered by his brother for the family heirloom. The totem stolen gives the wearer all the powers of the animal kingdom, and would later be the source of Vixen’s power. After the murder of both her parents Vixen moved to America and established the identity Mari McCabe. She began modeling in New York City, and eventually used her new found wealth to travel the world. On a trip back to Africa, Mari finds her uncle and takes back the Tantu Totem.</p><p class='story'> Vixen was intended to be the first African female DC Superhero to star in her own series but unfortunately it was cancelled in 1978 without being released. So her first appearance was delayed to 1981 in Action Comics issue #521.</p><button class='nextOne'> Next question</button>");
			$('.nextOne').click(function(){
				$('.answers').hide();
				$('.All').hide().html("<h3 class='Aheader'>Congratulations you got them all your current score is <span class='Score ScoreA'></span>.</h3>");
				$('.questions').show();
				go(Hawkgirl);

			});

		};
	}; //end vixen var

	var hawkAnswer = function(){
		var nameAnswer = $('input.textName.haw').val().toLowerCase();
		var alignmentAnswer = $('input.alignment.haw:checked').val();
		var appearanceAnswer = $('input.firstAppearance.haw:checked').val();
		

				// validation
		if (nameAnswer == "") {
			$('input.textName').focus();
			$("<p class='validation'> Please enter a value</p>").insertAfter($('input.textName'));
			return;
		};
		if (alignmentAnswer !== "villain" && alignmentAnswer !== "heroine") {

			$("<p class='validation validation2'> Please select a value</p>").insertBefore($('.titleAppear'));
			return;
		};
		if (appearanceAnswer !== Hawkgirl.appearanceText[0] &&  appearanceAnswer !== Hawkgirl.appearanceText[1] && appearanceAnswer !== Hawkgirl.appearanceText[2] && appearanceAnswer !== Hawkgirl.appearanceText[3] && appearanceAnswer !== Hawkgirl.appearanceText[4]) {

			$("<p class='validation validation2'> Please select a value</p>").appendTo($('.Qinside'));
			return;
		};
		
			// check answers
		if (nameAnswer == "hawkgirl") {
			rightH++;
			total++;

		}
		else {
			total++;
		};
		if (alignmentAnswer == "heroine") {
			rightH++;
			total++;

		}
		else {
			total++;
		};
		if (appearanceAnswer == "flash1") {
			rightH++;
			total++;

		}
		else {
			total++;
		};

		rightO = rightC + rightV + rightH + rightHQ + rightB + rightK;
		score = Math.round((rightO)/(total)*100);

		if (rightH <= 1) {
			$('.questions').hide().html("");
			$('.answers').show();
			$('.Score1').append(""+ score +"%");
			$('.One').show().append("<button class='backOne'> Try Again</button>");
			$('.backOne').click(function(){
				$('.answers').hide();
				$('.One').hide();
				$('.One').html("<h3 class='Oheader'>Sorry maybe you want to try this one again. Your current score is <span class='Score Score1'></span>.</h3>");
				$('.backOne').remove();
				$('.nextOne').remove();
				$('.questions').show();
				go(Hawkgirl);

			});
			$('.One').show().append("<button class='nextOne'> Next question</button>");
			$('.nextOne').click(function(){
				$('.answers').hide();
				$('.One').hide().html("<h3 class='Oheader'>Sorry maybe you want to try this one again. Your current score is <span class='Score Score1'></span>.</h3>");
				$('.questions').show();
				go(Harley);

			});

		}
		else if (rightH == 2) {
			$('.questions').hide().html("");
			$('.answers').show();
			$('.Score2').append(""+ score +"%");
			$('.Two').show().append("<img class='leftA' src='images/hawkgirl-hawkman.jpg'><img class='rightA' src='images/hawkgir2.jpg'><p class='story'>Hawkgirl was first seen as Shiera Sanders in Flash Comics issue #1 in 1940. The reincarnated heroine first appears as Hawkgirl in All Star Comics #5 in 1941.  Centuries before Shiera Sanders was born, Princess Chay-Ara and her lover Prince Khufu were killed by Hath-Set with a knife forged from Nth metal. The properties of the metal and the strength of their love lead to a bond causing them to be reincarnated, with superhuman powers, multiple times throughout centuries.</p><button class='nextOne'> Next question</button>");
			$('.nextOne').click(function(){
				$('.answers').hide();
				$('.Two').hide().html("<h3 class='Theader'>Congratulations you got two out of the three correct your current score is <span class='Score Score2'></span>.</h3>");
				$('.questions').show();
				go(Harley);

			});

		}
		else if (rightH >= 3) {
			$('.questions').hide().html("");
			$('.answers').show();
			$('.ScoreA').append(""+ score +"%");
			$('.All').show().append("<img class='leftA' src='images/hawkgirl-hawkman.jpg'><img class='rightA' src='images/hawkgir2.jpg'><p class='story'>Hawkgirl was first seen as Shiera Sanders in Flash Comics issue #1 in 1940. The reincarnated heroine first appears as Hawkgirl in All Star Comics #5 in 1941.  Centuries before Shiera Sanders was born, Princess Chay-Ara and her lover Prince Khufu were killed by Hath-Set with a knife forged from Nth metal. The properties of the metal and the strength of their love lead to a bond causing them to be reincarnated, with superhuman powers, multiple times throughout centuries. </p><button class='nextOne'> Next question</button>");
			$('.nextOne').click(function(){
				$('.answers').hide();
				$('.All').hide().html("<h3 class='Aheader'>Congratulations you got them all your current score is <span class='Score ScoreA'></span>.</h3>");
				$('.questions').show();
				go(Harley);

			});

		};
	}; // end hawk var

	var harleyAnswer = function(){
		var nameAnswer = $('input.textName.har').val().toLowerCase();
		var alignmentAnswer = $('input.alignment.har:checked').val();
		var appearanceAnswer = $('input.firstAppearance.har:checked').val();
		

				// validation
		if (nameAnswer == "") {
			$('input.textName').focus();
			$("<p class='validation'> Please enter a value</p>").insertAfter($('input.textName'));
			return;
		};
		if (alignmentAnswer !== "villain" && alignmentAnswer !== "heroine") {

			$("<p class='validation validation2'> Please select a value</p>").insertBefore($('.titleAppear'));
			return;
		};
		if (appearanceAnswer !== Harley.appearanceText[0] &&  appearanceAnswer !== Harley.appearanceText[1] && appearanceAnswer !== Harley.appearanceText[2] && appearanceAnswer !== Harley.appearanceText[3] && appearanceAnswer !== Harley.appearanceText[4]) {

			$("<p class='validation validation2'> Please select a value</p>").appendTo($('.Qinside'));
			return;
		};
		
			// check answers
		if (nameAnswer == "harley quinn") {
			rightHQ++;
			total++;

		}
		else {
			total++;
		};
		if (alignmentAnswer == "villain") {
			rightHQ++;
			total++;

		}
		else {
			total++;
		};
		if (appearanceAnswer == "animated2") {
			rightHQ++;
			total++;

		}
		else {
			total++;
		};

		rightO = rightC + rightV + rightH + rightHQ + rightB + rightK;
		score = Math.round((rightO)/(total)*100);

		if (rightHQ <= 1) {
			$('.questions').hide().html("");
			$('.answers').show();
			$('.Score1').append(""+ score +"%");
			$('.One').show().append("<button class='backOne'> Try Again</button>");
			$('.backOne').click(function(){
				$('.answers').hide();
				$('.One').hide();
				$('.One').html("<h3 class='Oheader'>Sorry maybe you want to try this one again. Your current score is <span class='Score Score1'></span>.</h3>");
				$('.backOne').remove();
				$('.nextOne').remove();
				$('.questions').show();
				go(Harley);

			});
			$('.One').show().append("<button class='nextOne'> Next question</button>");
			$('.nextOne').click(function(){
				$('.answers').hide();
				$('.One').hide().html("<h3 class='Oheader'>Sorry maybe you want to try this one again. Your current score is <span class='Score Score1'></span>.</h3>");
				$('.questions').show();
				go(BlackCanary);

			});

		}
		else if (rightHQ == 2) {
			$('.questions').hide().html("");
			$('.answers').show();
			$('.Score2').append(""+ score +"%");
			$('.Two').show().append("<img class='leftA' src='images/HQ2.jpg'><img class='rightA' src='images/HQ3.jpg'><p class='story'>Harley Quinn was originally created to be a one episode walk-on role, however she has since become a regular supporting character in many outlets as well as a main character in others.The character has reinvented and/or relaunched several times, sometimes featuring new back stories and looks. Her original story was that she was a psychiatrist at Arkham Asylum named Dr. Harleen Frances Quinzel. She fell in love with a patient known as the Joker and became his accomplice and lover showing more and more crazy attributes as time went on.</p><button class='nextOne'> Next question</button>");
			$('.nextOne').click(function(){
				$('.answers').hide();
				$('.Two').hide().html("<h3 class='Theader'>Congratulations you got two out of the three correct your current score is <span class='Score Score2'></span>.</h3>");
				$('.questions').show();
				go(BlackCanary);

			});

		}
		else if (rightHQ >= 3) {
			$('.questions').hide().html("");
			$('.answers').show();
			$('.ScoreA').append(""+ score +"%");
			$('.All').show().append("<img class='leftA' src='images/HQ2.jpg'><img class='rightA' src='images/HQ3.jpg'><p class='story'>Harley Quinn was originally created to be a one episode walk-on role, however she has since become a regular supporting character in many outlets as well as a main character in others.The character has reinvented and/or relaunched several times, sometimes featuring new back stories and looks. Her original story was that she was a psychiatrist at Arkham Asylum named Dr. Harleen Frances Quinzel. She fell in love with a patient known as the Joker and became his accomplice and lover showing more and more crazy attributes as time went on. </p><button class='nextOne'> Next question</button>");
			$('.nextOne').click(function(){
				$('.answers').hide();
				$('.All').hide().html("<h3 class='Aheader'>Congratulations you got them all your current score is <span class='Score ScoreA'></span>.</h3>");
				$('.questions').show();
				go(BlackCanary);

			});

		};
	}; //end harley var

	var blackAnswer = function(){
		var nameAnswer = $('input.textName.bla').val().toLowerCase();
		var alignmentAnswer = $('input.alignment.bla:checked').val();
		var appearanceAnswer = $('input.firstAppearance.bla:checked').val();
		

				// validation
		if (nameAnswer == "") {
			$('input.textName').focus();
			$("<p class='validation'> Please enter a value</p>").insertAfter($('input.textName'));
			return;
		};
		if (alignmentAnswer !== "villain" && alignmentAnswer !== "heroine") {

			$("<p class='validation validation2'> Please select a value</p>").insertBefore($('.titleAppear'));
			return;
		};
		if (appearanceAnswer !== BlackCanary.appearanceText[0] &&  appearanceAnswer !== BlackCanary.appearanceText[1] && appearanceAnswer !== BlackCanary.appearanceText[2] && appearanceAnswer !== BlackCanary.appearanceText[3] && appearanceAnswer !== BlackCanary.appearanceText[4]) {

			$("<p class='validation validation2'> Please select a value</p>").appendTo($('.Qinside'));
			return;
		};
		
			// check answers
		if (nameAnswer == "black canary") {
			rightB++;
			total++;

		}
		else {
			total++;
		};
		if (alignmentAnswer == "heroine") {
			rightB++;
			total++;

		}
		else {
			total++;
		};
		if (appearanceAnswer == "flash86") {
			rightB++;
			total++;

		}
		else {
			total++;
		};

		rightO = rightC + rightV + rightH + rightHQ + rightB + rightK;
		score = Math.round((rightO)/(total)*100);

		if (rightB <= 1) {
			$('.questions').hide().html("");
			$('.answers').show();
			$('.Score1').append(""+ score +"%");
			$('.One').show().append("<button class='backOne'> Try Again</button>");
			$('.backOne').click(function(){
				$('.answers').hide();
				$('.One').hide();
				$('.One').html("<h3 class='Oheader'>Sorry maybe you want to try this one again. Your current score is <span class='Score Score1'></span>.</h3>");
				$('.backOne').remove();
				$('.nextOne').remove();
				$('.questions').show();
				go(BlackCanary);

			});
			$('.One').show().append("<button class='nextOne'> Next question</button>");
			$('.nextOne').click(function(){
				$('.answers').hide();
				$('.One').hide().html("<h3 class='Oheader'>Sorry maybe you want to try this one again. Your current score is <span class='Score Score1'></span>.</h3>");
				$('.questions').show();
				go(Katana);

			});

		}
		else if (rightB == 2) {
			$('.questions').hide().html("");
			$('.answers').show();
			$('.Score2').append(""+ score +"%");
			$('.Two').show().append("<img class='leftA' src='images/bc2.jpg'><img class='rightA' src='images/bc1.jpg'><p class='story'>Black Canary was originally seen in Flash Comics issue #86 in 1947. She was originally the alter ego of Dinah Drake and later Dinah’s daughter Dinah Laurel Lance takes up the mantel. The original Canary was trained by her father, detective Richard Drake. Dinah hoped to join the Gotham City police force, however after she is turned down and her father dies Dinah turns to vigilantes justice. As a day cover she uses her inheritance to by a floral shop and runs the street as Black Canary at night.</p><button class='nextOne'> Next question</button>");
			$('.nextOne').click(function(){
				$('.answers').hide();
				$('.Two').hide().html("<h3 class='Theader'>Congratulations you got two out of the three correct your current score is <span class='Score Score2'></span>.</h3>");
				$('.questions').show();
				go(Katana);

			});

		}
		else if (rightB >= 3) {
			$('.questions').hide().html("");
			$('.answers').show();
			$('.ScoreA').append(""+ score +"%");
			$('.All').show().append("<img class='leftA' src='images/bc2.jpg'><img class='rightA' src='images/bc1.jpg'><p class='story'>Black Canary was originally seen in Flash Comics issue #86 in 1947. She was originally the alter ego of Dinah Drake and later Dinah’s daughter Dinah Laurel Lance takes up the mantel. The original Canary was trained by her father, detective Richard Drake. Dinah hoped to join the Gotham City police force, however after she is turned down and her father dies Dinah turns to vigilantes justice. As a day cover she uses her inheritance to by a floral shop and runs the street as Black Canary at night. </p><button class='nextOne'> Next question</button>");
			$('.nextOne').click(function(){
				$('.answers').hide();
				$('.All').hide().html("<h3 class='Aheader'>Congratulations you got them all your current score is <span class='Score ScoreA'></span>.</h3>");
				$('.questions').show();
				go(Katana);

			});

		};
	}; //end black var

	var katanaAnswer = function(){
		var nameAnswer = $('input.textName.kat').val().toLowerCase();
		var alignmentAnswer = $('input.alignment.kat:checked').val();
		var appearanceAnswer = $('input.firstAppearance.kat:checked').val();
		

				// validation
		if (nameAnswer == "") {
			$('input.textName').focus();
			$("<p class='validation'> Please enter a value</p>").insertAfter($('input.textName'));
			return;
		};
		if (alignmentAnswer !== "villain" && alignmentAnswer !== "heroine") {

			$("<p class='validation validation2'> Please select a value</p>").insertBefore($('.titleAppear'));
			return;
		};
		if (appearanceAnswer !== Katana.appearanceText[0] &&  appearanceAnswer !== Katana.appearanceText[1] && appearanceAnswer !== Katana.appearanceText[2] && appearanceAnswer !== Katana.appearanceText[3] && appearanceAnswer !== Katana.appearanceText[4]) {

			$("<p class='validation validation2'> Please select a value</p>").appendTo($('.Qinside'));
			return;
		};
		
			// check answers
		if (nameAnswer == "katana") {
			rightK++;
			total++;

		}
		else {
			total++;
		};
		if (alignmentAnswer == "heroine") {
			rightK++;
			total++;

		}
		else {
			total++;
		};
		if (appearanceAnswer == "brave200") {
			rightK++;
			total++;

		}
		else {
			total++;
		};

		rightO = rightC + rightV + rightH + rightHQ + rightB + rightK;
		score = Math.round((rightO)/(total)*100);

		if (rightK <= 1) {
			$('.questions').hide().html("");
			$('.answers').show();
			$('.Score1').append(""+ score +"%");
			$('.One').show().append("<button class='backOne'> Try Again</button>");
			$('.backOne').click(function(){
				$('.answers').hide();
				$('.One').hide();
				$('.One').html("<h3 class='Oheader'>Sorry maybe you want to try this one again. Your current score is <span class='Score Score1'></span>.</h3>");
				$('.backOne').remove();
				$('.nextOne').remove();
				$('.questions').show();
				go(Katana);

			});
			$('.One').show().append("<button class='nextOne'> Finish</button>");
			$('.nextOne').click(function(){
				$('.answers').hide();
				$('.One').hide().html("<h3 class='Oheader'>Congratulations you got them all your current score is <span class='Score ScoreA'></span>.</h3>");
				$('.questions').show().append("<p class='finish'>Thank you for taking my quiz. You received a "+ score +"%. If you would like to test your knowledge again click the restart button in the upper right-hand side of the page.</p><button class='restart'>Restart</button>");

				

			});

		}
		else if (rightK == 2) {
			$('.questions').hide().html("");
			$('.answers').show();
			$('.Score2').append(""+ score +"%");
			$('.Two').show().append("<img class='leftA' src='images/KATAN9.jpg'><img class='rightA' src='images/Katana2.jpg'><p class='story'>Katana is a Japanese heroine named Tatsu Yamashiro. She was first seen in 1983 in the Brave and the Bold issue #200. In the Yamashiro family both of Tatsu’s brothers were infatuated with her. When they confessed their love Tatsu choose Maseo much to the chagrin of Takeo. Takeo refused to go to the wedding and joined the ancient group of evil assassins known as the Yakuza. Years later Takeo returned to kill his brother and take Tatsu as his prize. During the fight a fire broke out and while worried about his children Maseo is struck down by Takeo. Tatsu then uses the sword that killed her husband (later known as the ‘soul taker’) to disarm Takeo and escape with her life. Taste then begins training to be a samurai wielding the sword possessed by her husband’s soul.</p><button class='nextOne'> Finish</button>");
			$('.nextOne').click(function(){
				$('.answers').hide();
				$('.Two').hide().html("<h3 class='Theader'>Congratulations you got them all your current score is <span class='Score ScoreA'></span>.</h3>");
				$('.questions').show().append("<p class='finish'>Thank you for taking my quiz. You received a "+ score +"%. If you would like to test your knowledge again click the restart button in the upper right-hand side of the page.</p><button class='restart'>Restart</button>");
			});

		}
		else if (rightK >= 3) {
			$('.questions').hide().html("");
			$('.answers').show();
			$('.ScoreA').append(""+ score +"%");
			$('.All').show().append("<img class='leftA' src='images/KATAN9.jpg'><img class='rightA' src='images/Katana2.jpg'><p class='story'>Katana is a Japanese heroine named Tatsu Yamashiro. She was first seen in 1983 in the Brave and the Bold issue #200. In the Yamashiro family both of Tatsu’s brothers were infatuated with her. When they confessed their love Tatsu choose Maseo much to the chagrin of Takeo. Takeo refused to go to the wedding and joined the ancient group of evil assassins known as the Yakuza. Years later Takeo returned to kill his brother and take Tatsu as his prize. During the fight a fire broke out and while worried about his children Maseo is struck down by Takeo. Tatsu then uses the sword that killed her husband (later known as the ‘soul taker’) to disarm Takeo and escape with her life. Taste then begins training to be a samurai wielding the sword possessed by her husband’s soul. </p><button class='nextOne'> Finish</button>");
			$('.nextOne').click(function(){
				$('.answers').hide();
				$('.All').hide().html("<h3 class='Aheader'>Congratulations you got them all your current score is <span class='Score ScoreA'></span>.</h3>");
				$('.questions').show().append("<p class='finish'>Thank you for taking my quiz. You received a "+ score +"%. If you would like to test your knowledge again click the restart button in the upper right-hand side of the page.</p> <button class='restartend'>Restart</button>");

				$('.restartend').click(function(){
					$('.restart').click();
				});

			});

		};
	}; //end katana var
	
};

	

		// new quiz
	$('.restart').click(function(){
		rightC = 0;
		rightV = 0;
		rightH = 0;
		rightHQ = 0;
		rightB = 0;
		rightK = 0;
		rightO = rightC + rightV + rightH + rightHQ + rightB + rightK;
		total = 0;
		score = 0;
		$('.questions').hide().html("");
		$('.answers').hide();
		$('.One').hide().html("<h3 class='Oheader'>Sorry maybe you want to try this one again. Your current score is <span class='Score Score1'></span>.</h3>");
		$('.Two').hide().html("<h3 class='Theader'>Congratulations you got two out of the three correct your current score is <span class='Score Score2'></span>.</h3>");
		$('.All').hide().html("<h3 class='Aheader'>Congratulations you got them all your current score is <span class='Score ScoreA'></span>.</h3>");
		$('.howTo').hide();
		$('.start').show();
	});

});