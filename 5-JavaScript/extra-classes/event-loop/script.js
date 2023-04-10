// Call Stack
// console.log(1);

// Call Stack
// for (let index = 0; index < 200000; index++) {
//   console.log(index);
// }  

// Microtask
// queueMicrotask(() => {
//   console.log(2);
// });

// Tasks
// setTimeout(() => {
//   console.log(3);
// }, 2000);

// Microtask
// Promise.resolve(true).then(() => {
//   console.log(4);
// });

// function sum(a, b) {
//   queueMicrotask(() => {
//     console.log(6);
//   })
//   return a + b;
// }

// Call Stack
// console.log(sum(2, 3));

async function fetchUser() {
  const API = user => `https://api.github.com/users/${user}`;
  // const users = ["EmanuelQuintino", "Maria", "Carla"];

  console.time();
  // const user1 = await fetch(API('EmanuelQuintino'));
  // const user2 = await fetch(API('Maria'));
  // const user3 = await fetch(API('Carla'));
  const [
    user1, 
    user2, 
    user3
  ] = await Promise.all([
    fetch(API('EmanuelQuintino')),
    fetch(API('Maria')),
    fetch(API('Carla'))
  ]);

  // for (let i = 0; i < users.length; i++) {
    // fetch(API(users[i])).then((response) => console.log(response.data));
  // }

  // users.forEach((user) => {
    // fetch(API(user)).then((response) => console.log(response.data));
  // });

  // users.map((user) => {
  //   fetch(API(user)).then((response) => console.log(response.data));
  // });

  console.log(user1);
  console.log(user2);
  console.log(user3);
  // console.log(users);/
  console.timeEnd();
}

fetchUser();
