//www.embeddedsoft.ro


var question = "Which of the following pictures below starts with the letter ";
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var alphabet_rand = [];



var q = document.getElementById("question");
var firstImg = document.getElementById("firstImg");
var secondImg = document.getElementById("secondImg");
var thirdImg = document.getElementById("thirdImg");
var finished = document.getElementById("finished");
var game = document.getElementById("game");

var r1= document.getElementById("r1");
var r2= document.getElementById("r2");
var r3= document.getElementById("r3");



shuffle(alphabet);
alphabet_rand= alphabet.slice(0);
var index = 1;
var alphabet1 = [];
var answers = [];

function playAudio(src) {

    // HTML5 Audio
    if (typeof Audio != "undefined") { 
        new Audio(src).play() ;

    // Phonegap media
    } else if (typeof device != "undefined") {

        // Android needs the search path explicitly specified
        if (device.platform == 'Android') {
            src = '/android_asset/www/' + src;
        }

        var mediaRes = new Media(src,
            function onSuccess() {
                // release the media resource once finished playing
                mediaRes.release();
            },
            function onError(e){
                console.log("error playing sound: " + JSON.stringify(e));
            });
        mediaRes.play();

    } else {
        console.log("no sound API to play: " + src);
    }
}
	
setData(10);

function setData(choice){
	if(10 == choice){
		incIndex();
		return false;
	}
	if(alphabet_rand[index-1] == answers[choice]){
		playAudio("sounds/correct.mp3");
		switch(choice){
			case 0:
				r1.style.display = "inline";
				r1.src = "images/correct.png";
				break;
			case 1:
				r2.style.display = "inline";
				r2.src = "images/correct.png";
				break;
			case 2:
				r3.style.display = "inline";
				r3.src = "images/correct.png";
				break;								
		}
		setTimeout(incIndex,1500);
	}else{
		playAudio("sounds/wrong.mp3");
		switch(choice){
			case 0:
				r1.style.display = "inline";
				r1.src = "images/wrong.png";
				break;
			case 1:
				r2.style.display = "inline";
				r2.src = "images/wrong.png";
				break;
			case 2:
				r3.style.display = "inline";
				r3.src = "images/wrong.png";
				break;								
		}
		
		setTimeout(function resetwrong(){	r1.style.display = "none";	r2.style.display = "none";	r3.style.display = "none";},1500);
	}
}

function incIndex(){
	result.style.display = "none";
	r1.style.display = "none";
	r2.style.display = "none";
	r3.style.display = "none";
	window.location.href = "#";
	if(index!=27){

		q.innerHTML = question +"<strong>"+ alphabet[index-1]+"</strong> " + "?"; 

		for(var i = 1; i < alphabet_rand.length; i++){
			alphabet1[i-1] = alphabet_rand[i];	
		}
		shuffle(alphabet1);
		
		var tmp = alphabet_rand[index];
		alphabet_rand[index] = alphabet_rand[0];
		alphabet_rand[0] = tmp;			
		
		answers = [alphabet[index-1],alphabet1[0],alphabet1[1]];
		shuffle(answers);
		
		firstImg.src =  "images/"+answers[0].toUpperCase()+answers[0].toLowerCase()+".png";
		secondImg.src = "images/"+answers[1].toUpperCase()+answers[1].toLowerCase()+".png";
		thirdImg.src =  "images/"+answers[2].toUpperCase()+answers[2].toLowerCase()+".png";	
		
		index++;
	}else{
		game.style.display = "none";
		finished.innerHTML = "Well Done!";
	}	
}

function shuffle(arrayChar) {
  var currentIndex = arrayChar.length
    , temporaryValue
    , randomIndex;
  // While there remain elements to shuffle...
  while (0 != currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = arrayChar[currentIndex];
    arrayChar[currentIndex] = arrayChar[randomIndex];
    arrayChar[randomIndex] = temporaryValue;
    
  }

}