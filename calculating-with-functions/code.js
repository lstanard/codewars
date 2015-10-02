function determineReturn(num, arguments) {
	var args = Array.prototype.slice.call(arguments);
	if (typeof args[0] === 'function')
		return args[0](num);
	else
		return num;
}

function zero() { return determineReturn(0, arguments); }
function one() { return determineReturn(1, arguments); }
function two() { return determineReturn(2, arguments); }
function three() { return determineReturn(3, arguments); }
function four() { return determineReturn(4, arguments); }
function five() { return determineReturn(5, arguments); }
function six() { return determineReturn(6, arguments); }
function seven() { return determineReturn(7, arguments); }
function eight() { return determineReturn(8, arguments); }
function nine() { return determineReturn(9, arguments); }

function plus(val) {
	return function(val2) {
		return val2 + val;
	};
}
function minus(val) {
	return function(val2) {
		return val2 - val;
	};
}
function times(val) {
	return function(val2) {
		return val2 * val;
	};
}
function dividedBy(val) {
	return function(val2) {
		return val2 / val;
	};
}

console.log(seven(times(five())));  // 35
console.log(four(plus(nine())));    // 13
console.log(eight(minus(three()))); // 5
console.log(six(dividedBy(two()))); // 3