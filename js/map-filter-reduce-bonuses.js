"use strict";

const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];
const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];
// PROBLEM 1 - create an array of the first letters of each fruit
// const firstLetter = fruits.map(user => user.fruits);
// console.log(firstLetter);
let firstLetter = fruits.map(fruit => fruit.charAt(0));
console.log(firstLetter.join(''));

// PROBLEM 2 - create array of user objects based on the customers array
// of objects (each user object should just have name and age properties)
const customerArray = customers.map(({ name, age }) => {
    return {
        name,
            age,
        //"hair_color": "blue"
    };
});

console.log(customerArray);

// PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects

const civilServants = customers.filter(({occupation}) => {
    return occupation == "Teacher" || occupation == "Police Officer";
});
console.log(civilServants);

// PROBLEM 4 - determine the average age of customers

const averageAge = family.reduce((accumulator, person) => {
    accumulator += person.age;
    return accumulator;
}, 0);
console.log(averageAge);


//            PROBLEM 1 HINT - use .map()
//            PROBLEM 2 HINT - use .map()
//            PROBLEM 3 HINT - use .filter()
//            PROBLEM 4 HINT - use .reduce()



const family = [
    {
        name: "Karen",
        gender: "female",
        age: 29,
    },
    {
        name: "Summer",
        gender: "female",
        age: 10,
    },
    {
        name: "Bob",
        gender: "male",
        age: 32,
    },
];


// complete the bonuses below...
// - Calculate the average age of family members
const averageAge = family.reduce((accumulator, person) => {
    accumulator += person.age;
    return accumulator;
}, 0);
console.log(averageAge);



// - Create an array of family objects without the age property
// - Create an array of all minors
var minors = family.filter(({age}) => {
    return age <18;
});

// - Calculate the total age combined of family members
// - Create an array of only female family member objects
// - Create a single object with properties containing arrays of all names, genders, and age
// var output = {
//     "names": ["Bob", "Summer", "Karen"],
//     "genders": ["male", "female"],
//     "age": [29, 10, 32]
// };

// const output = family.reduce((accumulator, person) => {
//     if(typeof accumulator.names === "undefinded") {
//         accumulator.names = [];
//     }
//     if(typeof accumulator.ages === "undefinded") {
//         accumulator.ages = [];
//     }
//     if(typeof accumulator.genders === "undefinded") {
//         accumulator.genders = [];
//     }
//         accumulator.names.push(person.name);
//         accumulator.ages.push(person.age);
//         accumulator.genders.push(person.gender);
//
//         return accumulator;
// }, {});
// console.log(output);

const output = {
    names: family.map(obj => obj.name),
    genders: family.map(obj => obj.gender),
    ages: family.map(obj => obj.age),
};

