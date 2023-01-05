const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

function getSubjects(st) {
  const sub = Object.keys(st.subjects);
  const name = st.name;
  for (i in sub) {
    sub[i] = sub[i].replace("_", " ");
    sub[i] = sub[i][0].toUpperCase() + sub[i].substring(1);
  }
  const res = name + " : " + sub;

  return res;
}
function getAverageMark(student) {
  let marks = Object.entries(student.subjects);
  let res = 0;
  let total = 0;
  for (m of marks) {
    let sum = m[1].reduce((total, current) => {
      return total + current;
    }, 0);
    total += m[1].length;
    res += sum;
  }
  res = res / total;
  return res.toFixed(2);
}
function getStudentInfo(student) {
  const name = "name: " + student.name;
  const mark = "mark: " + getAverageMark(student);
  const course = "course:" + student.course;

  return name + mark + course;
}
function getStudentsNames(student) {
  let result = [];
  for (stud of student) {
    result.push(stud.name);
  }
  return result.sort();
}
function getBestStudent(students) {
  // console.log(students.length);
  let mark = 0;
  for (stud of students) {
    let val = 0;
    for (mark of students) {
      if (getAverageMark(mark) > val) {
        val = getAverageMark(mark);
        result = mark.name;
      }
    }
    return result;
  }
}
function calculateWordLetters(value) {
  let result = {};
  for (i = 0; i < value.length; i++) {
    let letter = value.charAt(i);
    result[letter] = isNaN(result[letter]) ? 1 : result[letter] + 1;
  }
  return result;
}
console.log(getSubjects(students[0]));
console.log(getAverageMark(students[0]));
console.log(getStudentInfo(students[0]));
console.log(getStudentsNames(students));
console.log(getBestStudent(students));
console.log(calculateWordLetters("тест"));
