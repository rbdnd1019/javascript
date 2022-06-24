// console.log(add1(3, 5))
// console.log(add2(4, 1)) // add2 undefined

function add1(x, y) {
    return x + y;
}

var add2 = function(x, y) {
    return x + y;
}

console.log(add1(3, 5))
console.log(add2(4, 1)) // add2 undefined

// var add = (x, y) => x + y;


var result = (function() {
    return "hello world";
;})();
console.log(result)

// (function test() {
//     console.log("test");
// }());
// test()

function Student(no, name) {
    var n = no;
    var na = name;

    this.getNo = function() {
        return no;
    }

    this.setNo = function(no) {
        n = no;
    }
}

var student = new Student(10, "가가가");
console.log(student.getNo())
