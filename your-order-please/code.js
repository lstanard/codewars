// Neal's solution
function order3(words){
  var arr = words.split(' ');
  var compare = function(a, b) {
      if (Number(a.match(/\d+/)[0]) < Number(b.match(/\d+/)[0])) {
        return -1;
        }
      if (Number(a.match(/\d+/)[0]) > Number(b.match(/\d+/)[0])) {
          return 1;
      }

      // a must be equal to b
      return 0;
  }
  arr.sort(compare);
  return arr;
}


// SO user solution
// http://stackoverflow.com/questions/32910167/javascript-while-loop-efficiency-performance
function order2(words){
  return words
    .split(' ')
    .sort(function( wordA, wordB ) {
      var numA = +(wordA.match(/\d+/g)[0]);
      var numB = +(wordB.match(/\d+/g)[0]);
      return numA - numB;
    })
    .join(' ');
}


// My first attempt - not good!
function order1(words){
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


// My revised solution
function order(words) {
	var arr = words.split(' ');
	arr.sort(function(a, b) {
		if (Number(a.match(/\d+/)[0]) < Number(b.match(/\d+/)[0]))
			return -1;
		else if (Number(a.match(/\d+/)[0]) > Number(b.match(/\d+/)[0]))
			return 1
		else
			return 0
	});
	return arr.join(' ');
}

console.log(order("is2 Thi1s T4est 3a")); // "Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2")); //"Fo1r the2 g3ood 4of th5e pe6ople"