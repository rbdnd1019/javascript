// no, name, kor, eng, mat, sum, avg

var students = [];
// students.push({no:1, name:"가길동"})
// students.push({no:2, name:"나길동"})

// 생성자 함수
function Student(no, name, kor, eng, mat, sum, avg) {  
    this.no = no;
    this.name = name ?? "고길동";
    this.kor = kor ?? 0;
    this.eng = eng ?? 0;
    this.mat = mat ?? 0;

    // this.sum = function() {
    //     return this.kor + this.eng + this.mat;
    // }

    // this.avg = function() {
    //     return this.sum() / 3;
    // }
   
}

students.push(new Student(1, "1길동", 80, 90, 90))
students.push(new Student(2, "2길동", 90, 90, 99))
students.push(new Student(3))

// console.log(students)
// console.log(students[0].eng)

// prototype :: 생성된 객체가 공유하는 공간

Student.prototype.sum = function() {
        return this.kor + this.eng + this.mat;
}
Student.prototype.avg = function() {
        return this.sum() / 3;
}

for(var i in students) {
    console.log('총점 :' + students[i].sum())
    console.log('평균 :' + students[i].avg())
}

