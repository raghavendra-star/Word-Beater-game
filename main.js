window.addEventListener('load',init);


var time=5;
var score=0;
var isplaying;


const wordInput=document.querySelector('#word-input');
const currentWord=document.querySelector('#current-word');
const scoreDisplay=document.querySelector('#score');
const timeDisplay=document.querySelector('#time');
const message=document.querySelector('#message');
const seconds=document.querySelector('#seconds');

const words= [
'dhoni',
'cristiano ronaldo' ,
'rock' ,
'paul walker',
'raghavendra',
'john cena','roman reigns',
'manish pandey',
'paulo dybala',
'vin diesel',
'dom toretto',
'undertaker',
'camilla cabello'];

//innitialize game
function init()
{
	//load word from array
	showWord(words);

	 //start matching on word input
	 wordInput.addEventListener('input',startMatch);

	//call countdown every second
	setInterval(countdown,1000);
	//check game status
	setInterval(checkStatus,50);
}

//start match
function startMatch()
{
if (matchWords()) {
	isplaying=true;
	time=6;
	showWord(words);
	wordInput.value='';
	score++;
}
if (score===-1) 
{
	scoreDisplay.innerHTML=0;
}
else
{
scoreDisplay.innerHTML=score;
}
}
//match currentword to wordInput
function matchWords(){
	if (wordInput.value===currentWord.innerHTML) 
	{
		message.innerHTML='Correct!!!';
		return true;
	}else{
		message.innerHTML='';
		return false;
	}
} 

//pick and show random word
function showWord(words)
{
	//generate random array index
	const randIndex=Math.floor(Math.random() * words.length);
	//output random word
	currentWord.innerHTML=words[randIndex];
}



//countdown timer
function countdown(){
	if (time>0) 
	{
		time--;
	}
	else if (time===0) 
	{
		isplaying=false;
	}
	//show time
	timeDisplay.innerHTML=time;
}

//check game status
function checkStatus()
{
	if (!isplaying && time===0) 
	{
		message.innerHTML='Game Over...';
		score=-1;
	}
}

