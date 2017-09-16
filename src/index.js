module.exports = function zeros(expression) {
	let factorialArray = expression.split('*');	
	let counterFiveDivided = 0;
	let counterEven = 0;

	factorialArray.forEach(function(item) {
		let itemNum = parseInt(item);
		let step;		
		(item.slice(-2) === '!!') ? step = 2 : step = 1;

		while (itemNum >= 1) {			
			if (itemNum%25 === 0) counterFiveDivided++;
			if (itemNum%5 === 0) counterFiveDivided++;
			if (itemNum%2 === 0) counterEven++;
			itemNum -= step
		}	
	});

	return Math.min(counterFiveDivided, counterEven);
}

// write if all add zeros count = 0
