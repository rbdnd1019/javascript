// hello world
var str = 'hello world';
// 문자열에서 제일 처음 글자 + 제일 마자막 글자 반환 //  h, d

// function myFunction(str) {
//     return str[0] +str[str.length -1];
// }
String.prototype.myFunction = function() {
        return this[0] + this[this.length -1];
    }

// var result = myFunction(str);
var result = str.myFunction();
console.log(result)
console.log("abcde".myFunction())

// 학생 : 학번, 이름, 국어, 영어, 수학, 총점, 평균

// 학생 10명을 저장 >> 70개 >> 프로포타입 사용하면 52개의 공간만 필요