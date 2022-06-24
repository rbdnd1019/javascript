// 생성자 함수
function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.getArea = function() {
    return Math.PI * this.radius ** 2;
}

Circle.prototype.PI = Math.PI;

Circle.PI = Math.PI;

// 반지름이 1인 인스턴스 생성
const circle1 = new Circle(1);
// 반지름이 2인 인스턴스 생성
const circle2 = new Circle(2);

console.log(circle1.getArea === circle2.getArea);

console.log(circle1.getArea());
console.log(circle2.getArea());

console.log(circle1.PI);
console.log(Circle.PI);

// Date
// Date타입의 인스턴스에 toMyString 이라는 메서드를 제작 > \
// yyyy-mm-dd HH:mm:ss형태의 시간정보를 반환
Number.prototype.lz = function() {
    return this < 10 ? "0" + this : ""+this;
}
var num = 15;
console.log(num.lz())

Date.prototype.toMyString = function() {
    return `${this.getFullYear()}/${(this.getMonth()+1).lz()}/${(this.getDate()).lz()}`
     +` ${this.getHours()}:${this.getMinutes()}:${this.getSeconds()}`;
}

const now = new Date();
console.log(now.toMyString())
