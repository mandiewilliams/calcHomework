console.log("hello");

function squareNumber (num) {
	var squaredNumber = num * num;
	console.log("The result of squaring the number " + num + " is " + squaredNumber + ".");
}
squareNumber (3);

function halfNumber (num) {
	var splitNumber = num/2;
	console.log("Half of " + num + " is " + splitNumber + " .");
}

halfNumber (5);

function percentOf (num1, num2) {
	var percentNumbers = (num1/num2) * 100;
	console.log(num1 + " is " + percentNumbers + "% of " + num2);
}
percentOf (3, 9);

function areaOfCircle (num) {
	var area = 3.14 * (num * 2);
	console.log("The circle's diameter is " + area + " if the radius is " + num + " .")
}
areaOfCircle (3);

function functionTwo (num) {
	var half = halfNumber(num);
	var squared = squareNumber(half);
	var area = areaOfCircle(squared);
	var result = percentOf(squared, area);
}

functionTwo (7);