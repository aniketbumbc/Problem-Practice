let name = {
  firstName: 'Bunny',
  lastName: 'Bugs',
};

let printFullName = function (city, country) {
  console.log(this.firstName, this.lastName, city, country);
};

printFullName.call(name, 'MD', 'NYC');

let locationed = {
  firstName: 'DC',
  lastName: 'usa',
};

printFullName.call(locationed, 'Mumbai', 'India');
printFullName.apply(locationed, ['DP', 'London']);

// bind

let printName = printFullName.bind(name, 'Thane', 'Mumbai');

printName();
