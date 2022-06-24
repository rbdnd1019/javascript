// or : 둘 중 하나라도 true이면 결과는 true
// and : 둘 중 하나라도 false이면 결과는 false

// 논리합(||) 연산자
console.log('Cat' || 'Dog')
console.log(false || 'Dog')
console.log('Cat' || false)

// 논리곱(&&) 연산자
console.log('Cat' && 'Dog')
console.log(false && 'Dog')
console.log('Cat' && false)


// int run(int x , int y) {
//     return x + y;
// }

function run(x,y){
    console.log(`x : ${x}, y : ${y}`)
    return x + y;
}
var result = run(10,20);
console.log(result)

console.log()

// 함수타입의 리턴
function outer() {
    return function() {
        return 10;
    }
}
console.log(outer()())
console.log()

// 함수타입의 파라미터
function f(t){
    t();
}
function f2(){
    console.log("abcd");
}
f(f2)

