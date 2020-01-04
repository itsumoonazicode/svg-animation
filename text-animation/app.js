const logo = document.querySelectorAll("#logo > path");

for(let i = 0; logo.length > i; i++) {
	console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
}