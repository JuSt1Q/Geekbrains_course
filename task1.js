
var x = process.argv[2];
var scale1 = process.argv[3];
var scale2 = process.argv[4];

var abc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function ToNum(a,b) {
	var n = 0;
	var mas = abc.slice(0,b);
	a = String(a);
	for(var i = 0;i < a.length;i++){
		n = n +(mas.indexOf(a.substr(a.length-i-1,1))*Math.pow(b,i));
	}
	return n;
}


function StrReverse(s) {
    return s.split("").reverse().join("");
}

function ToStr(a,cc) {
	var s = "";
	var mas = abc.slice(0,cc);
	while(a > 0) {
		s = String(s) + mas[a%cc];
		a = Math.floor(a/cc);
	}
	return StrReverse(s);
}

if (scale1 != 10) {
	x = ToNum(x, scale1);
} else {
	x = ToStr(x, scale2);
}

console.log(x);