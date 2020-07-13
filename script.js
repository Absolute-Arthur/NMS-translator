var englishTextbox = document.getElementById("englishTextbox");

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
	document.getElementById("alienText").value = alienString
};

function translateEnglishToAlien(word)
{
	switch (document.getElementById("alienLanguage").value) //Which language do you want to translate it to?
	{
		case "Korvax":
			return(korvax[englishWord]);
			break;
		case "Gek":
			return(gek[englishWord]);
			break;
		case "Vy'keen":
			return(vykeen[englishWord]);
			break;
		case "Atlas":
			return(atlas[englishWord]);
			break;
		default:
			console.error("Hey, you changed something with the alien languages, it doesn't work anymore");
			return("???");
	}
}