var arr1 = [1, 2, 3];
var arr2 = new Array(1, 2, 3);

console.log(arr1);
console.log(arr2);

var arr3 = new Array("가");
console.log(arr3);
var arr4 = new Array(10);
console.log(arr4);


// date : 객체이다(변수이고 타입은 참조형), new Date()가 인스턴스
var date = new Date();
console.log(date)
console.log(date.toString())
console.log(date.toLocaleString())
console.log(`${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} `)

// 다양한 방식으로 호출 가능
function foo() {
    console.log(this)
}
foo();// 일반적인 함수로서 호출

const obj = {foo} // ES6 프로퍼티 축약 표현

// 메서드 호출
obj.foo()

// 생성자 함수로서 호출
const inst = new foo();

