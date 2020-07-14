var englishTextbox = document.getElementById("englishTextbox");

var alienTextbox = document.getElementById("alienTextbox");

englishTextbox.onkeyup = function(){
//function engToAl() {		//Called when the button is clicked
	var englishString = englishTextbox.value;
	var wordLength = 0 //Initializing before the loop
	var alienString = "" //Initializing before the loop
	for(i = 0; i <= englishString.length - 1; i++) //We want to separate the different words, translate them, then restore them with all the characters around
	{
		if (englishString[i].match(/[a-z]/i)) //Is it a letter?
		{
			wordLength++ //If it is, then the word is a bit longer
		}
		else //Otherwise, we reached the end of the word
		{
			if (wordLength == 0) //This is to correctly restore subsequent non-letter characters
			{
				alienString = alienString + englishString[i]
			}
			else
			{
				englishWord = englishString.substring(i - wordLength, i) //It's not a letter, the word ended. Let's translate it
				alienWord = translateEnglishToAlien(englishWord)
				if (alienWord == undefined)
				{
					alienString = alienString + englishWord //If it's not a translatable word, we'll keep the original, like Google translate does
				}
				else
				{
					alienString = alienString + alienWord
				}
				alienString = alienString + englishString[i] //Let's not forget the non-letter character that made us stop
				wordLength = 0 //The word ended, let's start counting again
			}
		}
		if (i == englishString.length - 1) //Verification for the last word, let's not forget to process it
		{
			if (englishString[i].match(/[a-z]/i))
			{
				englishWord = englishString.substring(i - wordLength + 1, i + 1)
				console.log(englishWord)
				translateEnglishToAlien(englishWord)
				alienWord = translateEnglishToAlien(englishWord)
				if (alienWord == undefined)
				{
					alienString = alienString + englishWord //If it's not a translatable word, we'll keep the original, like Google translate does
				}
				else
				{
					alienString = alienString + alienWord
				}
			}
		}
	}
	alienTextbox.value = alienString
};

function translateEnglishToAlien(word)
{
	switch (document.getElementById("alienLanguage").value) //Which language do you want to translate it to?
	{
		case "Korvax":
			return(engToKorvax[englishWord]);
			break;
		case "Gek":
			return(engToGek[englishWord]);
			break;
		case "Vy'keen":
			return(engToVykeen[englishWord]);
			break;
		case "Atlas":
			return(engToAtlas[englishWord]);
			break;
		default:
			console.error("Hey, you changed something with the alien languages, it doesn't work anymore");
			return("???");
	}
}

alienTextbox.onkeyup = function(){
	//function engToAl() {		//Called when the button is clicked
		var alienString = alienTextbox.value;
		var wordLength = 0 //Initializing before the loop
		var englishString = "" //Initializing before the loop
		for(i = 0; i <= alienString.length - 1; i++) //We want to separate the different words, translate them, then restore them with all the characters around
		{
			if (alienString[i].match(/[a-z]/i)) //Is it a letter?
			{
				wordLength++ //If it is, then the word is a bit longer
			}
			else //Otherwise, we reached the end of the word
			{
				if (wordLength == 0) //This is to correctly restore subsequent non-letter characters
				{
					englishString = englishString + alienString[i]
				}
				else
				{
					alienWord = alienString.substring(i - wordLength, i) //It's not a letter, the word ended. Let's translate it
					englishWord = translateAlienToEnglish(alienWord)
					if (englishWord == undefined)
					{
						englishString = englishString + alienWord //If it's not a translatable word, we'll keep the original, like Google translate does
					}
					else
					{
						englishString = englishString + englishWord
					}
					englishString = englishString + alienhString[i] //Let's not forget the non-letter character that made us stop
					wordLength = 0 //The word ended, let's start counting again
				}
			}
			if (i == alienString.length - 1) //Verification for the last word, let's not forget to process it
			{
				if (alienString[i].match(/[a-z]/i))
				{
					alienWord = alienString.substring(i - wordLength + 1, i + 1)
					console.log(alienWord)
					translateAlienToEnglish(alienWord)
					englishWord = translateAlienToEnglish(alienWord)
					if (englishWord == undefined)
					{
						englishString = englishString + alienWord //If it's not a translatable word, we'll keep the original, like Google translate does
					}
					else
					{
						englishString = englishString + englishWord
					}
				}
			}
		}
		englishTextbox.value = englishString
	};

function translateAlienToEnglish(word)
{
	switch (document.getElementById("alienLanguage").value) //Which language do you want to translate it from?
	{
		case "Korvax":
			return(korvaxToEng[englishWord]);
			break;
		case "Gek":
			return(gekToEng[englishWord]);
			break;
		case "Vy'keen":
			return(vykeenToEng[englishWord]);
			break;
		case "Atlas":
			return(atlasToEng[englishWord]);
			break;
		default:
			console.error("Hey, you changed something with the alien languages, it doesn't work anymore");
			return("???");
	}
}