var a = process.argv[2];
var b = process.argv[3];

if ( a < 1 || b > 10000) {
	console.log('Ваши вводные данные не удовлетворяют условиям: a >= 1 , b <= 10000');
	process.exit();
}

function gcd(a, b) {
	if (b == 0)
		return Math.abs(a);
	return gcd(b, a % b);
}

console.log(gcd(a,b));