function numberOnClick(number_id){
		//alert(number_id);
		let current_string = document.querySelector("#calc-result").textContent;
		if(current_string==="0"){
			document.querySelector("#calc-result").textContent = number_id;
		} else {
			document.querySelector("#calc-result").textContent = current_string + number_id;
		}
}

function parser(str){
	let numbers = str.split(/[\+\-\*\/]/)
	let operators = str.split(/[0-9]+/)
	operators.pop()
	operators.shift()
	
	console.log(numbers);
	console.log(operators);
	let num_i = 0;
	let op_i = 0;
	let sum = 0;
	let first = true;
	while(num_i < numbers.length && op_i < operators.length){
		console.log(sum);
		if(first){
			sum = parseInt(numbers[0], 10);
			first = false;
			num_i++;
		} else {
			// op num
			num_1 = sum;
			num_2 = parseInt(numbers[num_i], 10);
			if(operators[op_i] === "+"){
					sum = add(num_1, num_2);
			} else if(operators[op_i] === "-"){
				sum = subtract(num_1, num_2);
			} else if(operators[op_i] === "*"){
				sum = multiply(num_1, num_2);
			} else if(operators[op_i] === "/"){
				sum =divide(num_1, num_2);
			} else {
				alert("Error with logic");
			}
			num_i++;
			op_i++;
		}
	}
	if(num_i === numbers.length && op_i != operators.length) {
		alert("Invalid Expression!");
	}
	if(operators.length === 0){ // only num
		sum += parseInt(numbers[0],10);
	}
	return sum;
}
		

function enterOnClick(){
	// parsing
	document.querySelector("#calc-result").textContent = parser(document.querySelector("#calc-result").textContent);
}
function opOnClick(operator_id){
		//alert(operator_id);
		document.querySelector("#calc-result").textContent = document.querySelector("#calc-result").textContent + operator_id;
}
function clearOnClick(){
		document.querySelector("#calc-result").textContent = "0";
}

function add(num1, num2){
	return num1 + num2;
}
function subtract(num1, num2){
	return num1 - num2;
}
function multiply(num1, num2){
	return num1 * num2;
}
function divide(num1, num2){
	return num1 / num2;
}