import { greetUser, addTwoNums } from "./greet.js";

greetUser("John Doe");
addTwoNums(20, 23);

// destructuring is getting specific datat from a variable or object for use
// const student = {
//   name: "Muhammad",
//   age: "24",
//   course: "bscs"
  
// }
// console.log(student);
// destructuring format
// const { name, age, course } = student;
// console.log(`My name is ${name}, I am ${age}, i am studying ${course}`);

// to spread from two variable arrays use ...

const studentt = {
    name: "Muhammad",
    age: "24",
    course: "bscs"
};

const schooldata = {
    schoolname: "Abu zaria",
    Address: "kotangora estate",
    class: "bsit-2020",
};

// spread syntax
const fullinfo = {
    ...schooldata,
    ...studentt
};

const { name, age, schoolname, course, Address } = fullinfo;
console.log(fullinfo);
console.log(`My name is ${name}, I am ${age}, i am studying ${course}, i am schooling in ${schoolname}, at location ${Address}`);