const student1 = {
  name: 'Abu',
  number: 232,
  address: {
    location: 'MD',
  },
};

const stud2 = { ...student1 };

stud2.name = 'Mike';
stud2.address.location = 'NYC';

console.log(student1);

console.log(stud2);
