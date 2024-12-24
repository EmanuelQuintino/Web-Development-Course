// explicit or inference typing

let test: number | string | boolean; // primitives types (union)

test = 1;
test = "";
test = true;

let color: "red" | "green" | "blue";
color = "blue";

// function

function sum(num1: number, num2: number): number {
  return num1 + num2;
}

const result = sum(2, 3);

// array

const array: string[] = [];
array.push("A");

// object

type User = {
  name: string;
  age: number;
  isAdmin?: true;
};

const user1: User = {
  name: "Emanuel Quintino",
  age: 32,
  isAdmin: true,
};

const user2: User = {
  name: "Emanuel Quintino",
  age: 32,
};

user1.name = "Reprograma Jucas";
user2.isAdmin = true;

function checkIsAdmin({ isAdmin }: User) {
  if (isAdmin) return true;
  return false;
}

checkIsAdmin(user1);

const users = [] as User[]; // assertion
users.push(user1);
users.push(user2);

// intersection

type Admin = {
  sector: "TI" | "RH";
};

const admin = {} as User & Admin;
admin.sector = "TI";
