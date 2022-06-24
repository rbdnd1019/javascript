// js는 완벽한 객체지향 언어
// 모든 데이터를 객체로 다룬다

var userId = 1;  // 1이라는 값이 저정된 주소를 userId라는 이름으로 저장
var userName = 'Lee';

var user = {id: 1, name: 'Lee'}; // 객체

var users = [  // 객체(배열)
    {id: 1, name : 'Lee'},  // 0 index
    {id: 2, name : 'Kim'}  // 1 index
]

console.log(userId);
console.log(userName);
console.log(user);
console.log(user.id);
console.log(user.name);

console.log(users);
console.log(users[1].name);
console.log(users[0]);

// 식별자 : 변수명 , 메서드명, 클래스명, 패키지명

// 함수 선언
var f = function(x) {
    console.log("hello world :: " + x);
}

f("철수");


function f1 () {
    function f2() {
        function f3() {

        }
    }
}

function test() {
    local = "local";
}
test();
console.log(local);