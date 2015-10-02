function order(words){
  var ordered = [];
  var arr = words.split(' ');
  var n = 1;

  while (n <= arr.length) {
	for (var i = 0; i < arr.length; i++) {
	  var stringArr = arr[i].split('');
	  stringArr.forEach(function(currentValue, index) {
		if (parseInt(currentValue) === n) {
		  ordered.push(arr[i]);
		  n++;
		}
	  });
	}
  }

  return ordered.join(' ');
}

console.log(order("is2 Thi1s T4est 3a")); // "Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2")); //"Fo1r the2 g3ood 4of th5e pe6ople"