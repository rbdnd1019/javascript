var first = "규웅";
var last = "황";

console.log("제 이름은 " + last + " " + first +"입니다");

console.log("제 이름은 ${last} ${first} 입니다");
console.log(`제 이름은 ${last} ${first} 입니다`);


// true, false
// 0 > false

for(var i = 5; i--;){
    console.log(i)
}

console.log("=======================");
console.log(10, !!10);
console.log(0, !!0);
console.log("abcd", !!"abcd");
console.log("", !!"");
console.log(null, !!null);
console.log(undefined, !!undefined);
console.log({}, !!{});
console.log([], !![]);
console.log(function() {}, !!function() {});

console.log("=======================");
var num1 = 10;  // typeof >> number
var num2 = new Number(10); // typeof >> object

console.log(num1 == num2);
console.log(num1 === num2);

// 형변환
//자바에서는 
// int a = 10;
// short s = (short)a;

// 문자열 >> 숫자
var str = "1234";
var num = Number(str);

console.log(num, typeof num)
console.log(bool, typeof bool)

//숫자 >> 문자열
var str2 = String(num);

// 숫자 >> 불린
// 문자열 >> 불린
var bool = Boolean(str);

// 불린 >> 숫자  :: /1

//  불린 >> 문자열 :: +""

console.log(true / 1);
console.log(false / 1);

console.log(undefined / 1);
console.log(null / 1);
console.log({} / 1);
console.log(function() {} / 1);

// 연산자 : 피연산자의 타입, 연산결과의 타입 중요


console.log("abcd" && 1);
console.log(1 && "abcd");
console.log(1 < "abcd");
console.log(1 > "abcd");


