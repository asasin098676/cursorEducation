const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми іструктури даних",
];
const marks = [4, 5, 5, 3, 4, 5];
let StudentPairs = [];
let classPair = [];
let studentMark = [];
let randomMarks = [];

function getPairs(val) {
  let mans = [];
  let woomans = [];
  for (let i = 0; i < val.length; i++) {
    let peopl = val[i];
    if (peopl[peopl.length - 1] === "а") {
      woomans.push(peopl);
    } else {
      mans.push(peopl);
    }
  }
  for (i in woomans) {
    StudentPairs.push([mans[i], woomans[i]]);
  }
  return StudentPairs;
}
function pairsTheme(themes, pairArray) {
  for (i = 0; i < pairArray.length; i++) {
    let pair = pairArray[i];
    classPair.push([`${pair[0]} і ${pair[1]}`, themes[i]]);
  }
  return classPair;
}
function mark(student, marks) {
  for (i in student) {
    studentMark.push([student[i], marks[i]]);
  }
  return studentMark;
}
function randomMark(vaulue) {
  for (i in vaulue) {
    let random = Math.floor(Math.random() * 4 + 1);
    randomMarks.push([vaulue[i][0], vaulue[i][1], random]);
  }
  return randomMarks;
}

console.log(getPairs(students));
console.log(pairsTheme(themes, StudentPairs));
console.log(mark(students, marks));
console.log(randomMark(classPair));
