function Circle(radius) {
    this.PI = Math.PI;
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    }
    // return {a : 1, b : 2}
    // return 10 기본값에는 this가 암묵적으로 반환된다
}
// 5 : 호출 시점에 사용되는 인자
const circle = new Circle(5)
circle.radius = 10;
console.log(circle.getDiameter())
const c = new Circle(10)
console.log(c.getDiameter())
console.log(circle.PI)

function Rect(x, y) {
    this.x = x;
    this.y = y;
    
    this.printArea = function() {
        console.log(this.x * this.y);
        return this;
    }
    this.setX = function(x) {
        this.x = x;
        return this;
    }
    this.setY = function(y) {
        this.y = y;
        return this;
    }
}

new Rect(3, 4).printArea().setX(5).printArea().setY(5).printArea().setX(6).printArea().setY(6).printArea()

function Add(a, b){
    this.a = a;
    this.b = b;
    
    this.asd = function() {
        console.log(this.a + this.b)
    }
}

new Add(2, 3).asd()