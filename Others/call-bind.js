let name = {
  firstName: 'Bunny',
  lastName: 'Bugs',
  printFullName: function () {
    console.log(this.firstName, this.lastName);
  },
  //   printName: () => {
  //     console.log(this.firstName);
  //   },
};

// name.printFullName();

name.printFullName.call(name);
