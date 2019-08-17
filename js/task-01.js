const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

users.shift();
console.log(users);

users.pop();
console.log(users);

users.unshift('Lux');
console.log(users);

users.push('Jay', 'Kiwi');
console.log(users);

const userToDelete = 'Ajax';
let user = users.indexOf(userToDelete);
users.splice(user, 1);
console.log(users);

const userToInsert = 'Kong';
const insertBefore = 'Jay';
user = users.indexOf(insertBefore);
users.splice(user, 0, userToInsert);
console.log(users);