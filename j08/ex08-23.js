var string = "Hello World.";
var search = "l";
var count = 0;

for(var i = 0; i < string.length; i++){
    if(string[i] !== search) continue;
    count++;
}

console.log(count);

const regExp = new RegExp(search, 'g');
console.log(string.match(regExp).length);

// console.log(string.match(/'l'/g).length)
console.log(string.match(/[a-z]/g).length)