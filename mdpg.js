function convert (a) {
	switch (a) {
		case 0:
			return 3;
			break;
		case 1:
			return 4;
			break;
		case 2:
			return 6;
			break;
		case 3:
			return 7;
			break;
		case 4:
			return 8;
			break;
		default:
			return 1;
	}
}

function mul () {
	// generate two random numbers
	var int1 = Math.floor(Math.random() * 5);
	var int2 = Math.floor(Math.random() * 5);
	
	// convert to numbers that we want
	int1 = convert(int1);
	int2 = convert(int2);
	
	// give problem to user
	alert("What is " + int1 + " multiplied by " + int2 + "?\nClick OK to see the solution.");
	
	// put solution on page
	document.getElementById("solution").innerHTML = "The solution is: " + int1 * int2 + ".";
}

function div () {
	var int1 = Math.floor(Math.random() * 5);
	var int2 = Math.floor(Math.random() * 5);
	
	// convert to numbers that we want
	int1 = convert(int1);
	int2 = convert(int2);
	
	// give problem to user
	alert("What is " + (int1 * int2) + " divided by " + int1 + "?\nClick OK to see the solution.");
	
	// put solution on page
	document.getElementById("solution").innerHTML = "The solution is: " + int2 + ".";
}
