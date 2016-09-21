module.exports = function () {

	function createInitialArray(number) {
		let returnArray = [];

		if (number < 1) {
			throw new Error('You must enter a number greater than 1');
		}
		for (var i = 1; i <= number; i++) {
			returnArray[i-1] = i;
		}
		
		return returnArray;
	}

	return {
		sumOfSquareRoots: function(number) {
			let theSum = createInitialArray(number).map((element) => {
				return Math.round(Math.sqrt(element)*100)/100;
			}).reduce((prev,curr) => {
				return prev + curr;
			});
			return parseFloat(theSum);
		}
	}
}

