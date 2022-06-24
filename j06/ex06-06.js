var binary = 0b01000001;
var octal = 0o101;
var hex = 0x41;

console.log(binary);
console.log(octal);
console.log(hex);
console.log(binary == octal)
console.log(hex == octal)

// 정수, 실수 구분 없음
console.log(1 == 1.0);  
console.log(3 / 2);

console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)
console.log(NaN)

console.log(3/0);
console.log(-3/0);
console.log(0/0);
console.log(1 * "abcd")
console.log("==================");

var temp = `temp literal
asdfasdf`;
console.log(temp)

var str = 'abdc \nasd';
console.log(str)
