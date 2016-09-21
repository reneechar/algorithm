const Chai = require('chai');
const expect = Chai.expect;
const algorithm = require('../algorithm');
let myAlgorithm;

describe('Algorithm', () => {
	beforeEach(() => {
		myAlgorithm = algorithm();
	});

	it('should exist', () => {
		expect(algorithm).to.exist;
	});

	it('should be a function', () => {
		expect(algorithm).to.be.a('function');
	});

	it('should return an object', () => {
		expect(myAlgorithm).to.not.be.undefined;
		expect(myAlgorithm).to.be.an('object');
	});

	describe('sumOfSquareRoots()', () => {
		beforeEach(() => {
			myAlgorithm = algorithm();
		});

		it('should exist', () => {
			expect(myAlgorithm.sumOfSquareRoots).to.exist;
		});

		it('should be a function', () => {
			expect(myAlgorithm.sumOfSquareRoots).to.be.a('function');
		});

		it('should return the sum of the square roots up until the number passed in to the nearest hundreth digit', () => {
			expect(myAlgorithm.sumOfSquareRoots(2)).to.equal(2.41);
			expect(myAlgorithm.sumOfSquareRoots(5)).to.equal(8.38);
		});
		
	});
});