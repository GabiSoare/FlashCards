//www.embeddedsoft.ro


var question = "Which of the following pictures below starts with the letter ";
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var alphabet_rand = [];



var q = document.getElementById("question");
var firstImg = document.getElementById("firstImg");
var secondImg = document.getElementById("secondImg");
var thirdImg = document.getElementById("thirdImg");
var result = document.getElementById("result");
var img_result= document.getElementById("img_result");

shuffle(alphabet);
alphabet_rand= alphabet.slice(0);
var index = 1;
var alphabet1 = [];
var answers = [];



	
setData(10);

function setData(choice){
	if(10 == choice){
		incIndex();
		return false;
	}
	if(alphabet_rand[index-1] == answers[choice]){
		result.style.display = "block";
		img_result.src = "images/correct.png"
		setTimeout(incIndex,2000);
	}else{
		result.style.display = "block";
		img_result.src = "images/wrong.png"
		setTimeout(function resetwrong(){result.style.display = "none";},2000);
	}
}

function incIndex(){
	result.style.display = "none";

	if(index!=26){

		q.innerHTML = question +"<strong>"+ alphabet[index-1]+"</strong> " + "?<br>created by www.embeddedsoft.ro"; 

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