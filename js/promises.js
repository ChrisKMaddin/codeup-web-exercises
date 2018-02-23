"use strict";

//my solution
function wait (number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, number);
    });
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

//instructors solution
// const wait = (timer) => {
//     return new Promise( (resolve, reject) => {
//         setTimeout(() => {
//             resolve("Your promise resolved after " + timer + "" +
//                 " milliseconds.");
//         }, timer);
//     });
// };
//
// wait(1000).then((data) => console.log(data));
// wait(2500).then((data) => console.log(data));
// wait(3300).then((data) => console.log(data));

    //my solution
    function lastCommit(username){
    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': 'token b184bd352a1bc485224445791dd79dba718def8d'}})
        .then((response) => response.json())
        .then(data => {
            let lastCommit = data[0].created_at.substring(0, 10);
            console.log(`${username}'s last commit was on: ${lastCommit}`)
        })
        .catch(() => console.error('error'));
}
lastCommit('chriskmaddin');


//instructors solution
// function getDateOfLastCommit(username) {
//     let dates = [];
//
//     let url = 'https://api.github.com/users/' + username + '/events/public';
//     let options = {
//     headers: {
//         'Authorization': 'token b184bd352a1bc485224445791dd79dba718def8d'}
//     };
//
//     fetch(url, options)
//         .then( response => response.json())
//         .then( (repositories) => {
//             repositories.map(repo => {
//                 dates.push(repo.updated_at);
//                 });
//             dates.sort();
//             document.querySelector('span').innerText = new Date(dates[dates.length -1]);
//             });
//         }
// getDateOfLastCommit("chriskmaddin");










