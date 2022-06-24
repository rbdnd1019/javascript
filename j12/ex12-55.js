var res = [1, 2, 3].map(function(item) {
    return item * 2;
});

console.log(res);

// var res = [1, 2, 3].filter(item => item %2); 람다식으로 같은 내용
res = [1, 2, 3].filter(function (item) {
    return item % 2; // boolean값으로 반환하는데 1,3 % 2 : 1이기 때문에 true라서 반환이고 2 % 2 : 0 false라 반환 ㄴㄴ 
});

console.log(res);

res = [1, 2, 3].reduce(function (acc, cur) {
    return acc + cur;
}, 0);

console.log(res)