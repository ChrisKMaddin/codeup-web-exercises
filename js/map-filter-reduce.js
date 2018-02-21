
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];


//.filter
//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const moreLanguageUsers = users.filter((user) => {
    return user.languages.length >= 3;
    });

console.log(moreLanguageUsers);

//(({ languages })) < where users is


//.map
//Use .map to create an array of strings where each element is a user's email address
// const results = languages.filter(n => n % 3 === 0);
// console.log(results);


// const emails = users.map((user) => {
//     return user.email;
// });
// console.log(emails);

const emails = users.map(user => user.email);
console.log(emails);

// const emails = users.map(({ email }) => email);
// console.log(emails);

//.reduce
//7Use .reduce to transform the array into an object where the object's keys are ids and the values are objects that represent each user

const userObject = users.reduce((accum, user) => {
    accum[user.id] = user;

    //return accum += user.name + " ";
    return accum;
    }, {});

console.log(userObject);

// const userObject = users.reduce((accum, {id, name, email, languages}) => {
//     accum[id] = {
//         name,
//         email,
//         languages
//     };
//     return accum;
// },{});

//     1:{
//         id: 1,
//         name: 'ryan',
//         email: 'ryan@codeup.com',
//         languages: ['clojure', 'javascript'],
//     },
//
//     2:{
//         id: 2,
//         name: 'luis',
//         email: 'luis@codeup.com',
//         languages: ['java', 'scala', 'php'],
//     },
//     3:{
//         id: 3,
//         name: 'zach',
//         email: 'zach@codeup.com',
//         languages: ['javascript', 'bash'],
//     },
//     4:{
//         id: 4,
//         name: 'fernando',
//         email: 'fernando@codeup.com',
//         languages: ['java', 'php', 'sql'],
//     },
//     5:{
//         id: 5,
//         name: 'justin',
//         email: 'justin@codeup.com',
//         languages: ['html', 'css', 'javascript', 'php'],
//     },
// }










