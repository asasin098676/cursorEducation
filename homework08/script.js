class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.Marks = [5, 4, 4, 5];
    this.status = true;
  }

  getInfo() {
    return `Студент ${this.course}-го курсу ${this.university}, ${this.fullName} `;
  }

  get marks() {
    return this.status ? this.Marks : null;
  }

  set marks(newMark) {
    if (this.status) {
      this.Marks.push(newMark);
    }
  }

  getAverageMark() {
    return (
      this.Marks.reduce((av, curEl) => av + curEl, 0) / (this.Marks.length || 1)
    );
  }

  get active() {
    return this.status;
  }
  set active(val) {
    this.statusі = val;
  }

  dismiss() {
    this.active = false;
  }

  recover() {
    this.active = true;
  }
}

let newStudent = new Student("ЛАДК", 2, "Кульчицький Іван Рманович");
console.log(newStudent.getInfo());

console.log(newStudent.marks);
newStudent.marks = 5;
console.log(newStudent.getAverageMark());
newStudent.dismiss();
console.log(newStudent.marks);
newStudent.recover();
console.log(newStudent.marks);
