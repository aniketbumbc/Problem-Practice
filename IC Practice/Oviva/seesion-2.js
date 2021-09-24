console.log('Call Back Server');

const students = [
  {
    name: 'Bunny',
    language: 'Java Script',
  },
  {
    name: 'Mike',
    language: 'Java',
  },
  {
    name: 'Joe',
    language: 'Dot Net',
  },
  {
    name: 'Jeneey',
    language: 'Angular',
  },
];

function enrollStudent(student) {
  setTimeout(() => {
    students.push(student);
  }, 3000);
}

function getStudent() {}

// enrollStudent({ name: 'harry', language: 'Python' });
// getStudent();

function print(cb) {
  console.log('Printing');
  setTimeout(() => {
    cb();
  }, 4000);
}
function cb() {
  setTimeout(() => {
    students.forEach((student) => console.log(student));
  }, 1000);
}

print(cb);
