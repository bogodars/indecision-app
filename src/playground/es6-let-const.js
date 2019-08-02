var nameVar = 'Misha';
nameVar = 'Miller';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet );

const nameConst = "Frank";
console.log('nameConst', nameConst);

function getPetName() {
	const petName = "Marvel";
	return petName;
}

const petName = getPetName();
console.log(petName);

const multiplier = {
	numbers:  [2,4,6],
	multiplyBy: 3,
	multiply() {
		return this.numbers.map((number => number * this.multiplyBy));
	}
}

console.log(multiplier.multiply());