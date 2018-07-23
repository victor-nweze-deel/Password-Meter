const upperCaseWord = /\w*[A-Z]+\w*/;
const lowerCaseWord = /\w*[a-z]+\w*/;
const numberInWord = /\w*[0-9]+\w*/;
const wildCard = /\w*\W+\w*/;

const passText = document.getElementById('inputText');
const passButton = document.getElementById('passStrength');
const passPanel = document.getElementById('result-panel');
const passInfo = document.getElementById('passInfo');
var passwordStrength = 0;
var password;

passButton.addEventListener('click', checkPassStrength, false);

function checkPassStrength(){
	password = passText.value;
	if(password.length < 6){
		passPanel.setAttribute('class', 'veryPoorPass');
		passPanel.innerHTML = 'Minimum password length is 6';
	}
	else if(password.length > 12){
		passPanel.setAttribute('class', 'veryPoorPass');
		passPanel.innerHTML = 'Maximum password length is 12';
	}
	else{
		checkPassword(password);
		passInfo.style.display = 'block';
		if(passwordStrength == 100)
			passPanel.setAttribute('class', 'veryStrongPass');
		else if(passwordStrength >= 75)
			passPanel.setAttribute('class', 'strongPass');
		else if(passwordStrength >= 50)
			passPanel.setAttribute('class', 'poorPass');
		else
			passPanel.setAttribute('class', 'veryPoorPass');
		passPanel.innerHTML = `${passwordStrength}%`;
		passwordStrength = 0;
	}
}

function checkPassword(pass){
	checkForLower(pass);
	checkForWildCard(pass);
	checkForNumber(pass);
	checkForUpper(pass);
}
function checkForNumber(word){
	if(numberInWord.test(word))
		passwordStrength += 25;
}
function checkForUpper(word){
	if(upperCaseWord.test(word))
		passwordStrength += 25;
}
function checkForLower(word){
	if(lowerCaseWord.test(word))
		passwordStrength += 25;
}
function checkForWildCard(word){
	if(wildCard.test(word))
		passwordStrength += 25;
}