// var var1 = 1;
// if(0) {
//     var var2 = 2;
//     if(true) {
//         var var3 = 3;
//     }
// }

// function foo() {
//     var var4 = 4;
    
//     function bar() {
//         var var5;
//     }
// }

// console.log(var1);
// console.log(var2);
// console.log(var3);
// console.log(var4);
// console.log(var5);



var x = 'global';

function foo() {
    console.log(x) 
    var x = 'local'
    console.log(x)
}
foo();

console.log(x);

