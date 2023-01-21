const input_1 = document.getElementById("inputNumber1");
const input_2 = document.getElementById("inputNumber2");
const input_3 = document.getElementById("inputNumber3");

document.addEventListener("DOMContentLoaded", function (event) {
	origArray = [0, 0, 0];

	input_1.addEventListener("input", (event) => {
		origArray[0] = parseInt(input_1.value);
	});
	input_2.addEventListener("input", (event) => {
		origArray[1] = parseInt(input_2.value);
	});
	input_3.addEventListener("input", (event) => {
		origArray[2] = parseInt(input_3.value);
	});

	document.getElementById("cube_B").addEventListener("click", function () {
		if (numbersCheck() === false) {
			console.log(origArray);
			const mapResult = origArray.map((x) => x * x * x);

			input_1.value = mapResult[0];
			input_2.value = mapResult[1];
			input_3.value = mapResult[2];
		}
	});

	document.getElementById("fourth_B").addEventListener("click", ToFourth);
});

function ToSquare() {
	if (numbersCheck() === false) {
		console.log(origArray);
		const mapResult = origArray.map((x) => x * x);

		input_1.value = mapResult[0];
		input_2.value = mapResult[1];
		input_3.value = mapResult[2];
	}
}

function ToFourth() {
	if (numbersCheck() === false) {
		console.log(origArray);
		const mapResult = origArray.map((x) => x * x * x * x);

		input_1.value = mapResult[0];
		input_2.value = mapResult[1];
		input_3.value = mapResult[2];
	}
}

function numbersCheck() {
	let check = false;

	if (origArray[0] === 0) {
		input_1.style.background = "#8f2828";
		check = true;
	}
	if (origArray[1] === 0) {
		input_2.style.background = "#8f2828";
		check = true;
	}
	if (origArray[2] === 0) {
		input_3.style.background = "#8f2828";
		check = true;
	} else {
		input_1.style.background = "#565656";
		input_2.style.background = "#565656";
		input_3.style.background = "#565656";
		check = false;
	}
	return check;
}
