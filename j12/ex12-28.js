function multiply(x, y) {
    return x * y;
    console.log('여기까지 실행?') // return때문에 여기까지 오지를 못함
}
console.log(multiply(3,5));
console.log("==============")

function change(d) {
    d.x = 1000;
    console.log(d.x, 2);
}
var d = {x : 10}; 
console.log(d.x, 1);
change(d);
console.log(d.x, 3);

console.log("==============")


function change2(d) {
    d.x = 1000;
    console.log(d, 2);
}
var d = 10; 
console.log(d, 1);
change2(d);
console.log(d, 3);

$(function() {
    // 이름이 $ 함수를 호출 
});

$();