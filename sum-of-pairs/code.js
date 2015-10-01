var sum_pairs = function(ints, s){

	var set_length = ints.length;

	if (s === 0) {
		return [0,0];
	}
	else if (set_length > 1) {
		for (var i = 0; i < set_length; i++) {
			if (ints[i] + ints[i+1] === s)
				return [ints[i], ints[i+1]];
			else if (ints[0] + ints[i+1] === s)
				return [ints[0], ints[i+1]];
		}
		return sum_pairs(ints.slice(1, set_length), s);
	}
}

l1= [1, 4, 8, 7, 3, 15];
l2= [1, -2, 3, 0, -6, 1];
l3= [20, -13, 40];
l4= [1, 2, 3, 4, 1, 0];
l5= [10, 5, 2, 3, 7, 5];
l6= [4, -2, 3, 3, 4];
l7= [0, 2, 0];
l8= [5, 9, 13, -3];

console.log(sum_pairs(l1, 8));
console.log(sum_pairs(l2, -6));
console.log(sum_pairs(l3, -7));
console.log(sum_pairs(l4, 2));
console.log(sum_pairs(l5, 10));
console.log(sum_pairs(l6, 8));
console.log(sum_pairs(l7, 0));
console.log(sum_pairs(l8, 10));