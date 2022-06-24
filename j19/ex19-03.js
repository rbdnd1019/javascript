// 생성자 함수
function Circle(radius) {
    this.radius = radius;
    this.getArea = function() {
        return Math.PI * this.radius ** 2;
    };
}
// 반지름이 1인 인스턴스 생성
const circle1 = new Circle(1);
// 반지름이 2인 인스턴스 생성
const circle2 = new Circle(2);

console.log(circle1.getArea == circle2.getArea);

console.log(circle1.getArea());
console.log(circle2.getArea());

