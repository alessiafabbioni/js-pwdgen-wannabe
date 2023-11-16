// Chiedi all'utente il suo nome

var userName = prompt("Qual è il tuo nome?");
console.log("Il nome dell'utente è: " + userName);

// Chiedi all'utente il suo cognome

var userLastName = prompt("Qual è il tuo cognome?");
console.log("Il cognome dell'utente è: " + userLastName);


// Chiedi all'utente il suo colore preferito

var favColor = prompt("Qual è il tuo colore preferito?");
console.log("Il colore preferito dell'utente è: " + favColor);


// Mostrarlo in pagina
var greetingElement = document.getElementById("greeting");
greetingElement.textContent = "Welcome " + userName + userLastName + favColor + "23";