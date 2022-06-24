var Counter = (function() {
    var num = 0;  // private
    
    function increase() {
        return ++num;
    }

    function decrease() {
        return --num;
    }

    return {
        increase : increase,
        decrease : decrease
    }
})();

console.log(Counter.num);
console.log(Counter.increase());
console.log(Counter.increase());
console.log(Counter.increase());
console.log(Counter.decrease());
console.log(Counter.decrease());

var replyService = (function() {

    return {
        register : function() {
            console.log("댓글 작성 기능")
        },
        modify : function() {
            console.log("댓글 수정 기능")
        },
        remove : function() {
            console.log("댓글 삭제 기능")
        }
    }
}());