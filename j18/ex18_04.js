function max() {
    var ret = arguments[0];
    for(var i = 1; i < arguments.length; i++) {
        if(ret < arguments[i]) {
            ret = arguments[i]
        }
    }
    return ret;

    // for(var i in arguments) {
    //     if(ret < arguments[i]) {
    //         ret = arguments[i]
    //     }
    // }
    // return ret
}
function min() {
    var ret2 = arguments[0];
    for(var j = 1; j < arguments.length; j++) {
        if(ret2 > arguments[j]) {
            ret2 = arguments[j]
        }
    }
    return ret2
}

console.log(max(10, 3, 20, 55, 23))
console.log(min(11, 3, 22, 54, 21))