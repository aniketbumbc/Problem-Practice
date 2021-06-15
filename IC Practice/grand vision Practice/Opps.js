// class Student {
//   name: string;
//   age: number;

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   displayStud() {
//     console.log('Name ', this.name);
//     console.log('Age ', this.age);
//   }
// }

// class City extends Student {
//   constructor(name: string, age: number, private city: string) {
//     super(name, age);
//   }

//   display() {
//     console.log('Name ', this.name);
//     console.log('Age ', this.age);
//     console.log('City ', this.city);
//   }
// }

// let c1 = new City('Bunny', 34, 'NYC');
// c1.display();
// c1.displayStud();

// /* Interface */

// interface Istudent {
//   name: string;
//   age: number;
//   display();
// }

// class School implements Istudent {
//   name: string;
//   age: number;

//   constructor(age: number, name: string) {
//     this.age = age;
//     this.name = name;
//   }

//   display() {
//     console.log(this.name);
//     console.log(this.age);
//   }
// }

// let sc1 = new School(3434, 'dfdf');
// sc1.display();
