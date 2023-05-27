const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(numbers) {
	returns = numbers.reduce(
    (total, value) => total + value, 0
  )
  return returns;
};

const multiply = function(numbers) {
  return numbers.reduce(
    (total, value) => total * value
  )
};

const power = function(a,b) {
	  let total = 1;
    for (let i = 1; i <= b; i++){
      total = total * a
    }
    return total;
};

const factorial = function(a) {
	total = 1
  for (let i = a; i > 0; i--){
    total = total * i
  }
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
