const users = ['Ted', 'Tom', 'Time', 'Sam', 'Sor', 'Sod'];

console.log(users);

console.log(users.slice(3, 5)); // in range last is exclusive return new array not modify current array

users.splice(1, 0, 'This is it', 'Tom', 'Time', 'Sam', 'Sor', 'Sod'); // index,delete or remove element

console.log(users);
