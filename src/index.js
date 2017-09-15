module.exports = function zeros(expression) {
	let factorialArray = expression.split('*');
	let zeroCount = 0;

	factorialArray.forEach(function(item) {
		let itemNum = parseInt(item);
		let step;
		(item.slice(-2) === '!!') ? step = 1 : step = 2;
		
		for (let i=itemNum; i>=1; i-step) {
			if (i%25 === 0) zeroCount++;
			if (i%5 === 0) zeroCount++;
		}//trouble is in this circle 
	});

	return zeroCount;
}
